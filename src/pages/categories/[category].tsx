import { GetServerSideProps } from 'next';

import HomePage from '../../containers/HomePage';
import PostService from '../../services/post';
import { PostData } from '../../types/posts';

export type CategoryProps = {
  posts: PostData[];
  category: string;
};

export default function Category({ posts, category }: CategoryProps) {
  return <HomePage category={category} posts={posts} />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data } = await PostService.getAllPosts(
    `_sort=id:desc&_start=0&_limit=30&category.name_contains=${ctx.query.category}`,
  );

  return {
    props: { posts: data, category: ctx.query.category },
  };
};
