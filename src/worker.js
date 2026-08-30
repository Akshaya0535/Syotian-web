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

    // 2. SPA fallback only for browser navigation requests (documents)
    const method = request.method.toUpperCase();
    const accept = request.headers.get("accept") || "";
    const secFetchMode = request.headers.get("sec-fetch-mode") || "";
    const secFetchDest = request.headers.get("sec-fetch-dest") || "";
    const isNavigationRequest =
      method === "GET" &&
      (secFetchMode === "navigate" ||
        secFetchDest === "document" ||
        accept.includes("text/html"));

    if (isNavigationRequest) {
      const indexUrl = new URL("/index.html", request.url);
      return env.ASSETS.fetch(new Request(indexUrl, request));
    }

    return new Response("Not Found", { status: 404 });
  },
};