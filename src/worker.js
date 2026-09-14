export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const { pathname } = url;

    // 1. Try to fetch the actual file (JS, CSS, images, favicon)
    try {
      const assetResponse = await env.ASSETS.fetch(request);
      if (assetResponse.status !== 404) {
        return assetResponse;
      }
    } catch (e) {
      // Fall through if asset fails
    }

    // 2. SPA fallback for extensionless document routes
    const method = request.method.toUpperCase();
    const isDocumentRouteMethod = method === "GET" || method === "HEAD";
    const isApiRoute = pathname === "/api" || pathname.startsWith("/api/");
    const isExtensionlessRoute =
      pathname === "/" || !pathname.split("/").pop()?.includes(".");
    const shouldFallbackToIndex =
      isDocumentRouteMethod && isExtensionlessRoute && !isApiRoute;

    if (shouldFallbackToIndex) {
      const indexUrl = new URL("/index.html", request.url);
      return env.ASSETS.fetch(new Request(indexUrl, request));
    }

    return new Response("Not Found", { status: 404 });
  },
};