import Header from "../components/Header";
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next News</title>
        <meta name="author" content="Ahmed Abukar" />
      </Head>

      <h1>Welcome to the next js world</h1>
    </div>
  )
}
