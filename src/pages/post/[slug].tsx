import { GetStaticPaths, GetStaticProps } from 'next';

import PostService from '../../services/post';
import { PostData } from '../../types/posts';

export type DynamicPostProps = {
  post: PostData;
};

const DynamicPost = ({ post }: DynamicPostProps) => {
  return <p>{post.title}</p>;
};

export default DynamicPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await PostService.countAllPosts();
  const posts = await PostService.getAllPosts(`_limit=${data}`);

  return {
    paths: posts.data.map((post: PostData) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await PostService.getPost(ctx.params.slug);

  return {
    props: { post: data[0] },
    // revalidate: 5,
  };
};
