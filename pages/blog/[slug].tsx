import { NextPage } from 'next';

const Post: NextPage<PostProps> = ({
  blogpost: {
    content,
    attributes: { thumbnail, title },
  },
}) => (
  <article>
    <h1>{title}</h1>
    <img src={thumbnail} />
    {content}
    <style jsx>{`
      article {
        margin: 0 auto;
      }
      h1 {
        text-align: center;
      }
    `}</style>
  </article>
);

Post.getInitialProps = async ({ query: { slug } }) => {
  const blogpost = await import(`../../content/blogPosts/${slug}.md`).catch((error) => null);

  return { blogpost };
};

export default Post;
