import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Store</title>
      </Head>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {}
  }
}
