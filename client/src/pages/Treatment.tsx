import { useParams, Link } from 'wouter';
import { useEffect, useState } from 'react';
import { ArrowLeft, Clock, User, AlertTriangle, DollarSign, HelpCircle, CheckCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { treatmentsList, fetchTreatmentData, getSummaryByLanguage, getContentByLanguage, normalizeTreatmentData, type TreatmentData } from '@/data/treatments';

const Treatment = () => {
  const { slug } = useParams();
  const { t, lang } = useLanguage();
  const [treatmentData, setTreatmentData] = useState<TreatmentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Find treatment metadata from slug
  const treatment = treatmentsList.find(t => t.slug === slug);
  const langKey = lang === 'hi' ? 'hi' : lang === 'te' ? 'te' : 'en';

  // Load treatment data when component mounts or slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
    loadTreatmentData();
  }, [slug]);

  const loadTreatmentData = async () => {
    if (!treatment) {
      setError(true);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(false);
    
    try {
      const data = await fetchTreatmentData(treatment.id);
      if (data) {
        setTreatmentData(normalizeTreatmentData(data));
      } else {
        setError(true);
      }
    } catch (err) {
      console.error('Error loading treatment data:', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center py-16">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Clock className="w-6 h-6 animate-spin" />
            <span className="text-lg">
              {lang === 'hi' ? 'लोड हो रहा है...' :
               lang === 'te' ? 'లోడ్ అవుతోంది...' :
               'Loading treatment information...'}
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !treatment || !treatmentData) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto rounded-3xl p-8 card-shadow">
          <CardContent>
            <h1 className="text-2xl font-bold text-foreground font-serif mb-4">
              {lang === 'hi' ? 'उपचार नहीं मिला' :
               lang === 'te' ? 'చికిత్స కనుగొనబడలేదు' :
               'Treatment Not Found'}
            </h1>
            <p className="text-muted-foreground mb-6">
              {lang === 'hi' ? 'आपके द्वारा खोजी जा रही उपचार जानकारी उपलब्ध नहीं है।' :
               lang === 'te' ? 'మీరు వెతుకుతున్న చికిత్స సమాచారం అందుబాటులో లేదు।' :
               'The treatment information you\'re looking for doesn\'t exist.'}
            </p>
            <Link href="/treatments">
              <Button className="gradient-button text-white rounded-full">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {lang === 'hi' ? 'उपचारों पर वापस जाएं' :
                 lang === 'te' ? 'చికిత్సలకు తిరిగి వెళ్ళండి' :
                 'Back to Treatments'}
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Get localized content with safety checks
  const summary = getSummaryByLanguage(treatmentData?.summary, langKey);
  const whoBenefits = getContentByLanguage(treatmentData?.who_might_benefit, langKey) || [];
  const processSteps = getContentByLanguage(treatmentData?.process_steps, langKey) || [];
  const risks = getContentByLanguage(treatmentData?.risks_considerations, langKey) || [];
  const costConsiderations = getContentByLanguage(treatmentData?.cost_considerations, langKey) || [];
  const questionsToAsk = getContentByLanguage(treatmentData?.questions_to_ask, langKey) || [];
  const reviewedBy = treatmentData?.reviewed_by || 'Dr. Raghav Iyer';
  const sources = treatmentData?.sources || [];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Navigation */}
      <div className="mb-8">
        <Link href="/treatments">
          <Button variant="ghost" className="rounded-full" data-testid="button-back-treatments">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {lang === 'hi' ? 'उपचारों पर वापस जाएं' :
             lang === 'te' ? 'చికిత్సలకు తిరిగి వెళ్ళండి' :
             'Back to Treatments'}
          </Button>
        </Link>
      </div>

      {/* Treatment Header */}
      <Card className="rounded-3xl p-8 md:p-12 card-shadow mb-8">
        <CardContent className="p-0">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground font-serif mb-6" data-testid="text-treatment-name">
            {treatmentData.title || treatment.title}
          </h1>

          <p className="text-lg text-muted-foreground mb-6" data-testid="text-treatment-overview">
            {summary || 'Comprehensive treatment information.'}
          </p>

          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span data-testid="text-treatment-reviewer">
                {lang === 'hi' ? 'द्वारा समीक्षित' :
                 lang === 'te' ? 'సమీక్షించినవారు' :
                 'Reviewed by'} {reviewedBy}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Treatment Details */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Who Might Benefit */}
        <Card className="rounded-3xl p-6 card-shadow">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground font-serif">
              {lang === 'hi' ? 'किसे फायदा हो सकता है' :
               lang === 'te' ? 'ఎవరికి ప్రయోజనం ఉంటుంది' :
               'Who Might Benefit'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {whoBenefits && whoBenefits.length > 0 ? whoBenefits.map((item, index) => (
                <li key={index} className="flex items-start space-x-3" data-testid={`item-who-benefits-${index}`}>
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              )) : (
                <li className="text-muted-foreground italic">
                  {lang === 'hi' ? 'जानकारी लोड हो रही है...' :
                   lang === 'te' ? 'సమాచారం లోడ్ అవుతోంది...' :
                   'Loading information...'}
                </li>
              )}
            </ul>
          </CardContent>
        </Card>

        {/* Process Steps */}
        <Card className="rounded-3xl p-6 card-shadow">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground font-serif">
              {lang === 'hi' ? 'प्रक्रिया के चरण' :
               lang === 'te' ? 'ప్రక్రియ దశలు' :
               'Process Steps'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4">
              {processSteps && processSteps.length > 0 ? processSteps.map((step, index) => (
                <li key={index} className="flex items-start space-x-3" data-testid={`item-process-step-${index}`}>
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-muted-foreground leading-relaxed">{step}</span>
                </li>
              )) : (
                <li className="text-muted-foreground italic">
                  {lang === 'hi' ? 'प्रक्रिया की जानकारी लोड हो रही है...' :
                   lang === 'te' ? 'ప్రక్రియ సమాచారం లోడ్ అవుతోంది...' :
                   'Loading process information...'}
                </li>
              )}
            </ol>
          </CardContent>
        </Card>
      </div>

      {/* Risks and Costs */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Risks & Considerations */}
        <Card className="rounded-3xl p-6 card-shadow">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground font-serif flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-orange-500" />
              {lang === 'hi' ? 'जोखिम और विचार' :
               lang === 'te' ? 'రిస్క్‌లు మరియు పరిగణనలు' :
               'Risks & Considerations'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {risks && risks.length > 0 ? risks.map((risk, index) => (
                <li key={index} className="flex items-start space-x-3" data-testid={`item-risk-${index}`}>
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{risk}</span>
                </li>
              )) : (
                <li className="text-muted-foreground italic">
                  {lang === 'hi' ? 'जोखिम की जानकारी लोड हो रही है...' :
                   lang === 'te' ? 'రిస్క్ సమాచారం లోడ్ అవుతోంది...' :
                   'Loading risk information...'}
                </li>
              )}
            </ul>
          </CardContent>
        </Card>

        {/* Cost Information */}
        <Card className="rounded-3xl p-6 card-shadow">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground font-serif flex items-center">
              <DollarSign className="w-5 h-5 mr-2 text-green-500" />
              {lang === 'hi' ? 'लागत संबंधी विचार' :
               lang === 'te' ? 'ఖర్చు పరిగణనలు' :
               'Cost Considerations'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {costConsiderations && costConsiderations.length > 0 ? costConsiderations.map((cost, index) => (
                <li key={index} className="flex items-start space-x-3" data-testid={`item-cost-${index}`}>
                  <DollarSign className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{cost}</span>
                </li>
              )) : (
                <li className="text-muted-foreground italic">
                  {lang === 'hi' ? 'लागत की जानकारी लोड हो रही है...' :
                   lang === 'te' ? 'ఖర్చు సమాచారం లోడ్ అవుతోంది...' :
                   'Loading cost information...'}
                </li>
              )}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Questions to Ask Doctor */}
      <Card className="rounded-3xl p-6 card-shadow mb-8">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-foreground font-serif flex items-center">
            <HelpCircle className="w-5 h-5 mr-2 text-blue-500" />
            {lang === 'hi' ? 'अपने डॉक्टर से पूछने के लिए प्रश्न' :
             lang === 'te' ? 'మీ వైద్యుడిని అడగవలసిన ప్రశ్నలు' :
             'Questions to Ask Your Doctor'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {questionsToAsk && questionsToAsk.length > 0 ? questionsToAsk.map((question, index) => (
              <li key={index} className="flex items-start space-x-3" data-testid={`item-doctor-question-${index}`}>
                <HelpCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground font-medium">{question}</span>
              </li>
            )) : (
              <li className="text-muted-foreground italic">
                {lang === 'hi' ? 'सवाल लोड हो रहे हैं...' :
                 lang === 'te' ? 'ప్రశ్నలు లోడ్ అవుతున్నాయి...' :
                 'Loading questions...'}
              </li>
            )}
          </ul>
        </CardContent>
      </Card>

      {/* Sources */}
      <Card className="rounded-3xl p-6 card-shadow">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-foreground font-serif">
            {lang === 'hi' ? 'स्रोत' :
             lang === 'te' ? 'మూలాలు' :
             'Sources'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {sources && sources.length > 0 ? sources.map((source, index) => (
              <Badge key={index} variant="outline" data-testid={`badge-source-${index}`}>
                {source}
              </Badge>
            )) : (
              <span className="text-muted-foreground italic text-sm">
                {lang === 'hi' ? 'स्रोत लोड हो रहे हैं...' :
                 lang === 'te' ? 'మూలాలు లోడ్ అవుతున్నాయి...' :
                 'Loading sources...'}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Treatment;