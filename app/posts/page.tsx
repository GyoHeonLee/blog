import { PostCard } from "@/components/card/PostCard";
import { PostSection } from "@/components/layout/PostSection";
import { getAllPostsMeta } from "@/util/mdx";

export default async function Posts() {
  const posts = await getAllPostsMeta("posts");

  if (!posts) return <p>No posts!</p>;

  const postCards = posts.map((post) => <PostCard key={post.slug} {...post} slug={post.slug} />);

  return <PostSection postType="posts">{postCards}</PostSection>;
}
