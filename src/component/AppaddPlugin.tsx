"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const API_BASE = atob(
  "aHR0cHM6Ly9wbHVnaW5zLmFwcGFkZC5pbi5uZXQvYWxsaGVhZGRhdGE/ZWtleT1lLUFQUEFERDk0MzIxOTE4OTQmZWtleXBhc3M9dHJNd0IwTDd5SXozVjBVdGVqS0p0STVDWGNUeGdoMGw4aVZJJnNpdGV1cmw9"
);

function ensureRoots() {
  let headRoot = document.getElementById("appadd-head-root");
  if (!headRoot) {
    headRoot = document.createElement("div");
    headRoot.id = "appadd-head-root";
    document.head.appendChild(headRoot);
  }

  let bodyRoot = document.getElementById("appadd-body-root");
  if (!bodyRoot) {
    bodyRoot = document.createElement("div");
    bodyRoot.id = "appadd-body-root";
    document.body.appendChild(bodyRoot);
  }

  return { headRoot, bodyRoot };
}

function cleanup() {
  document.getElementById("appadd-head-root")?.replaceChildren();
  document.getElementById("appadd-body-root")?.replaceChildren();
}

async function applyPlugin(fullUrl: string) {
  const { headRoot, bodyRoot } = ensureRoots();
  cleanup();

  const res = await fetch(API_BASE + fullUrl, { cache: "no-store" });
  if (!res.ok) return;

  const text = await res.text();
  if (!text || text === "0") return;

  const [headHtml = "", bodyHtml = ""] = text.split("||||||||||");

  // ✅ DO NOT remove <title> (Next manages it). Inject only other head tags if needed.
  // If your plugin headHtml contains <title>, strip it:
  const safeHeadHtml = headHtml.replace(/<title[^>]*>[\s\S]*?<\/title>/gi, "");

  headRoot.insertAdjacentHTML("beforeend", safeHeadHtml);

  // ✅ Replace plugin body (not append to main body)
  bodyRoot.insertAdjacentHTML("beforeend", bodyHtml);

  // ✅ Prevent common fullscreen overlays from blocking your app after route change
  bodyRoot.querySelectorAll<HTMLElement>("*").forEach((el) => {
    const st = getComputedStyle(el);
    const z = Number(st.zIndex || 0);
    const isFixed = st.position === "fixed";
    const isFullscreen =
      (st.top === "0px" && st.left === "0px") || st.inset === "0px";
    if (isFixed && isFullscreen && z >= 999) {
      el.style.pointerEvents = "none";
    }
  });
}

export default function AppaddPlugin() {
  const pathname = usePathname();
  const search = useSearchParams();

  useEffect(() => {
    const fullUrl =
      window.location.origin +
      pathname +
      (search?.toString() ? `?${search.toString()}` : "");

    // Run after Next has rendered the new route
    requestAnimationFrame(() => {
      applyPlugin(fullUrl).catch(() => {});
    });
  }, [pathname, search]);

  return (
    <Script
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
      strategy="beforeInteractive"
    />
  );
}
