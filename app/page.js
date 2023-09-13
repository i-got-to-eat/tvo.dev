import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
	  <>

	  <main className="w-full grid grid-rows-10 text-slate-100 grid-cols-10">
	  <header className="col-span-10">
	  	<h1 className="">Tam Vo</h1>
	  	<nav className="my-10">
	  		<ul className="">
	  		<li className="px-5 mx-5"><Link href="/">Home</Link></li>
	  		<li><Link href="/projects">Projects</Link></li>
	  		<li><Link href="/knowledge-base">Knowledge Base</Link></li>
			<li><Link href="/digital-marketing-service">Digital Marketing Services</Link></li>
	  		<li><Link href="/about-me">About Me</Link></li>
			</ul>
	  	</nav>
	  </header>
	  

	  <section>
	  	<h2>Experience</h2>
	  	<p></p>
	  </section>
	

	  </main>
  

	<footer>
	</footer>

	  </>
  )
}
