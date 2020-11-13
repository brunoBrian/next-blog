import { Story, Meta } from '@storybook/react/types-6-0';

import { PostCard, PostCardProps } from '.';

export default {
  title: 'PostCard',
  component: PostCard,
  args: {
    slug: 'slug default',
    title: 'Title default',
    cover:
      'https://storage.googleapis.com/blog-images-backup/1*D8Wwwce8wS3auLAiM3BQKA.jpeg',
  },
} as Meta;

export const TypescriptCover: Story<PostCardProps> = (args) => (
  <PostCard {...args} />
);

export const JavascriptCover: Story<PostCardProps> = (args) => (
  <PostCard {...args} />
);
JavascriptCover.args = {
  cover: 'https://sujeitoprogramador.com/wp-content/uploads/2019/08/jsjsjs.png',
};
