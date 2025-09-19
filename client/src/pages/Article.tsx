import { useParams, Link } from 'wouter';
import { useEffect, useState } from 'react';
import { ArrowLeft, Clock, User, ExternalLink } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { articles } from '@/data/articles';
import { fetchArticleData, type ArticleData, type ArticleContent } from '@/data/knowledgeHub';

const Article = () => {
  const { slug } = useParams();
  const { t, lang } = useLanguage();
  const [articleData, setArticleData] = useState<ArticleData | null>(null);
  const [loading, setLoading] = useState(true);
  const [useJsonData, setUseJsonData] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Load article data
  useEffect(() => {
    const loadArticle = async () => {
      if (!slug) return;
      
      setLoading(true);
      try {
        // Try to fetch JSON data first
        const jsonData = await fetchArticleData(slug);
        if (jsonData) {
          setArticleData(jsonData);
          setUseJsonData(true);
        } else {
          setUseJsonData(false);
        }
      } catch (error) {
        console.error('Error loading article:', error);
        setUseJsonData(false);
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [slug]);

  // Helper function to get localized content
  const getLocalizedContent = (content: any) => {
    if (!content) return '';
    if (typeof content === 'string') return content;
    
    const langKey = lang === 'hi' ? 'hi' : lang === 'te' ? 'te' : 'en';
    return content[langKey] || content.en || '';
  };

  // Find legacy article for fallback
  const legacyArticle = articles.find(a => a.slug === slug);

  // Render article content
  const renderContent = (content: ArticleContent) => {
    switch (content.type) {
      case 'paragraph':
        return (
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {getLocalizedContent(content.text)}
          </p>
        );
      case 'subheading':
        return (
          <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
            {getLocalizedContent(content.text)}
          </h3>
        );
      case 'list':
        return (
          <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
            {content.items?.map((item, index) => (
              <li key={index} className="leading-relaxed">
                {getLocalizedContent(item)}
              </li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  // Get related articles (only for legacy articles that have lens data)
  const relatedArticles = legacyArticle ? 
    articles.filter(a => a.slug !== legacyArticle.slug && a.lens.some(l => legacyArticle.lens.includes(l))).slice(0, 3) : 
    [];

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded mb-4 w-1/4"></div>
          <div className="h-12 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded mb-8 w-1/2"></div>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!articleData && !legacyArticle) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Link href="/knowledge">
            <Button variant="outline" className="rounded-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Knowledge Hub
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/knowledge">
          <Button variant="ghost" className="rounded-full" data-testid="button-back-knowledge">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {lang === 'hi' ? 'ज्ञान केंद्र में वापस जाएं' : 
             lang === 'te' ? 'నాలెడ్జ్ హబ్‌కు తిరిగి వెళ్లండి' : 
             'Back to Knowledge Hub'}
          </Button>
        </Link>
      </div>

      {/* Article Header */}
      <header className="mb-12">
        {/* Show lens badges only for legacy articles (when no JSON data is available) */}
        {!useJsonData && legacyArticle && (
          <div className="flex flex-wrap gap-2 mb-4">
            {legacyArticle.lens.map((lens: string) => (
              <Badge key={lens} variant="secondary" className="rounded-full" data-testid={`badge-lens-${lens}`}>
                {lens === 'medical' ? t('lens_medical') :
                 lens === 'social' ? t('lens_social') :
                 lens === 'financial' ? t('lens_financial') :
                 lens}
              </Badge>
            ))}
          </div>
        )}

        <h1 className="text-4xl md:text-5xl font-bold text-foreground font-serif mb-4" data-testid="text-article-title">
          {useJsonData ? getLocalizedContent(articleData?.title) : getLocalizedContent(legacyArticle?.title)}
        </h1>
        
        <p className="text-lg text-muted-foreground mb-6" data-testid="text-article-overview">
          {useJsonData ? getLocalizedContent(articleData?.overview) : getLocalizedContent(legacyArticle?.summary)}
        </p>

        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span data-testid="text-read-time">
              {useJsonData ? getLocalizedContent(articleData?.metadata?.readTime) : `${legacyArticle?.readMins || 5} min read`}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <User className="w-4 h-4" />
            <span data-testid="text-reviewer">
              {useJsonData ? getLocalizedContent(articleData?.metadata?.reviewer) : legacyArticle?.reviewedBy}
            </span>
          </div>
        </div>
      </header>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="prose prose-lg max-w-none">
            {useJsonData && articleData ? (
              // Render JSON-based content
              articleData.sections.map((section) => (
                <section key={section.id} className="mb-8">
                  {getLocalizedContent(section.title) && (
                    <h2 className="text-2xl font-bold text-foreground mb-4 font-serif">
                      {getLocalizedContent(section.title)}
                    </h2>
                  )}
                  <div className="space-y-4">
                    {section.content.map((content, index) => (
                      <div key={index}>
                        {renderContent(content)}
                      </div>
                    ))}
                  </div>
                </section>
              ))
            ) : legacyArticle ? (
              // Render legacy content
              <div className="space-y-6">
                {legacyArticle.content.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed">
                    {getLocalizedContent(paragraph)}
                  </p>
                ))}
              </div>
            ) : null}

            {/* Disclaimer */}
            {useJsonData && articleData?.disclaimer && (
              <div className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-2xl">
                <p className="text-sm text-yellow-800">
                  <strong>Disclaimer:</strong> {getLocalizedContent(articleData.disclaimer)}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Sources */}
          <Card className="rounded-3xl p-6 card-shadow mb-6">
            <CardHeader className="p-0 pb-4">
              <CardTitle className="text-lg font-semibold text-foreground">
                {lang === 'hi' ? 'स्रोत' : lang === 'te' ? 'మూలాలు' : 'Sources'}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-2">
                {(useJsonData ? 
                  articleData?.metadata?.sources : 
                  legacyArticle?.sources || []
                ).map((source: string, index: number) => (
                  <div key={index} className="flex items-center space-x-2">
                    <ExternalLink className="w-3 h-3 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{source}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Related Articles - only show for legacy articles when no JSON data */}
          {!useJsonData && legacyArticle && relatedArticles.length > 0 && (
            <Card className="rounded-3xl p-6 card-shadow">
              <CardHeader className="p-0 pb-4">
                <CardTitle className="text-lg font-semibold text-foreground">
                  {lang === 'hi' ? 'संबंधित लेख' : lang === 'te' ? 'సంబంధిత వ్యాసాలు' : 'Related Articles'}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4">
                  {relatedArticles.map((relatedArticle, index) => (
                    <Link key={relatedArticle.slug} href={`/knowledge/${relatedArticle.slug}`}>
                      <div className="p-4 rounded-2xl border border-gray-100 hover:border-purple-200 hover:bg-purple-50/30 transition-colors cursor-pointer" data-testid={`link-related-article-${index}`}>
                        <h4 className="font-semibold text-foreground mb-1" data-testid={`text-related-title-${index}`}>
                          {getLocalizedContent(relatedArticle.title)}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2" data-testid={`text-related-summary-${index}`}>
                          {getLocalizedContent(relatedArticle.summary)}
                        </p>
                        <span className="text-xs text-purple-600 font-medium">
                          {relatedArticle.readMins} min read
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Article;

const Article = () => {
  const { slug } = useParams();
  const { t, lang } = useLanguage();
  
  const [articleData, setArticleData] = useState<ArticleData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Try to find the article in the legacy articles data first as fallback
  const legacyArticle = articles.find(a => a.slug === slug);

  // Load article data from JSON
  useEffect(() => {
    const loadArticle = async () => {
      if (!slug) return;
      
      setLoading(true);
      setError(null);
      
      try {
        const data = await fetchArticleData(slug);
        if (data) {
          setArticleData(data);
        } else if (!legacyArticle) {
          setError('Article not found');
        }
      } catch (err) {
        console.error('Error loading article:', err);
        setError('Failed to load article');
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [slug, legacyArticle]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Loading state
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto rounded-3xl p-8 card-shadow">
          <CardContent>
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Error state - only show if there's no article data available at all
  if ((!articleData && !legacyArticle) || (error && !legacyArticle)) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto rounded-3xl p-8 card-shadow">
          <CardContent>
            <h1 className="text-2xl font-bold text-foreground font-serif mb-4">
              {lang === 'hi' ? 'लेख नहीं मिला' : lang === 'te' ? 'వ్యాసం కనుగొనబడలేదు' : 'Article Not Found'}
            </h1>
            <p className="text-muted-foreground mb-6">
              {error || (lang === 'hi' ? 'आप जो लेख खोज रहे हैं वह मौजूद नहीं है।' : 
               lang === 'te' ? 'మీరు వెతుకుతున్న వ్యాసం ఉనికిలో లేదు।' : 
               'The article you\'re looking for doesn\'t exist.')}
            </p>
            <Link href="/knowledge">
              <Button className="gradient-button text-white rounded-full">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {lang === 'hi' ? 'ज्ञान केंद्र में वापस जाएं' : 
                 lang === 'te' ? 'నాలెడ్జ్ హబ్‌కు తిరిగి వెళ్లండి' : 
                 'Back to Knowledge Hub'}
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Determine which data to use - prioritize JSON data over legacy data
  const currentArticle = articleData || legacyArticle;
  const useJsonData = !!articleData;  // Use JSON data if available
  
  if (!currentArticle) {
    return null; // Should not happen given our error handling above
  }

  // Helper function to get content in the current language
  const getLocalizedContent = (content: any, fallback: string = '') => {
    if (!content) return fallback;
    if (typeof content === 'string') return content;
    
    const langKey = lang === 'hi' ? 'hi' : lang === 'te' ? 'te' : 'en';
    return content[langKey] || content.en || fallback;
  };

  // Helper function to render article content
  const renderContent = (content: ArticleContent) => {
    const langKey = lang === 'hi' ? 'hi' : lang === 'te' ? 'te' : 'en';
    
    switch (content.type) {
      case 'paragraph':
        return (
          <p className="text-muted-foreground leading-relaxed mb-4">
            {content.text?.[langKey] || content.text?.en || ''}
          </p>
        );
      case 'subheading':
        return (
          <h3 className="text-xl font-bold text-foreground font-serif mb-3 mt-6">
            {content.text?.[langKey] || content.text?.en || ''}
          </h3>
        );
      case 'list':
        return (
          <ul className="list-disc pl-6 space-y-2 mb-4">
            {content.items?.map((item, index) => (
              <li key={index} className="text-muted-foreground leading-relaxed">
                {item[langKey] || item.en || ''}
              </li>
            )) || []}
          </ul>
        );
      default:
        return null;
    }
  };

  // Get related articles (only for legacy articles that have lens data)
  const relatedArticles = legacyArticle ? 
    articles.filter(a => a.slug !== legacyArticle.slug && a.lens.some(l => legacyArticle.lens.includes(l))).slice(0, 3) : 
    [];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/knowledge">
          <Button variant="ghost" className="rounded-full" data-testid="button-back-knowledge">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {lang === 'hi' ? 'ज्ञान केंद्र में वापस जाएं' : 
             lang === 'te' ? 'నాలెడ్జ్ హబ్‌కు తిరిగి వెళ్లండి' : 
             'Back to Knowledge Hub'}
          </Button>
        </Link>
      </div>

      {/* Article Header */}
      <header className="mb-12">
        {/* Show lens badges only for legacy articles (when no JSON data is available) */}
        {!useJsonData && legacyArticle && (
          <div className="flex flex-wrap gap-2 mb-4">
            {legacyArticle.lens.map((lens: string) => (
              <Badge key={lens} variant="secondary" className="rounded-full" data-testid={`badge-lens-${lens}`}>
                {lens === 'medical' ? t('lens_medical') :
                 lens === 'social' ? t('lens_social') :
                 lens === 'financial' ? t('lens_financial') :
                 lens === 'nutrition' ? t('lens_nutrition') : lens}
              </Badge>
            ))}
          </div>
        )}

        <h1 className="text-4xl md:text-5xl font-bold text-foreground font-serif mb-6" data-testid="text-article-title">
          {useJsonData ? 
            getLocalizedContent(articleData.title) : 
            getLocalizedContent(legacyArticle?.title)}
        </h1>

        <p className="text-xl text-muted-foreground mb-8" data-testid="text-article-summary">
          {useJsonData ? 
            getLocalizedContent(articleData.overview) : 
            getLocalizedContent(legacyArticle?.summary)}
        </p>

        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span data-testid="text-read-time">
              {useJsonData ? 
                getLocalizedContent(articleData.metadata?.readTime) : 
                `${legacyArticle?.readMins || 0} ${lang === 'hi' ? 'मिनट पढ़ना' : lang === 'te' ? 'నిమిషాల రీడ్' : 'min read'}`}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <User className="w-4 h-4" />
            <span data-testid="text-reviewed-by">
              {lang === 'hi' ? 'द्वारा समीक्षित' : lang === 'te' ? 'సమీక్షించినవారు' : 'Reviewed by'} {
                useJsonData ? 
                  getLocalizedContent(articleData.metadata?.reviewer) : 
                  legacyArticle?.reviewedBy || ''
              }
            </span>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="space-y-8">
            {useJsonData ? (
              // Render new JSON structure with sections
              articleData.sections.map((section, index) => (
                <Card key={section.id} className="rounded-3xl p-8 card-shadow" data-testid={`card-section-${index}`}>
                  <CardContent className="p-0">
                    {/* Only show title if it's not empty */}
                    {getLocalizedContent(section.title) && (
                      <h2 className="text-2xl font-bold text-foreground font-serif mb-6" data-testid={`text-section-title-${index}`}>
                        {getLocalizedContent(section.title)}
                      </h2>
                    )}
                    <div className="space-y-4">
                      {section.content.map((content, contentIndex) => (
                        <div key={contentIndex}>
                          {renderContent(content)}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              // Render legacy structure - only if no JSON data is available
              legacyArticle?.body.map((section: string, index: number) => (
                <Card key={index} className="rounded-3xl p-8 card-shadow" data-testid={`card-section-${index}`}>
                  <CardContent className="p-0">
                    <h2 className="text-2xl font-bold text-foreground font-serif mb-4" data-testid={`text-section-title-${index}`}>
                      {section}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed" data-testid={`text-section-content-${index}`}>
                      {lang === 'hi' ? 
                        `इस खंड में ${section.toLowerCase()} के बारे में विस्तृत जानकारी होगी।` :
                       lang === 'te' ? 
                        `ఈ విభాగంలో ${section.toLowerCase()} గురించి వివరణాత్మక సమాచారం ఉంటుంది.` :
                        `This section would contain detailed information about ${section.toLowerCase()}.`}
                    </p>
                  </CardContent>
                </Card>
              )) || []
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Sources */}
          <Card className="rounded-3xl p-6 card-shadow">
            <CardHeader className="p-0 pb-4">
              <CardTitle className="text-lg font-semibold text-foreground">
                {lang === 'hi' ? 'स्रोत' : lang === 'te' ? 'మూలాలు' : 'Sources'}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-2">
                {(useJsonData ? 
                  articleData.metadata?.sources : 
                  legacyArticle?.sources || []
                ).map((source: string, index: number) => (
                  <div key={index} className="flex items-center space-x-2">
                    <ExternalLink className="w-3 h-3 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{source}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Related Articles - only show for legacy articles when no JSON data */}
          {!useJsonData && legacyArticle && relatedArticles.length > 0 && (
            <Card className="rounded-3xl p-6 card-shadow">
              <CardHeader className="p-0 pb-4">
                <CardTitle className="text-lg font-semibold text-foreground">
                  {lang === 'hi' ? 'संबंधित लेख' : lang === 'te' ? 'సంబంధిత వ్యాసాలు' : 'Related Articles'}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4">
                  {relatedArticles.map((relatedArticle, index) => (
                    <Link key={relatedArticle.slug} href={`/knowledge/${relatedArticle.slug}`}>
                      <div className="p-4 rounded-2xl bg-background hover:bg-muted transition-colors cursor-pointer" data-testid={`link-related-article-${index}`}>
                        <h4 className="font-semibold text-foreground mb-1" data-testid={`text-related-title-${index}`}>
                          {getLocalizedContent(relatedArticle.title)}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2" data-testid={`text-related-summary-${index}`}>
                          {getLocalizedContent(relatedArticle.summary)}
                        </p>
                        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span data-testid={`text-related-readtime-${index}`}>
                            {relatedArticle.readMins} {lang === 'hi' ? 'मिनट' : lang === 'te' ? 'నిమిషాలు' : 'min'}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Article;