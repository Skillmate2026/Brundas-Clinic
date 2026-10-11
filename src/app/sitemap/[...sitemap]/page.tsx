"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import SitemapWrapper from "@/component/SitemapWrapper";
import SitemapContent from "@/component/SitemapContent";
import { sitemapData } from "@/utils/sitemap/sitemapData";

type SitemapEntry = Extract<
  (typeof sitemapData)[number],
  { id: number; title: string; description4: string; link: string }
>;

const isSitemapEntry = (
  entry: (typeof sitemapData)[number]
): entry is SitemapEntry =>
  typeof entry === "object" &&
  entry !== null &&
  typeof entry.id === "number" &&
  typeof entry.title === "string" &&
  typeof entry.description4 === "string" &&
  typeof entry.link === "string";

const Home = () => {
  const pathname = usePathname();
  const name = pathname.split("/")[2] || "";

  const [data, setData] = useState<SitemapEntry | null>(null);

  useEffect(() => {
    const update = sitemapData.find((elem) => elem.link === `/${name}`);

    if (update && isSitemapEntry(update)) {
      setData(update);
      return;
    }

    setData(null);
  }, [name]);

  return (
    <SitemapWrapper>{data && <SitemapContent data={data} />}</SitemapWrapper>
  );
};

export default Home;
