import { GetStaticPaths, GetStaticProps } from 'next';

import { Post } from '../../containers/Post';
import PostService from '../../services/post';
import { PostData } from '../../types/posts';
import { markdownToHtml } from '../../utils/markdownToHtml';

export type DynamicPostProps = {
  post: PostData;
};

const DynamicPost = ({ post }: DynamicPostProps) => {
  return <Post post={post} />;
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
  const content = await markdownToHtml(data[0].content);

  return {
    props: { post: { ...data[0], content } },
    // revalidate: 5,
  };
};
