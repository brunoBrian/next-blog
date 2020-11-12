import { GetStaticPaths, GetStaticProps } from 'next';
import Error from 'next/error';
import { useRouter } from 'next/router';

import { Post } from '../../containers/Post';
import PostService from '../../services/post';
import { PostData } from '../../types/posts';
import { markdownToHtml } from '../../utils/markdownToHtml';

export type DynamicPostProps = {
  post: PostData;
};

const DynamicPost = ({ post }: DynamicPostProps) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  if (router.isFallback) return <div>Carregando...</div>;

  if (!post) <Error statusCode={404} />;

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
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await PostService.getPost(ctx.params.slug);

  if (!data.length) return data;

  const content = await markdownToHtml(data[0].content);

  return {
    props: { post: { ...data[0], content } },
    // revalidate: 6000,
  };
};
