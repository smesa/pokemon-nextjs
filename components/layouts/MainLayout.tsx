import Head from 'next/head';

import { FC, ReactNode } from 'react';
import { Navbar } from '../ui';

type Props = {
  children?: ReactNode;
  title?: string;
};

const origin = (typeof window !== 'undefined' && window.location.origin) || '';
export const MainLayout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Sergio Mesa" />
        <meta
          name="description"
          content={`Información sobre el pokemon ${title}`}
        />
        <meta name="keywords" content={`${title}, Pokemon, Pokedex`} />
        <meta property="og:title" content={`Infomación sobre ${title}`} />
        <meta property="og:description" content={`Información de ${title}`} />
        <meta
          property="og:image"
          content={`${origin}/img/pokemon-banner.png`}
        />
      </Head>

      {<Navbar />}

      <main
        style={{
          padding: '0 20px',
        }}
      >
        {children}
      </main>
    </>
  );
};
