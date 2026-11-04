import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/constant/theme";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { urlForImage } from "@/sanity/lib/image";

export default async function Sidebar() {
    const sidebarQuery = groq`{
        "latestPosts": *[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...3] {
            _id, title, slug, mainImage, publishedAt
        },
        "allCategories": *[_type == "post" && defined(categories)].categories[]
    }`;

    const data = await client.fetch(sidebarQuery);

    const categoryCounts = (data.allCategories || []).reduce((acc: any, curr: string) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});

    const dynamicTags = Object.keys(categoryCounts).map(key => ({
        title: key,
        num: categoryCounts[key]
    }));

    return (
        <aside className="side-bar sticky-top @@dir m-b30 p-0">
            <div className="widget wow fadeInUp" data-wow-delay="0.1s" data-wow-duration="0.5s">
                <div className="widget-title"><h4 className="title">Search</h4></div>
                <div className="search-bx">
                    <form role="search">
                        <div className="input-group">
                            <input name="text" className="form-control" placeholder="Search" type="text" />
                            <div className="input-group-btn">
                                <button type="submit"><i className="feather icon-search" /></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* DYNAMIC CATEGORIES WITH WORKING LINKS */}
            <div className="widget widget_categories style-1 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.5s">
                <div className="widget-title"><h4 className="title">Category</h4></div>
                <ul>
                    {dynamicTags.length > 0 ? (
                        dynamicTags.map((data, i) => (
                            <li className="cat-item" key={i}>
                                <Link href={`/blog-list-sidebar?category=${encodeURIComponent(data.title)}`} scroll={false}>
                                    {data.title}
                                </Link> ({data.num})
                            </li>
                        ))
                    ) : (
                        <li>No categories found</li>
                    )}
                </ul>
            </div>

            <div className="widget recent-posts-entry wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="0.5s">
                <div className="widget-title"><h4 className="title">Latest Post</h4></div>
                <div className="widget-post-bx">
                    {data.latestPosts && data.latestPosts.length > 0 ? (
                        data.latestPosts.map((post: any) => (
                            <div className="widget-post clearfix" key={post._id}>
                                <div className="dz-media">
                                    <Image 
                                        src={post.mainImage ? urlForImage(post.mainImage).url() : IMAGES.blog1} 
                                        alt={post.title} width={150} height={150} style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="dz-info">
                                    <div className="dz-meta">
                                        <ul>
                                            <li className="post-date">
                                                <Link href={`/blog-details/${post.slug.current}`} scroll={false}>
                                                    {new Date(post.publishedAt).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }).toUpperCase()}
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <h6 className="title"><Link href={`/blog-details/${post.slug.current}`}>{post.title}</Link></h6>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No recent posts</p>
                    )}
                </div>
            </div>

            {/* DYNAMIC TAGS WITH WORKING LINKS */}
            <div className="widget widget_tag_cloud wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.5s">
                <div className="widget-title"><h4 className="title">Tags</h4></div>
                <div className="tagcloud">
                    {dynamicTags.map((data, i) => (
                        <Link href={`/blog-list-sidebar?category=${encodeURIComponent(data.title)}`} scroll={false} key={i}>
                            {data.title}
                        </Link>
                    ))}
                </div>
            </div>
        </aside>
    )
}