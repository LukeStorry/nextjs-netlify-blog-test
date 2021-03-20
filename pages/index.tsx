import { NextPage } from 'next';
import { attributes, content } from '../content/home.md';

const Home: NextPage = () => (
  <>
    <h1>{attributes.title}</h1>
    {content}{' '}
  </>
);

export default Home;
