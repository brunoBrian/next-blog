import { useEffect } from 'react';

import env from '../config/environment.json';
import PostService from '../services/post';
import { PostData } from '../types/posts';

export type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  return (
    <div>
      {posts.map((post) => (
        <h1 key={post.slug}>{post.title}</h1>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const post = await getAllPosts();
  return {
    props: { posts: post.data },
  };
}

const getAllPosts = async () => {
  const posts = await PostService.getAllPosts('posts');
  return posts;
};
