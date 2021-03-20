import { AppProps } from 'next/app';
import Link from 'next/link';

const App = ({ Component, pageProps }: AppProps) => (
  <>
  {/* TODO split into layout and set up head https://github.com/vercel/next-learn-starter/blob/master/demo/components/layout.js */}
    <nav>
      <Link href={'/'}>
        <a>Home</a>
      </Link>
      <Link href={'/recipes'}>
        <a>Recipes</a>
      </Link>
    </nav>
    <main>
      <Component {...pageProps} />
    </main>
    <style jsx global>{`
      nav {
        text-align: center;
      }
      nav a {
        margin-right: 2px;

        padding: 4px;
      }

      main {
        display: flex;
        flex-direction: column;
      }
    `}</style>
  </>
);
export default App;
