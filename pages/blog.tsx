import { NextPage } from 'next';
import Link from 'next/link';

const importBlogPosts = async () => {
  // https://medium.com/@shawnstern/importing-multiple-markdown-files-into-a-react-component-with-webpack-7548559fce6f
  // second flag in require.context function is if subdirectories should be searched
  const markdownFiles = require
    .context('../content/blogPosts', false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));
  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../content/blogPosts/${path}`);
      return { ...markdown, slug: path.substring(0, path.length - 3) };
    })
  );
};

interface Props {
  postsList: { slug: string; attributes: Attributes}[];
}

const Page: NextPage<Props> = ({ postsList }) => (
  <div className="blog-list">
    {postsList.map((post) => {
      return (
        <Link href={`blog/${post.slug}`}>
          <a>
            <img src={post.attributes.thumbnail} />
            <h2>{post.attributes.title}</h2>
          </a>
        </Link>
      );
    })}
    <style jsx>{`
      .blog-list a {
        display: block;
        text-align: center;
      }
      .blog-list img {
        max-width: 100%;

        max-height: 300px;
      }
    `}</style>
  </div>
);

Page.getInitialProps = async () => {
  const postsList = await importBlogPosts();
  return { postsList };
};

export default Page;
