// export default function About() {
//   return <h1>Welcome! Check TV shows</h1>;
// }
// export default About

import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout.js";

function Home() {
  return (
    <Layout>
      <Head>
        <title>ABOUT٩( 'ω' )و</title>
        <meta name="description" content="description編集" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Welcome! Check TV shows</a>
          </Link>
        </li>
        <li>
          <Link href="/blog/hello-world">
            <a>Blog Post</a>
          </Link>
        </li>
      </ul>
      <div>
        <img src="img/gum-fruit.png" alt="ゴムゴムの実" className="img-box" />
      </div>
    </Layout>
  );
}

export default Home;
