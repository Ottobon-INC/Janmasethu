
export type ArticleContentType = 'paragraph' | 'subheading' | 'list';

export interface ArticleContent {
  type: ArticleContentType;
  text?: {
    en: string;
    hi: string;
    te: string;
  };
  items?: Array<{
    en: string;
    hi: string;
    te: string;
  }>;
}

export interface ArticleSection {
  id: string;
  title: {
    en: string;
    hi: string;
    te: string;
  };
  content: ArticleContent[];
}

export interface ArticleData {
  slug: string;
  title: {
    en: string;
    hi: string;
    te: string;
  };
  overview: {
    en: string;
    hi: string;
    te: string;
  };
  metadata: {
    readTime: {
      en: string;
      hi: string;
      te: string;
    };
    reviewer: {
      en: string;
      hi: string;
      te: string;
    };
    sources: string[];
  };
  sections: ArticleSection[];
}

// API Base URL
const API_BASE_URL = 'https://zainab-sanguineous-niels.ngrok-free.dev/api/knowledge';

// Fetch article by slug from backend
export const fetchArticleData = async (slug: string): Promise<ArticleData | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/articles/${slug}`, {
      headers: {
        'Accept': 'application/json',
        'ngrok-skip-browser-warning': 'true'
      }
    });

    if (!response.ok) {
      if (response.status === 404) {
        console.error(`Article not found: ${slug}`);
        return null;
      }
      const errorData = await response.json();
      console.error('API error:', errorData.error);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
};

// Fetch all articles metadata with optional filters
export const fetchAllArticlesMetadata = async (filters?: {
  lifeStage?: number;
  perspective?: number;
  search?: string;
}): Promise<Array<{
  id: number;
  slug: string;
  title: string;
  summary: string;
  read_time_minutes: number;
  is_featured: boolean;
  published_at: string;
  life_stage_id: number;
  perspective_id: number;
}>> => {
  try {
    const params = new URLSearchParams();
    if (filters?.lifeStage) params.append('lifeStage', filters.lifeStage.toString());
    if (filters?.perspective) params.append('perspective', filters.perspective.toString());
    if (filters?.search) params.append('search', filters.search);

    const url = params.toString() 
      ? `${API_BASE_URL}/articles?${params.toString()}`
      : `${API_BASE_URL}/articles`;

    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'ngrok-skip-browser-warning': 'true'
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('API error:', errorData.error);
      return [];
    }

    const articles = await response.json();
    return articles;
  } catch (error) {
    console.error('Error fetching articles metadata:', error);
    return [];
  }
};

// Fetch bundled data (life stages, perspectives, and articles)
export const fetchBundledData = async (filters?: {
  lifeStage?: number;
  perspective?: number;
  search?: string;
}): Promise<{
  lifeStages: Array<{ id: number; name: string; description: string; sort_order: number }>;
  perspectives: Array<{ id: number; name: string; description: string; sort_order: number }>;
  articles: Array<any>;
} | null> => {
  try {
    const params = new URLSearchParams();
    if (filters?.lifeStage) params.append('lifeStage', filters.lifeStage.toString());
    if (filters?.perspective) params.append('perspective', filters.perspective.toString());
    if (filters?.search) params.append('search', filters.search);

    const url = params.toString() 
      ? `${API_BASE_URL}?${params.toString()}`
      : API_BASE_URL;

    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'ngrok-skip-browser-warning': 'true'
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('API error:', errorData.error);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching bundled data:', error);
    return null;
  }
};

// Fetch life stages for dropdowns
export const fetchLifeStages = async (): Promise<Array<{
  id: number;
  name: string;
  description: string;
  sort_order: number;
}>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/life-stages`, {
      headers: {
        'Accept': 'application/json',
        'ngrok-skip-browser-warning': 'true'
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('API error:', errorData.error);
      return [];
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching life stages:', error);
    return [];
  }
};

// Fetch perspectives for dropdowns
export const fetchPerspectives = async (): Promise<Array<{
  id: number;
  name: string;
  description: string;
  sort_order: number;
}>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/perspectives`, {
      headers: {
        'Accept': 'application/json',
        'ngrok-skip-browser-warning': 'true'
      }
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('API error:', errorData.error);
      return [];
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching perspectives:', error);
    return [];
  }
};
