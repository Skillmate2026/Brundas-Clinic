// src/app/(blogs)/blog-grid/page.tsx
import Link from "next/link";
import PageBanner from "@/component/PageBanner";
import { IMAGES, SVGICONS } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import Sidebar from "@/component/Sidebar";
import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/queries/postQueries";
import { urlForImage } from "@/sanity/lib/image";
export const revalidate = 60; // Revalidates the page every 60 seconds if there are changes
// Converted to an async Server Component
export default async function BlogGrid() {
  // Fetch live posts from Sanity
  const posts = await client.fetch(postsQuery);

  return (
    <>
      <Header />
      <main className="page-content">
        <PageBanner
          title="Blog Grid"
          bnrimage={IMAGES.bnr2.src}
          filteredData={{ title: "Blog" }}
        />
        <section className="content-inner">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-12 m-b30 pe-xl-5">
                <div className="row loadmore-content">
                  {posts.length > 0 ? (
                    posts.map((item: any, i: number) => {
                      // Resolve the background image URL or fallback to a local image
                      const bgImage = item.mainImage 
                        ? urlForImage(item.mainImage).url() 
                        : IMAGES.blog1.src;

                      return (
                        <div
                          className="col-lg-6 col-md-6 m-b25 wow fadeInUp"
                          data-wow-delay={`${0.2 + (i % 3) * 0.2}s`}
                          data-wow-duration="0.5s"
                          key={item._id}
                        >
                          <div
                            className="dz-card style-2 dz-card-overlay"
                            style={{ 
                              backgroundImage: `url(${bgImage})`,
                              backgroundColor: '#f5f5f5' // Fallback color while image loads
                            }}
                          >
                            <div className="dz-info">
                              <div className="post-date">
                                {new Date(item.publishedAt).toLocaleDateString('en-US', {
                                    month: 'long',
                                    day: 'numeric',
                                    year: 'numeric'
                                }).toUpperCase()}
                              </div>
                              <div className="bottom-info">
                                <h3 className="dz-title">
                                  <Link href={`/blog-details/${item.slug.current}`}>
                                    {item.title}
                                  </Link>
                                </h3>
                                <Link
                                  href={`/blog-details/${item.slug.current}`}
                                  className="btn btn-square btn-white rounded-circle"
                                  dangerouslySetInnerHTML={{
                                    __html: SVGICONS.uparrow2,
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="col-12"><p>No blogs published yet.</p></div>
                  )}
                </div>
              </div>
              <div className="col-xl-3 col-lg-12">
                <Sidebar />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}