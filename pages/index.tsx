import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <div>
      <Link href="/about">
        <a>About(next.js LinkAPI)</a>
      </Link>
    </div>

    <div>
      <a href="/about">About(a tag only)</a>
    </div>

    {/* asをつけてクエリストリングへ渡す */}
    <div>
      <Link as="/bafuko" href="/[person]">
        <a>bafuko</a>
      </Link>
    </div>


  </Layout>
)

export default IndexPage