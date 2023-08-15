// import Image from 'next/image'
import Link from 'next/link'
// import About from './about'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/about">Link para About</Link>
      <br />
      <Link href="/content">Link para Content</Link>
      <br />
      <Link href="/exit">Link para Exit</Link>
    </main>
  )
}
