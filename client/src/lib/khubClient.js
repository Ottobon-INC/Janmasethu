
// N8N Knowledge Hub Client
// Fallback URL - edit this constant if needed
const FALLBACK_N8N_URL = 'https://n8n.ottobon.in/webhook-test/knowledge-hub';

// Get N8N URL from environment or fallback
const getN8nUrl = () => {
  return process.env.N8N_URL || FALLBACK_N8N_URL;
};

/**
 * Make a POST request to N8N webhook
 * @param {Object} payload - JSON payload to send
 * @returns {Promise<Object>} - JSON response
 * @throws {Error} - If HTTP status is not OK
 */
async function makeRequest(payload) {
  const url = getN8nUrl();
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  return await response.json();
}

/**
 * Search articles
 * @param {Object} params - Search parameters
 * @param {string} params.q - Search query
 * @param {string[]} params.lenses - Array of lens filters
 * @param {string[]} params.stages - Array of stage filters
 * @param {number} params.page - Page number
 * @param {number} params.per_page - Items per page
 * @returns {Promise<Object>} - Search response: { query, filters: { lenses[], stages[] }, pagination: { page, per_page, total, has_more }, items: [...] }
 */
export async function searchArticles({ q, lenses, stages, page, per_page }) {
  return await makeRequest({
    q,
    lenses,
    stages,
    page,
    per_page,
  });
}

/**
 * Get single article by slug
 * @param {string} slug - Article slug
 * @returns {Promise<Object>} - Article response: { ok, found, article }
 */
export async function getArticle(slug) {
  return await makeRequest({
    slug,
  });
}
