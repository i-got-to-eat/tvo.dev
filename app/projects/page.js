import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
	  <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

	  <header>
	  <h1>Tam Vo</h1>
	  </header>
	  <nav>
	  	<ul>
	  	<li><Link href="/">Home</Link></li>
	  	<li><Link href="/projects">Projects</Link></li>
	  	<li><Link href="/knowledge-base">Knowledge Base</Link></li>
	  	<li><Link href="/about-me">About Me</Link></li>
		</ul>
	  </nav>
	  <section>
	  	<h2>Experience</h2>
	  	<p></p>
	  </section>
	



	  HOME
	



	  </main>
  

	<footer>
	</footer>

	  </>
  )
}
