// src/sanity/queries/postQueries.ts
import { groq } from 'next-sanity'

// Query to get all published posts for the listing page
export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  excerpt,
  categories,
  author->{
    name,
    image
  }
}`

// Query to get a single post by its slug for the detail page
export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  excerpt,
  body,
  categories,
  seoTitle,
  seoDescription,
  author->{
    name,
    image,
    bio
  }
}`
// Query to get posts filtered by a specific category
export const postsByCategoryQuery = groq`*[_type == "post" && defined(slug.current) && $category in categories] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  excerpt,
  categories,
  author->{
    name,
    image
  }
}`