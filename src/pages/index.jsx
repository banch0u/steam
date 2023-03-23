import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/layout/header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Steam</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </>
  );
}
