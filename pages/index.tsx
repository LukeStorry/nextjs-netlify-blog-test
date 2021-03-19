import { NextPage } from 'next';

import Link from 'next/link';
import { attributes, content } from '../content/home.md';
const Home: NextPage = () => (
  <>
    <h1>{attributes.title}</h1>
    {content}{' '}
    <style jsx>{`
      h1,
      div {
        text-align: center;
      }
    `}</style>
  </>
);
export default Home;
