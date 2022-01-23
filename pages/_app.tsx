import { AppProps } from "next/app";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="app">
      <main className="wrapper">
        {/* ドット3つ spread attributeで子のComponentにpropsを渡す */}
        <Component {...pageProps} />
      </main>
    </div>
  );
};

export default MyApp;
