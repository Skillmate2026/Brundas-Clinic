// src/app/(blogs)/blog-list-sidebar/page.tsx
import Link from "next/link";
import PageBanner from "@/component/PageBanner";
import { IMAGES } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import Sidebar from "@/component/Sidebar";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/queries/postQueries";
import { urlForImage } from "@/sanity/lib/image";

// Make this a Server Component by removing "use client"

export default async function BlogListSidebar() {
  // Fetch live posts from Sanity on the server
  const posts = await client.fetch(postsQuery);

  return (
    <>
      <Header />
      <main className="page-content">
        <PageBanner
          filteredData={{ title: "Blog   " }}
          title="Blog List Sidebar"
          bnrimage={IMAGES.bnr2.src}
        />
        <section className="content-inner">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-12 m-b30 pe-xl-5">
                <div className="row loadmore-content">
                  {posts.length > 0 ? (
                    posts.map((item: any, i: number) => (
                      <div
                        className="dz-card style-2 blog-half m-b35 wow fadeInUp"
                        data-wow-delay={`${0.2 + i * 0.2}s`}
                        data-wow-duration="0.5s"
                        key={item._id}
                      >
                        <div className="dz-media">
                          {/* Use Sanity Image Builder if an image exists, otherwise fallback */}
                          <Image 
                            src={item.mainImage ? urlForImage(item.mainImage).url() : IMAGES.blog1} 
                            alt={item.title} 
                            width={700}
                            height={500}
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                        <div className="dz-info">
                          <div className="dz-meta">
                            <ul>
                              <li className="post-date">
                                {new Date(item.publishedAt).toLocaleDateString('en-US', {
                                  month: 'long',
                                  day: 'numeric',
                                  year: 'numeric'
                                }).toUpperCase()}
                              </li>
                              <li className="post-author">
                                By{" "}
                                <Link href={"#"} scroll={false}>
                                  {item.author?.name || 'ClinicMaster'}
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <h3 className="dz-title">
                            {/* Link dynamically to the individual post using its slug */}
                            <Link href={`/blog-details/${item.slug.current}`}>
                              {item.title}
                            </Link>
                          </h3>
                          <p>
                            {item.excerpt || "Click to read more about this topic."}
                          </p>
                          <Link
                            href={`/blog-details/${item.slug.current}`}
                            className="btn icon-link-hover-end btn-primary radius-sm"
                          >
                            Read More <i className="feather icon-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-12">
                      <p>No blogs published yet.</p>
                    </div>
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