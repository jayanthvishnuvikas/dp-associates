import { createStart, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

const sameOriginMiddleware = createMiddleware().server(async ({ next, request }) => {
  const secFetchSite = request.headers.get("sec-fetch-site");
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");

  if (secFetchSite && secFetchSite !== "same-origin" && secFetchSite !== "same-site") {
    return new Response("Forbidden", { status: 403 });
  }

  if (origin) {
    const requestOrigin = new URL(request.url).origin;
    if (origin !== requestOrigin) {
      return new Response("Forbidden", { status: 403 });
    }
  } else if (referer) {
    const requestOrigin = new URL(request.url).origin;
    const refererOrigin = new URL(referer).origin;
    if (refererOrigin !== requestOrigin) {
      return new Response("Forbidden", { status: 403 });
    }
  }

  return next();
});

export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware, sameOriginMiddleware],
}));
