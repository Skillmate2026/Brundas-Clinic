// src/component/HomeBlogSection.tsx
import Link from "next/link";
import { IMAGES, SVGICONS } from "@/constant/theme";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { urlForImage } from "@/sanity/lib/image";

export default async function HomeBlogSection() {
  // Fetch the 3 latest posts
  const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    mainImage,
    publishedAt
  }`;

  const posts = await client.fetch(postsQuery);

  // If there are no posts yet, hide the section entirely
  if (!posts || posts.length === 0) {
    return null; 
  }

  return (
    <section className="content-inner bg-light">
      <div className="container">
        <div className="section-head style-1 m-b30 row align-items-end">
          <div
            className="col-sm-7 wow fadeInUp"
            data-wow-delay="0.2s"
            data-wow-duration="0.8s"
          >
            <span className="main-title">Our Blog</span>
            <h2 className="title m-b0">
              Latest Health Updates <br /> & Articles
            </h2>
          </div>
          <div
            className="col-sm-5 text-sm-end d-sm-block d-none wow fadeInUp"
            data-wow-delay="0.4s"
            data-wow-duration="0.8s"
          >
            <Link
              href="/blog-list-sidebar"
              className="btn btn-icon btn-primary btn-shadow"
            >
              View All
              <span className="right-icon">
                <i className="feather icon-arrow-right" />
              </span>
            </Link>
          </div>
        </div>

        <div className="row loadmore-content">
          {posts.map((item: any, i: number) => {
            const bgImage = item.mainImage
              ? urlForImage(item.mainImage).url()
              : IMAGES.blog1.src;

            return (
              <div
                className="col-lg-4 col-md-6 m-b25 wow fadeInUp"
                data-wow-delay={`${0.2 + (i % 3) * 0.2}s`}
                data-wow-duration="0.5s"
                key={item._id}
              >
                <div
                  className="dz-card style-2 dz-card-overlay"
                  style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  <div className="dz-info">
                    <div className="post-date">
                      {new Date(item.publishedAt)
                        .toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })
                        .toUpperCase()}
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
          })}
        </div>
        
        {/* Mobile View All Button */}
        <div className="d-sm-none text-center mt-4">
           <Link href="/blog-list-sidebar" className="btn btn-primary btn-shadow">
              View All Blogs
           </Link>
        </div>
      </div>
    </section>
  );
}