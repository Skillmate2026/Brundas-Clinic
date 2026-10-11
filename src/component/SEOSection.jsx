"use client";
import { usePathname } from "next/navigation";
import { metaData } from "../utils/seoMetaData/metaData";
import { serviceMetaData } from "../utils/seoMetaData/serviceMetaData";

const SITE_URL = "https://www.brundaspecialistclinic.com";
const seoEntries = [...metaData, ...serviceMetaData];

const normalizeUrl = (url = "") => {
  if (!url) {
    return "";
  }

  return url !== SITE_URL && url.endsWith("/") ? url.slice(0, -1) : url;
};

export const SEOSection = () => {
  const pathname = usePathname();
  const pageUrl = `${SITE_URL}${pathname || "/"}`;
  const normalizedPageUrl = normalizeUrl(pageUrl);
  const value = seoEntries.find(
    (elem) => normalizeUrl(elem?.url) === normalizedPageUrl,
  );
  const canonicalUrl =
    value?.url ?? (normalizedPageUrl === SITE_URL ? `${SITE_URL}/` : normalizedPageUrl);

  return (
    <>
      {value?.title ? <title>{value.title}</title> : null}
      {value?.description ? (
        <meta name="description" content={value.description} />
      ) : null}
      {value?.keywords ? <meta name="keywords" content={value.keywords} /> : null}
      <link rel="canonical" href={canonicalUrl} />
      {value?.jsonScript ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(value.jsonScript) }}
        />
      ) : null}
    </>
  );
};
