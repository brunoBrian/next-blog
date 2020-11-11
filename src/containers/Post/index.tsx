import Head from 'next/head';

import {
  Footer,
  Header,
  Heading,
  PostContainer,
  PostCover,
  PostDetails,
} from '../../components';
import { MainContainer } from '../../components/MainContainer';
import { SITE_NAME } from '../../config/app';
import { PostData } from '../../types/posts';
import { removeHtml } from '../../utils/removeHtml';

export type PostProps = {
  post: PostData;
};

export const Post = ({ post }: PostProps) => {
  return (
    <>
      <Head>
        <title>
          {post.title} - {SITE_NAME}
        </title>
        <meta
          name="description"
          content={removeHtml(post.content).slice(0, 150)}
        />
      </Head>

      <Header />

      <MainContainer>
        <Heading>{post.title}</Heading>
        <PostCover
          coverUrl={
            post.cover.formats.medium
              ? post.cover.formats.medium.url
              : post.cover.formats.small.url
          }
          alt={post.title}
        />
        <PostDetails
          author={post.author.name}
          category={post.category.name}
          date={post.created_at}
        />
        <PostContainer content={post.content} />
      </MainContainer>

      <Footer />
    </>
  );
};
