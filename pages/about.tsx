import Link from 'next/link'
import Layout from '../components/Layout'
import { H1 } from '../components/Tailwind/TailwindComponents'

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <H1>About</H1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default AboutPage
