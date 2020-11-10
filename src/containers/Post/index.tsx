import {
  Footer,
  Header,
  Heading,
  PostContainer,
  PostCover,
  PostDetails,
} from '../../components';
import { MainContainer } from '../../components/MainContainer';
import { PostData } from '../../types/posts';

export type PostProps = {
  post: PostData;
};

export const Post = ({ post }: PostProps) => {
  return (
    <>
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
