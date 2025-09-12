import { Link } from 'wouter';
import { Calculator, Calendar, Heart, Baby, Clock, CheckCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Tools = () => {
  const { t } = useLanguage();

  const tools = [
    {
      slug: 'ovulation-calculator',
      title: 'tools_ovulation_calc',
      description: 'tools_ovulation_desc',
      icon: Calendar,
      color: 'bg-purple-100 text-purple-600',
      status: 'tools_available'
    },
    {
      slug: 'pregnancy-calculator',
      title: 'tools_pregnancy_calc',
      description: 'tools_pregnancy_desc',
      icon: Baby,
      color: 'bg-pink-100 text-pink-600',
      status: 'tools_available'
    },
    {
      slug: 'cost-estimator',
      title: 'tools_cost_estimator',
      description: 'tools_cost_desc',
      icon: Calculator,
      color: 'bg-green-100 text-green-600',
      status: 'tools_available'
    },
    {
      slug: 'fertility-tracker',
      title: 'tools_fertility_tracker',
      description: 'tools_fertility_desc',
      icon: Heart,
      color: 'bg-blue-100 text-blue-600',
      status: 'tools_coming_soon'
    },
    {
      slug: 'symptom-checker',
      title: 'tools_symptom_guide',
      description: 'tools_symptom_desc',
      icon: CheckCircle,
      color: 'bg-orange-100 text-orange-600',
      status: 'tools_coming_soon'
    },
    {
      slug: 'appointment-prep',
      title: 'tools_appointment_prep',
      description: 'tools_appointment_desc',
      icon: Clock,
      color: 'bg-indigo-100 text-indigo-600',
      status: 'tools_coming_soon'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground font-serif mb-6" data-testid="text-tools-title">
          {t('nav_tools')}
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {t('tools_subtitle')}
        </p>

        {/* Hero Background */}
        <div className="mt-12 relative">
          <img 
            src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400" 
            alt={t('alt_planning_fertility')} 
            className="w-full h-64 object-cover rounded-3xl opacity-20"
          />
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {tools.map((tool, index) => {
          const Icon = tool.icon;
          const isAvailable = tool.status === 'tools_available';
          
          return (
            <Card 
              key={tool.slug} 
              className={`rounded-3xl p-8 card-shadow transition-all duration-300 h-full ${
                isAvailable ? 'hover:shadow-xl cursor-pointer' : 'opacity-75'
              }`}
              data-testid={`card-tool-${index}`}
            >
              <CardContent className="p-0">
                <div className={`w-16 h-16 ${tool.color.split(' ')[0]} rounded-2xl flex items-center justify-center mb-6 ${
                  isAvailable ? 'group-hover:scale-110 transition-transform' : ''
                }`}>
                  <Icon className={`${tool.color.split(' ')[1]} text-2xl`} />
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground font-serif" data-testid={`text-tool-title-${index}`}>
                    {t(tool.title)}
                  </h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    isAvailable 
                      ? 'bg-green-100 text-green-600' 
                      : 'bg-yellow-100 text-yellow-600'
                  }`} data-testid={`badge-tool-status-${index}`}>
                    {t(tool.status)}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-6" data-testid={`text-tool-description-${index}`}>
                  {t(tool.description)}
                </p>

                {isAvailable ? (
                  <Link href={`/tools/${tool.slug}`}>
                    <Button className="gradient-button text-white rounded-full w-full" data-testid={`button-use-tool-${index}`}>
                      {t('tools_use_tool')}
                    </Button>
                  </Link>
                ) : (
                  <Button disabled className="w-full rounded-full" data-testid={`button-tool-coming-soon-${index}`}>
                    {t('tools_coming_soon')}
                  </Button>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Available Tools Detail */}
      <section className="py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground font-serif mb-4 text-center">
            {t('tools_available_tools')}
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            {t('tools_available_subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Ovulation Calculator */}
          <Card className="rounded-3xl p-6 card-shadow">
            <CardContent className="p-0">
              <Calendar className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-lg font-bold text-foreground font-serif mb-2">{t('tools_ovulation_calc')}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {t('tools_ovulation_detail')}
              </p>
              <Link href="/tools/ovulation-calculator">
                <Button className="gradient-button text-white rounded-full w-full" data-testid="button-ovulation-calculator">
                  {t('tools_calculate_now')}
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Due Date Calculator */}
          <Card className="rounded-3xl p-6 card-shadow">
            <CardContent className="p-0">
              <Baby className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-lg font-bold text-foreground font-serif mb-2">{t('tools_pregnancy_calc')}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {t('tools_pregnancy_detail')}
              </p>
              <Link href="/tools/pregnancy-calculator">
                <Button className="gradient-button text-white rounded-full w-full" data-testid="button-pregnancy-calculator">
                  {t('tools_calculate_now')}
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Cost Estimator */}
          <Card className="rounded-3xl p-6 card-shadow">
            <CardContent className="p-0">
              <Calculator className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-lg font-bold text-foreground font-serif mb-2">{t('tools_cost_estimator')}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {t('tools_cost_detail')}
              </p>
              <Link href="/tools/cost-estimator">
                <Button className="gradient-button text-white rounded-full w-full" data-testid="button-cost-estimator">
                  {t('tools_estimate_costs')}
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16">
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 text-center">
          <Heart className="w-16 h-16 text-pink-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-foreground font-serif mb-4">
            Need More Support?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            While tools provide helpful calculations, emotional support is equally important. 
            Sakhi is here for you 24/7.
          </p>
          <Link href="/sakhi">
            <Button className="gradient-button-secondary text-white px-8 py-4 rounded-full font-semibold" data-testid="button-tools-to-sakhi">
              Talk to Sakhi
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Tools;
