import { matchRoutes } from "react-router";
import { describe, expect, it } from "vitest";

import { routes } from "@/routes";

// Match routes without running loaders or rendering: loaders need network access the
// test run lacks.
describe("App routing", () => {
  it.each(["/", "/auth", "/signup", "/app"])("matches a page for %s", (pathname) => {
    const matches = matchRoutes(routes, pathname);
    expect(matches?.at(-1)?.route.path).toBe(pathname);
  });

  it("falls back to the not-found page for unknown paths", () => {
    const matches = matchRoutes(routes, "/does-not-exist");
    expect(matches?.at(-1)?.route.path).toBe("*");
  });

  it("guards /app with a loader", () => {
    const matches = matchRoutes(routes, "/app");
    expect(matches?.some((m) => typeof m.route.loader === "function")).toBe(true);
  });
});
