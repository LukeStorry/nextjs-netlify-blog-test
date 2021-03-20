import { NextPage } from 'next';

const Post: NextPage<RecipeProps> = ({ content, attributes: { thumbnail, title } }) => (
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

export async function getStaticPaths() {
  const paths = require('fs')
    .readdirSync('./content/recipes')
    .map((recipeFileName: string) => {
      const slug = recipeFileName.substring(0, recipeFileName.length - 3);
      return { params: { slug } };
    });

  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  const recipeData = await import(`../../content/recipes/${slug}.md`);
  return { props: { ...recipeData } };
}

export default Post;
