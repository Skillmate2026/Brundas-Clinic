"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import styles from "./gallery.module.css";
import PageBanner from "@/component/PageBanner";
import { IMAGES } from "@/constant/theme";
import MapWraper from "@/component/MapWraper";

type Category = "ent" | "ortho";

const galleryFiles: Record<Category, string[]> = {
  ent: [
    "WhatsApp Image 2026-01-04 at 11.55.37.jpeg",
    "WhatsApp Image 2026-01-04 at 11.55.42 (1).jpeg",
    "WhatsApp Image 2026-01-04 at 11.55.42 (2).jpeg",
    "WhatsApp Image 2026-01-04 at 11.55.42 (3).jpeg",
    "WhatsApp Image 2026-01-04 at 11.55.42 (4).jpeg",
    "WhatsApp Image 2026-01-04 at 11.55.42.jpeg",
    "WhatsApp Image 2026-01-04 at 11.59.24.jpeg",
    "WhatsApp Image 2026-01-04 at 12.02.45.jpeg",
    "WhatsApp Image 2026-01-04 at 12.03.25.jpeg",
    "WhatsApp Image 2026-01-04 at 12.04.26.jpeg",
    "WhatsApp Image 2026-01-04 at 12.05.45.jpeg",
    "WhatsApp Image 2026-01-04 at 12.06.28.jpeg",
    "WhatsApp Image 2026-01-04 at 12.06.51.jpeg",
    "WhatsApp Image 2026-01-04 at 12.07.33.jpeg",
    "WhatsApp Image 2026-01-04 at 12.08.30.jpeg",
    "WhatsApp Image 2026-01-04 at 12.09.27.jpeg",
    "WhatsApp Image 2026-01-04 at 12.10.16.jpeg",
    "WhatsApp Image 2026-01-04 at 12.11.06.jpeg",
    "WhatsApp Image 2026-01-04 at 12.11.19.jpeg",
  ],
  ortho: [
    "WhatsApp Image 2026-01-05 at .jpeg",
    "WhatsApp Image 2026-01-05 at 15.06..jpeg",
    "WhatsApp Image 2026-01-05 at 15.06.07.jpeg",
    "WhatsApp Image 2026-01-05 at 15.06.09.jpeg",
    "WhatsApp Image 2026-01-05 at 15.06.1.jpeg",
    "WhatsApp Image 2026-01-05 at 15.06.10.jpeg",
    "WhatsApp Image 2026-01-05 at 15.06.11.jpeg",
    "WhatsApp Image 2026-01-05 at 15.06.12.jpeg",
    "WhatsApp Image 2026-01-05 at 15.06.13.jpeg",
    "WhatsApp Image 2026-01-05 at 15.06.14.jpeg",
    "WhatsApp Image 2026-01-05 at 15.06.15 (1).jpeg",
    "WhatsApp Image 2026-01-05 at 15.06.15.jpeg",
    "WhatsApp Image 2026-01-05 at 15.06.16.jpeg",
    "WhatsApp Image 2026-01-05 at 15.06.17 (1).jpeg",
    "WhatsApp Image 2026-01-05 at 15.06.17.jpeg",
    "WhatsApp Image 2026-01-05 at 15.06.18.jpeg",
    "WhatsApp Image 2026-01-05 at 15.06.19 (1).jpeg",
    "WhatsApp Image 2026-01-05 at 15.06.19.jpeg",
    "WhatsApp Image 2026-01-05 at 15.06.20.jpeg",
    "WhatsApp Image 2026-01-05 at 15.06.21.jpeg",
    "WhatsApp Image 2026-01-05.jpeg",
  ],
};

// Optional curated captions by position within each category (index-based)
const captionOverrides: Record<Category, Record<number, string>> = {
  ent: {
    0: "Coin in food pipe",
    1: "Total Thyroidectomy",
    2: "Foreign body ear – Thermocol",
    3: "Foreign body ear",
    4: "Nasolabial cyst",
    5: "Foreign body (Insect) in the ear",
    6: " ",
    7: " ",
    8: " ",
    9: " ",
    10: "Dermoid cyst",
    11: "Modified radical Mastoidectomy",
    12: "Nasal foreign body – peanut removed",
    13: "Nasal foreign body removed",
    14: "Nasal foreign body removed",
    15: "Thyroglossal cyst removed",
    16: "Submandibular gland excision",
    17: "Fish bone lodged in tonsilar fossa",
    18: "Bifid Uvula",
    19: "Bifid Uvula",
  },
  ortho: {},
};

const videoFiles: Record<Category, string[]> = {
  ent: [
    "WhatsApp Video 2026-01-04 at 11.56.24.mp4",
    "WhatsApp Video 2026-01-04 at 11.58.03.mp4",
    "WhatsApp Video 2026-01-04 at 12.12.28.mp4",
  ],
  ortho: [],
};

const categoryCopy: Record<
  Category,
  { title: string; subtitle: string; highlight: string }
> = {
  ent: {
    title: "ENT",
    subtitle: "Endoscopy, procedures, and patient care snapshots",
    highlight: "Precision ENT care in action",
  },
  ortho: {
    title: "Orthopaedics",
    subtitle: "Joint, sports, and trauma recoveries at our clinic",
    highlight: "Orthopaedic recoveries and rehab",
  },
};

// New media items for the newly requested section
const mediaItems = [
  { src: "y1.jpeg", link: "https://youtu.be/vLfO48OviLY?si=4qA1gfRryiTcbiw7" },
  { src: "y2.jpeg", link: "https://youtu.be/WMS_XldPu3c?si=HDlqHm8EhhbmXUpR" },
  { src: "y3.jpeg", link: "https://youtu.be/oQpohJhYC-0?si=WWyz-dt-cmzyNH4J" },
  { src: "y4.jpeg", link: "https://youtu.be/x06jxHTCff8?si=kaf6-ebb5ICWJlMo" },
  { src: "n1.jpeg", link: null },
  { src: "n2.jpeg", link: null },
];

const getReadableName = (file: string) =>
  file
    .replace(/\.[^/.]+$/, "")
    .replace(/WhatsApp Image\s*/i, "")
    .trim();

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("ent");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const currentFiles = galleryFiles[activeCategory];
  const currentVideos = videoFiles[activeCategory];
  const lightboxSrc =
    selectedIndex !== null
      ? encodeURI(
          `/assets/gallery-images/${activeCategory}/${currentFiles[selectedIndex]}`
        )
      : null;

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowRight" && selectedIndex !== null) {
        setSelectedIndex((prev) =>
          prev === null ? null : (prev + 1) % currentFiles.length
        );
      }
      if (event.key === "ArrowLeft" && selectedIndex !== null) {
        setSelectedIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + currentFiles.length) % currentFiles.length
        );
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentFiles.length, selectedIndex]);

  useEffect(() => {
    setSelectedIndex(null);
  }, [activeCategory]);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const goNext = () =>
    setSelectedIndex((prev) =>
      prev === null ? null : (prev + 1) % currentFiles.length
    );
  const goPrev = () =>
    setSelectedIndex((prev) =>
      prev === null
        ? null
        : (prev - 1 + currentFiles.length) % currentFiles.length
    );

  return (
    <>
      <Header />
      <PageBanner
        filteredData={{ title: "Gallery" }}
        title="Gallery"
        bnrimage={IMAGES.bnr1.src}
      />
      <main className="page-content">
        <section className="content-inner bg-light" id="gallery">
          <div className="container">
            <div className={styles.switcher}>
              {(Object.keys(categoryCopy) as Category[]).map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`${styles.switcherBtn} ${
                    activeCategory === category ? styles.switcherBtnActive : ""
                  }`}
                >
                  <span>{categoryCopy[category].title}</span>
                </button>
              ))}
            </div>

            <div className="section-head style-1 text-center m-b30">
              <h2 className="title m-b0">
                {categoryCopy[activeCategory].highlight}
              </h2>
              <p className="m-b0 text-secondary">
                {categoryCopy[activeCategory].subtitle}
              </p>
            </div>

            <div className={styles.grid}>
              {currentFiles.map((file, idx) => {
                const encodedSrc = encodeURI(
                  `/assets/gallery-images/${activeCategory}/${file}`
                );
                const override =
                  captionOverrides[activeCategory]?.[idx] || null;

                return (
                  <button
                    key={`${activeCategory}-${file}`}
                    type="button"
                    className={`${styles.card} ${styles.cardButton}`}
                    onClick={() => openLightbox(idx)}
                  >
                    <div className={styles.media}>
                      <Image
                        src={encodedSrc}
                        alt={`${
                          categoryCopy[activeCategory].title
                        } gallery ${getReadableName(file)}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className={styles.image}
                      />
                    </div>
                    <div className={styles.meta}>
                      <span className={styles.caption}>{override}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {currentVideos.length > 0 && (
              <div className={styles.videoSection}>
                <div className="section-head style-1 text-center m-b20">
                  <h3 className="title m-b0">Videos</h3>
                  <p className="m-b0 text-secondary">
                    Quick clips from procedures and recoveries.
                  </p>
                </div>
                <div className={styles.videoGrid}>
                  {currentVideos.map((file) => {
                    const encodedSrc = encodeURI(
                      `/assets/gallery-images/${activeCategory}/${file}`
                    );
                    return (
                      <div
                        key={`${activeCategory}-video-${file}`}
                        className={`${styles.card} ${styles.videoCard}`}
                      >
                        <div className={styles.videoMedia}>
                          <video
                            src={encodedSrc}
                            controls
                            className={styles.video}
                            aria-label={getReadableName(file)}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* --- NEW MEDIA & COVERAGE SECTION --- */}
            <div className={styles.videoSection} style={{ marginTop: "60px" }}>
              <div className="section-head style-1 text-center m-b30">
                <h3 className="title m-b0">Media & Coverage</h3>
                <p className="m-b0 text-secondary">
                  Our clinic featured in the news and media
                </p>
              </div>
              
              <div className={styles.grid}>
                {mediaItems.map((item, idx) => {
                  const encodedSrc = encodeURI(`/assets/gallery-images/${item.src}`);
                  
                  const imageContent = (
                    <div className={styles.media}>
                      <Image
                        src={encodedSrc}
                        alt={`Media coverage ${getReadableName(item.src)}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className={styles.image}
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                  );

                  return item.link ? (
                    <a
                      key={`media-${item.src}-${idx}`}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.card} ${styles.cardButton}`}
                      style={{ display: "block" }}
                    >
                      {imageContent}
                      <div className={styles.meta}>
                        <span className={styles.caption} style={{ color: "#0056b3", fontWeight: 500 }}>
                          Watch on YouTube
                        </span>
                      </div>
                    </a>
                  ) : (
                    <div key={`media-${item.src}-${idx}`} className={styles.card}>
                      {imageContent}
                    </div>
                  );
                })}
              </div>
            </div>
            {/* --- END NEW MEDIA SECTION --- */}

          </div>
        </section>

        {lightboxSrc && selectedIndex !== null && (
          <div
            className={styles.lightbox}
            onClick={() => setSelectedIndex(null)}
          >
            <div
              className={styles.lightboxContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className={styles.lightboxClose}
                onClick={() => setSelectedIndex(null)}
                aria-label="Close full image"
              >
                ×
              </button>
              <button
                type="button"
                className={`${styles.lightboxArrow} ${styles.lightboxArrowLeft}`}
                onClick={goPrev}
                aria-label="Previous image"
              >
                {"<"}
              </button>
              <button
                type="button"
                className={`${styles.lightboxArrow} ${styles.lightboxArrowRight}`}
                onClick={goNext}
                aria-label="Next image"
              >
                {">"}
              </button>
              <div className={styles.lightboxMedia}>
                <Image
                  src={lightboxSrc}
                  alt="Full-size gallery image"
                  fill
                  sizes="100vw"
                  className={styles.lightboxImage}
                />
              </div>
            </div>
          </div>
        )}
      </main>
      <MapWraper />
      <Footer />
    </>
  );
}