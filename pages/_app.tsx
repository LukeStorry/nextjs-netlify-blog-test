import { AppProps } from 'next/app';
import Link from 'next/link';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <nav>
      <Link href={'/'}>
        <a>home</a>
      </Link>
      <Link href={'/blog'}>
        <a>blog</a>
      </Link>
      <Link href={'/about'}>
        <a>about</a>
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
