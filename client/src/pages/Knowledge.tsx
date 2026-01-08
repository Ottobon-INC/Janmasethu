import { useState, useMemo, useEffect } from 'react';
import { Link } from 'wouter';
import { Search, Filter, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageProvider';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { articles, type Lens, type Stage } from '@/data/articles';
import { fetchArticles } from '@/data/knowledgeHub';

const ARTICLES_PER_PAGE = 15;

interface WebhookArticle {
  id: string;
  slug: string;
  title: string;
  summary: string;
  topic: string;
  section: string;
  lens: string;
  life_stage: string;
  published_at: string;
}


interface WebhookResponse {
  query: string;
  filters: {
    lenses: string[];
    stages: string[];
  };
  pagination: {
    page: number;
    per_page: number;
    total: number;
    has_more: boolean;
  };
  items: WebhookArticle[];
}

const Knowledge = () => {
  const { t, lang: globalLang } = useLanguage(); // Rename global lang to avoid confusion
  // Local state for knowledge hub content language, default to 'en' or persisted value
  const [contentLang, setContentLang] = useState<'en' | 'te'>(() => {
    return (localStorage.getItem('knowledge_lang') as 'en' | 'te') || 'en';
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLens, setSelectedLens] = useState<Lens | null>(null);
  const [selectedStage, setSelectedStage] = useState<Stage | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [jsonArticles, setJsonArticles] = useState<Array<{
    slug: string;
    title: { en: string; hi: string; te: string };
    overview: { en: string; hi: string; te: string };
    readTime: { en: string; hi: string; te: string };
    reviewer: { en: string; hi: string; te: string };
  }>>([]);
  const [webhookResults, setWebhookResults] = useState<WebhookResponse | null>(null);
  const [loading, setLoading] = useState(false); // Start with false for instant skeleton display
  const [searching, setSearching] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);

  // Update content language and persist it
  const handleLanguageChange = (newLang: 'en' | 'te') => {
    setContentLang(newLang);
    localStorage.setItem('knowledge_lang', newLang);
  };

  // Load articles from ngrok API
  useEffect(() => {
    const loadArticles = async () => {
      setLoading(true);
      try {
        // Check for URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const searchParam = urlParams.get('search');
        const lensParam = urlParams.get('lens');
        const stageParam = urlParams.get('stage');

        if (searchParam) {
          setSearchTerm(searchParam);
        }

        if (lensParam && ['medical', 'social', 'financial', 'nutrition'].includes(lensParam)) {
          setSelectedLens(lensParam as Lens);
        }

        if (stageParam && ['ttc', 'pregnancy', 'postpartum', 'newborn', 'early-years'].includes(stageParam)) {
          setSelectedStage(stageParam as Stage);
        }

        // Fetch articles from API using the correct endpoint with local content language
        const response = await fetchArticles({
          perPage: 100,
          lang: contentLang // Pass local content language
        });

        console.log('Articles API response:', response);

        // Validate response structure
        if (!response || !response.items || !Array.isArray(response.items)) {
          console.error('Invalid response structure:', response);
          setJsonArticles([]);
          return;
        }

        // Transform backend data to match frontend structure
        const transformedArticles = response.items.map(article => ({
          slug: article.slug || '',
          title: {
            en: article.title || '',
            hi: article.title || '',
            te: article.title || ''
          },
          overview: {
            en: article.summary || '',
            hi: article.summary || '',
            te: article.summary || ''
          },
          readTime: {
            en: `${article.read_time_minutes || 5} min`,
            hi: `${article.read_time_minutes || 5} मिनट`,
            te: `${article.read_time_minutes || 5} నిమిషాలు`
          },
          reviewer: {
            en: 'Reviewed by Expert',
            hi: 'विशेषज्ञ द्वारा समीक्षित',
            te: 'నిపుణులచే సమీక్షించబడింది'
          }
        }));

        console.log('Transformed articles:', transformedArticles.length);
        setJsonArticles(transformedArticles);
      } catch (error) {
        console.error('Error loading articles from ngrok API:', error);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, [contentLang]); // Refetch when content language changes

  // Auto-trigger search when filters change
  useEffect(() => {
    // Only trigger if we have at least one filter active
    if (searchTerm || selectedLens || selectedStage) {
      console.log('🔄 Filters changed, auto-triggering search');
      handleSearch();
    }
  }, [selectedLens, selectedStage, contentLang]); // Refetch when filters or content language change

  // Auto-trigger search if URL has search parameters on mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');

    if (searchParam && searchParam.trim()) {
      // Trigger search automatically when component mounts with search param
      handleSearch();
    }

    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [jsonArticles]); // Trigger when articles are loaded

  // Helper function to get localized content using local content language
  const getLocalizedContent = (content: any) => {
    if (!content) return '';
    if (typeof content === 'string') return content;

    const langKey = contentLang === 'te' ? 'te' : 'en';
    // Fallback cascade: requested lang -> english -> any available
    return content[langKey] || content.en || Object.values(content)[0] || '';
  };

  // Show webhook results if available, otherwise show JSON articles
  const displayArticles = useMemo(() => {
    console.log('displayArticles recalculating:', {
      hasWebhookResults: !!webhookResults,
      webhookItemsCount: webhookResults?.items?.length || 0,
      jsonArticlesCount: jsonArticles.length
    });

    if (webhookResults && webhookResults.items) {
      // Use webhook results - prioritize webhook data
      console.log('Using webhook results:', webhookResults.items.length);
      return webhookResults.items.map((article, index) => {
        // ... mapping logic remains similar ...
        let mappedLens: Lens[] = [];
        const rawLens = article.lens || '';
        const lensId = Number((article as any).perspective_id);

        // Map string lens
        if (rawLens) {
          const lensLower = rawLens.toLowerCase();
          if (['medical', 'social', 'financial', 'nutrition'].includes(lensLower)) {
            mappedLens = [lensLower as Lens];
          }
        }
        // Fallback to lens ID
        else if (lensId) {
          const idToLens: Record<number, Lens> = {
            1: 'medical', 2: 'social', 3: 'nutrition', 4: 'financial'
          };
          if (idToLens[lensId]) mappedLens = [idToLens[lensId]];
        }

        // Safety: If user filtered by a lens, and backend returned this article, trust it is that lens.
        if (selectedLens && !mappedLens.includes(selectedLens)) {
          mappedLens.push(selectedLens);
        }

        let mappedStages: Stage[] = [];
        const rawStage = article.life_stage || '';
        const stageId = Number((article as any).life_stage_id);

        // Map string stage
        if (rawStage) {
          const stageLower = rawStage.toLowerCase();
          const stageMapping: Record<string, Stage> = {
            'ttc': 'ttc',
            'pregnancy': 'pregnancy',
            'postpartum': 'postpartum',
            'newborn': 'newborn',
            'early years': 'early-years',
            'early-years': 'early-years'
          };
          if (stageMapping[stageLower]) {
            mappedStages = [stageMapping[stageLower]];
          }
        }
        // Fallback to stage ID
        else if (stageId) {
          // Note: ID 7 observed for Pregnancy in debug logs
          const idToStage: Record<number, Stage> = {
            1: 'ttc', 2: 'pregnancy', 7: 'pregnancy', // Mapping 7 to pregnancy based on GDM article
            3: 'postpartum', 4: 'newborn', 5: 'early-years'
          };
          if (idToStage[stageId]) mappedStages = [idToStage[stageId]];
        }

        // Safety: If user filtered by a stage, and backend returned this article, trust it is that stage.
        if (selectedStage && !mappedStages.includes(selectedStage)) {
          mappedStages.push(selectedStage);
        }

        return {
          slug: article.slug,
          title: article.title,
          summary: article.summary,
          lens: mappedLens,
          stage: mappedStages,
          readMins: 5,
          reviewedBy: 'Reviewed by Expert',
          isLegacy: false,
          isWebhookResult: true,
          key: `webhook-${article.slug}-${index}`
        };
      });
    } else {
      // Fallback to JSON articles only when no webhook results
      console.log('Using fallback JSON articles:', jsonArticles.length);

      const articleMetaMap = new Map(articles.map(a => [a.slug, { lens: a.lens, stage: a.stage }]));

      return jsonArticles.map((article, index) => {
        const meta = articleMetaMap.get(article.slug) || { lens: [], stage: [] };
        return {
          slug: article.slug,
          title: getLocalizedContent(article.title),
          summary: getLocalizedContent(article.overview),
          lens: meta.lens as Lens[],
          stage: meta.stage as Stage[],
          readMins: parseInt(getLocalizedContent(article.readTime).replace(/\D/g, '')) || 5,
          reviewedBy: getLocalizedContent(article.reviewer),
          isLegacy: false,
          isWebhookResult: false,
          key: `json-${article.slug}-${index}`
        };
      });
    }
  }, [webhookResults, jsonArticles, contentLang, getLocalizedContent]);

  // ... filtering logic ...
  const filteredArticles = useMemo(() => {
    // Always apply client-side filtering to valid results.
    // This acts as a double-check in case the backend returns more items than requested.
    return displayArticles.filter(article => {
      const matchesSearch = !searchTerm ||
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchTerm.toLowerCase());

      // Check for exact match or if the article's lens array includes the selected filter
      const matchesLens = !selectedLens ||
        (Array.isArray(article.lens) && article.lens.includes(selectedLens));

      // Check for exact match or if the article's stage array includes the selected filter
      const matchesStage = !selectedStage ||
        (Array.isArray(article.stage) && article.stage.includes(selectedStage));

      return matchesSearch && matchesLens && matchesStage;
    });
  }, [displayArticles, webhookResults, searchTerm, selectedLens, selectedStage]);

  // ... pagination logs ...
  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const paginatedArticles = filteredArticles.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedLens, selectedStage, webhookResults]);

  // ... mapping objects ...
  const lensToIdMap: Record<Lens, number> = {
    'medical': 1, 'social': 2, 'nutrition': 3, 'financial': 4
  };

  const stageToIdMap: Record<Stage, number> = {
    'ttc': 1, 'pregnancy': 2, 'postpartum': 3, 'newborn': 4, 'early-years': 5
  };

  const lensOptions: Array<{ value: Lens; label: string; icon: string; color: string }> = [
    { value: 'medical', label: t('lens_medical'), icon: 'fas fa-stethoscope', color: 'bg-blue-100 text-blue-600' },
    { value: 'social', label: t('lens_social'), icon: 'fas fa-users', color: 'bg-pink-100 text-pink-600' },
    { value: 'financial', label: t('lens_financial'), icon: 'fas fa-rupee-sign', color: 'bg-green-100 text-green-600' },
    { value: 'nutrition', label: t('lens_nutrition'), icon: 'fas fa-apple-alt', color: 'bg-orange-100 text-orange-600' },
  ];

  const stageOptions: Array<{ value: Stage; label: string }> = [
    { value: 'ttc', label: t('orient_ttc') },
    { value: 'pregnancy', label: t('orient_preg') },
    { value: 'postpartum', label: 'Postpartum' },
    { value: 'newborn', label: 'Newborn' },
    { value: 'early-years', label: 'Early Years' },
  ];

  // Handle search button click
  const handleSearch = async () => {
    setSearching(true);
    setSearchError(null);

    // Update URL with current search parameters
    const params = new URLSearchParams();
    if (searchTerm) params.set('search', searchTerm);
    if (selectedLens) params.set('lens', selectedLens);
    if (selectedStage) params.set('stage', selectedStage);

    const newUrl = params.toString() ? `/knowledge?${params.toString()}` : '/knowledge';
    window.history.replaceState({}, '', newUrl);

    // If no filters are active, we still want to fetch the default list from backend
    // but without specific filter params. fetchArticles handles undefined params correctly.

    try {
      const response = await fetchArticles({
        search: searchTerm || undefined,
        lifeStage: selectedStage ? stageToIdMap[selectedStage] : undefined,
        perspective: selectedLens ? lensToIdMap[selectedLens] : undefined,
        lang: contentLang // Pass local content language
      });

      const webhookData = {
        query: searchTerm || '',
        filters: {
          lenses: selectedLens ? [selectedLens] : [],
          stages: selectedStage ? [selectedStage] : []
        },
        pagination: response.pagination,
        items: response.items.map(item => ({
          id: item.id,
          slug: item.slug,
          title: item.title,
          summary: item.summary,
          topic: item.topic,
          section: item.section,
          lens: item.lens,
          life_stage: item.life_stage,
          published_at: item.published_at
        }))
      };

      setWebhookResults(webhookData);

    } catch (error) {
      console.error('❌ Error during search:', error);
      setSearchError('Search failed. Please try again.');
      setWebhookResults(null);
    } finally {
      setSearching(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground font-serif mb-4" data-testid="text-knowledge-title">
          {t('nav_knowledge')}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t('hero_subtitle')}
        </p>
      </div>

      {/* Unified Search, Filters, and Language Toggle */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-3 mb-8">
        {/* Search Input - Compact */}
        <div className="relative w-full md:w-auto">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
            <div className="relative">
              <Input
                type="search"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-4 rounded-full h-10 w-full md:w-[180px] bg-white text-sm"
                data-testid="input-search-articles"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 pointer-events-none" />
            </div>
          </form>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto no-scrollbar">
          <Select
            value={selectedLens || "all"}
            onValueChange={(value) => {
              if (value === "all") {
                setSelectedLens(null);
                setWebhookResults(null);
              } else {
                setSelectedLens(value as Lens);
              }
            }}
          >
            <SelectTrigger className="w-full md:w-[150px] rounded-full h-10 bg-white text-sm" data-testid="select-filter-lens">
              <Filter className="w-3 h-3 mr-2 text-muted-foreground" />
              <SelectValue placeholder="Lens" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Lenses</SelectItem>
              {lensOptions.map(({ value, label }) => (
                <SelectItem key={value} value={value}>{label}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            value={selectedStage || "all"}
            onValueChange={(value) => {
              if (value === "all") {
                setSelectedStage(null);
                setWebhookResults(null);
              } else {
                setSelectedStage(value as Stage);
              }
            }}
          >
            <SelectTrigger className="w-full md:w-[160px] rounded-full h-10 bg-white text-sm" data-testid="select-filter-stage">
              <Filter className="w-3 h-3 mr-2 text-muted-foreground" />
              <SelectValue placeholder="Stage" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Stages</SelectItem>
              {stageOptions.map(({ value, label }) => (
                <SelectItem key={value} value={value}>{label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Language Toggle */}
        <div className="bg-white p-1 rounded-full border shadow-sm inline-flex h-10 items-center">
          <button
            onClick={() => handleLanguageChange('en')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${contentLang === 'en'
              ? 'bg-purple-100 text-purple-700'
              : 'text-muted-foreground hover:text-purple-600'
              }`}
          >
            Eng
          </button>
          <button
            onClick={() => handleLanguageChange('te')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${contentLang === 'te'
              ? 'bg-purple-100 text-purple-700'
              : 'text-muted-foreground hover:text-purple-600'
              }`}
          >
            తెలుగు
          </button>
        </div>

        {/* Clear Filters Button */}
        {(webhookResults || selectedLens || selectedStage || searchTerm) && (
          <Button
            variant="ghost"
            size="sm"
            className="rounded-full h-10 px-3 text-muted-foreground hover:text-foreground"
            onClick={() => {
              setSearchTerm('');
              setSelectedLens(null);
              setSelectedStage(null);
              setWebhookResults(null);
              setSearchError(null);
              window.history.replaceState({}, '', '/knowledge');
            }}
          >
            Clear
          </Button>
        )}
      </div>
      {/* Active Filters */}
      {(selectedLens || selectedStage) && (
        <div className="flex flex-wrap gap-2 mt-4">
          {selectedLens && (
            <Badge
              variant="secondary"
              className="px-3 py-1 rounded-full cursor-pointer hover:bg-purple-100"
              onClick={() => setSelectedLens(null)}
            >
              {lensOptions.find(l => l.value === selectedLens)?.label} ✕
            </Badge>
          )}
          {selectedStage && (
            <Badge
              variant="secondary"
              className="px-3 py-1 rounded-full cursor-pointer hover:bg-purple-100"
              onClick={() => setSelectedStage(null)}
            >
              {stageOptions.find(s => s.value === selectedStage)?.label} ✕
            </Badge>
          )}
        </div>
      )}

      {webhookResults && (
        <div className="mt-4 text-sm text-muted-foreground">
          Found {webhookResults.pagination.total} articles
        </div>
      )}

      {searchError && (
        <div className="mt-4 text-sm text-red-600 bg-red-50 p-3 rounded-lg">
          {searchError}
        </div>
      )}


      {/* Articles Grid */}
      {
        (loading || searching) ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <Card key={index} className="rounded-3xl p-6 card-shadow animate-pulse">
                <CardContent className="p-0">
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedArticles.map((article, index) => (
              // PASS CONTENT LANGUAGE CONFIG TO ARTICLE PAGE
              <Link key={article.key || `article-${article.slug}-${index}`} href={`/knowledge/${article.slug}?lang=${contentLang}`} className="group h-full">
                <Card className="rounded-3xl p-6 card-shadow hover:shadow-2xl transition-all duration-500 h-full cursor-pointer transform hover:scale-105 border-2 border-transparent hover:border-purple-200 relative overflow-hidden bg-gradient-to-br from-white to-purple-50/30">
                  <CardContent className="p-0">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {article.lens.map((lens: Lens) => (
                        <Badge key={lens} variant="secondary" className="text-xs group-hover:shadow-sm transition-shadow">
                          {lensOptions.find(l => l.value === lens)?.label || lens}
                        </Badge>
                      ))}
                    </div>

                    <h3 className="text-lg font-bold text-foreground font-serif mb-2 group-hover:text-purple-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {article.summary}
                    </p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <span>{article.readMins} min read</span>
                      </div>
                      <span>Reviewed by Medical Expert</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )
      }

      {/* Pagination */}
      {
        totalPages > 1 && !loading && !searching && (
          <div className="flex items-center justify-center gap-2 mt-12 mb-8">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setCurrentPage(prev => Math.max(1, prev - 1));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              disabled={currentPage === 1}
              className="rounded-full px-4"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </Button>

            <span className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </span>

            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setCurrentPage(prev => Math.min(totalPages, prev + 1));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              disabled={currentPage === totalPages}
              className="rounded-full px-4"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        )
      }

      {
        filteredArticles.length === 0 && !loading && !searching && (
          <div className="text-center py-12">
            <p className="text-muted-foreground" data-testid="text-no-articles">
              {webhookResults ? 'No articles found for your search.' : 'No articles found matching your criteria.'}
            </p>
          </div>
        )
      }
    </div >
  );
};

export default Knowledge;

