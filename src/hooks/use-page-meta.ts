import { useEffect } from "react";

type PageMeta = {
  title: string;
  description?: string;
  noindex?: boolean;
};

function setMeta(attr: "name" | "property", key: string, content: string | undefined) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (content === undefined) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/** Sets the document title and basic meta tags for the current page (client-side). */
export function usePageMeta({ title, description, noindex }: PageMeta) {
  useEffect(() => {
    document.title = title;
    setMeta("property", "og:title", title);
    if (description !== undefined) {
      setMeta("name", "description", description);
      setMeta("property", "og:description", description);
    }
    setMeta("name", "robots", noindex ? "noindex" : undefined);
  }, [title, description, noindex]);
}
