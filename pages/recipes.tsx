import { NextPage } from 'next';
import Link from 'next/link';

interface Props {
  recipes: { slug: string; attributes: Attributes }[];
}

const Page: NextPage<Props> = ({ recipes }) => (
  <div>
    {recipes.map(({ slug, attributes: { title, description, thumbnail } }) => (
      <Link href={`recipes/${slug}`} key={slug}>
        <div style={{ border: '1px black solid' }}>
          <h2>{title}</h2>
          {thumbnail && <img src={thumbnail} width="600" height="400" alt="" />}
          {description && <p>{description}</p>}
        </div>
      </Link>
    ))}
  </div>
);

export async function getStaticProps() {
  const markdownFiles: string[] = require('fs').readdirSync('./content/recipes');
  const recipes = await Promise.all(
    markdownFiles.map(async (path: string) => {
      const recipeData = await import(`../content/recipes/${path}`);
      return { ...recipeData, slug: path.substring(0, path.length - 3) };
    })
  );
  return { props: { recipes } };
}

export default Page;
