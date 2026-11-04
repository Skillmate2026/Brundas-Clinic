// src/app/(blogs)/blog-details/[slug]/page.tsx
import Link from "next/link";
import { IMAGES } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import Sidebar from "@/component/Sidebar";
import Image from "next/image";
import CommentForm from "../_components/CommentForm";
import { client } from "@/sanity/lib/client";
import { postBySlugQuery } from "@/sanity/queries/postQueries";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import type { Metadata } from "next"; // Imported for SEO typing

// 1. DYNAMIC METADATA GENERATION
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const post = await client.fetch(postBySlugQuery, { slug: resolvedParams.slug });

    if (!post) {
        return { title: 'Post Not Found' };
    }

    // Fallback to localhost for development, but in production Vercel handles the base URL
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const postUrl = `${baseUrl}/blog-details/${post.slug.current}`;
    const ogImage = post.mainImage ? urlForImage(post.mainImage).url() : '';

    return {
        title: post.seoTitle || post.title,
        description: post.seoDescription || post.excerpt,
        alternates: {
            canonical: postUrl,
        },
        openGraph: {
            title: post.seoTitle || post.title,
            description: post.seoDescription || post.excerpt,
            url: postUrl,
            type: 'article',
            publishedTime: post.publishedAt,
            authors: [post.author?.name || 'ClinicMaster'],
            images: ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: post.title }] : [],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.seoTitle || post.title,
            description: post.seoDescription || post.excerpt,
            images: ogImage ? [ogImage] : [],
        }
    };
}

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const post = await client.fetch(postBySlugQuery, { slug: resolvedParams.slug });

    if (!post) {
        notFound();
    }

    // 2. JSON-LD STRUCTURED DATA FOR SEARCH ENGINES
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.seoTitle || post.title,
        image: post.mainImage ? [urlForImage(post.mainImage).url()] : [],
        datePublished: post.publishedAt,
        dateModified: post.publishedAt, // Can be updated if you add an updatedAt field in Sanity
        author: {
            '@type': 'Person',
            name: post.author?.name || 'ClinicMaster',
        },
        description: post.seoDescription || post.excerpt,
    };

    return (
        <>
            {/* Inject Structured Data into the DOM */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />
            <main className="page-content">
                <div className="section-full post-header blog-single style-1 mb-0">
                    <div className="dz-card text-center">
                        <div className="dz-media overlay-secondary-light">
                            <Image 
                                src={post.mainImage ? urlForImage(post.mainImage).url() : IMAGES.blog1} 
                                alt={post.title}
                                width={1920}
                                height={1080}
                                style={{ objectFit: 'cover' }}
                                priority
                            />
                        </div>
                        <div className="dz-info">
                            <h1 className="dz-title text-white mx-auto">{post.title}</h1>
                            <div className="dz-meta style-1">
                                <ul className="justify-content-center">
                                    <li className="post-date">
                                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                            month: 'long',
                                            day: 'numeric',
                                            year: 'numeric'
                                        }).toUpperCase()}
                                    </li>
                                    <li className="dz-user">
                                        <i className="fa-solid fa-user" />
                                        By <Link href={"#"} scroll={false}>{post.author?.name || 'ClinicMaster'}</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="content-inner-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9 pe-xl-5 m-b30">
                                <div className="dz-blog blog-single sidebar style-1">
                                    <div className="dz-info">
                                        <div className="dz-post-text">
                                            {post.body ? (
                                                <PortableText value={post.body} />
                                            ) : (
                                                <p>No content available.</p>
                                            )}
                                        </div>
                                        
                                        {post.categories && post.categories.length > 0 && (
                                            <div className="dz-share-post meta-bottom">
                                                <div className="post-tags">
                                                    <strong>Categories:</strong>
                                                    {post.categories.map((cat: string, index: number) => (
                                                        <Link key={index} href={"#"} scroll={false}>{cat}</Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="clear" id="comment-list">
                                    <div className="post-comments comments-area style-1 clearfix">
                                        <h4 className="comments-title mb-2">Comments</h4>
                                        <p className="dz-title-text">Leave a reply to this post.</p>
                                    </div>
                                    <div className="default-form comment-respond style-1" id="respond">
                                        <CommentForm />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3">
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