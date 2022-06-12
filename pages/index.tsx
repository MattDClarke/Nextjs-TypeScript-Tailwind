import Link from 'next/link'
import Layout from '../components/Layout'
import { H1 } from '../components/Tailwind/TailwindComponents'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <H1>Hello Next.js 👋</H1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
