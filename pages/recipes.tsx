import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  recipes: { slug: string; attributes: Attributes }[];
}

const Page: NextPage<Props> = ({ recipes }) => (
  <div>
    {recipes.map((recipe, i) => (
      <Link href={`recipes/${recipe.slug}`} key={i}>
        <a>
          <Image src={`/img/${recipe.attributes.thumbnail}`} layout="responsive" width="800" height="400" alt="" />
          <h2>{recipe.attributes.title}</h2>
        </a>
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
