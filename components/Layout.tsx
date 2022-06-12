import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className="flex flex-col min-h-screen max-w-5xl mx-auto">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav className="py-4 px-4 text-center">
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/todo-list">
          <a>TODO List</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/users">
          <a>Users List</a>
        </Link>{' '}
        | <a href="/api/users">Users API</a>
      </nav>
    </header>
    <main className="py-4 px-4 flex-grow bg-white rounded-xl shadow-lg ">
      {children}
    </main>
    <footer className="py-4 text-center">
      <span>Footer</span>
    </footer>
  </div>
)

export default Layout
