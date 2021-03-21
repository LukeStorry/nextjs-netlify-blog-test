import { NextPage } from 'next';

const Post: NextPage<RecipeProps> = ({ content, attributes: { thumbnail, title }, ...rest }) => (
  <article>
    <h1>{title}</h1>
    <img src={thumbnail} height="40" />
    {content}

    <pre>{JSON.stringify(rest, null, 2)}</pre>
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
  return { props: { ...recipeData, thumbnail: recipeData.thumbnail ?? null } };
}

export default Post;
