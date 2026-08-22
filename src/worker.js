export default {
  async fetch(request, env, ctx) {
    // 1. Try to fetch the actual file (JS, CSS, images, favicon)
    try {
      const assetResponse = await env.ASSETS.fetch(request);
      if (assetResponse.status !== 404) {
        return assetResponse;
      }
    } catch (e) {
      // Fall through if asset fails
    }

    // 2. SPA Fallback: Send route requests (/terms, /privacy) to index.html
    const indexUrl = new URL("/index.html", request.url);
    return env.ASSETS.fetch(new Request(indexUrl, request));
  },
};