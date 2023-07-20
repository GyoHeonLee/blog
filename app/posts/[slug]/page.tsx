import PostMain from "@/components/post/PostMain";
import { getPostBySlug } from "@/util/mdx";

interface Props {
  params: {
    slug: string;
  };
}

export default async function Post({ params: { slug } }: Props) {
  if (!slug) return <div>404</div>;

  const { meta, content } = await getPostBySlug("posts/" + slug);

  if (!(meta && content)) return <div>404</div>;

  return <PostMain meta={meta}>{content}</PostMain>;
}
