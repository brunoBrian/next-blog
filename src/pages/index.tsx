import HomePage from '../containers/HomePage';
import PostService from '../services/post';
import { PostData } from '../types/posts';

export type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  return <HomePage posts={posts} />;
}

export async function getStaticProps() {
  const post = await getAllPosts();
  return {
    props: { posts: post.data },
  };
}

const getAllPosts = async () => {
  const posts = await PostService.getAllPosts(
    '_sort=id:desc&_start=0&_limit=2',
  );
  return posts;
};
