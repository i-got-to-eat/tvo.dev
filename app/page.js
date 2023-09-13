import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
	  <>

	  <main className="w-full grid grid-rows-10 text-slate-100 grid-cols-10">
	  <header className="text-2xl col-span-10 mb-32 flex-no-wrap relative h-32 flex w-full min-w-max items-center justify-between bg-[#FBFBFB] shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start">
	  	<h1 className="pl-40 text-3xl">Tam Vo</h1>
	  	<nav className="mx-20">
	  		<ul className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row">
	  		<li className="lg:pr-3"><Link href="/" className="p-3">Home</Link></li>
	  		<li className="lg:pr-3"><Link href="/projects" className="p-3">Projects</Link></li>
	  		<li className="lg:pr-3"><Link href="/knowledge-base" className="p-3">Knowledge Base</Link></li>
			<li className="lg:pr-3"><Link href="/digital-marketing-service" className="p-3">Digital Marketing Services</Link></li>
	  		<li className="lg:pr-3"><Link href="/about-me" className="p-3">About Me</Link></li>
			</ul>
	  	</nav>
	  	<div className="relative flex flex-row-reverse grow">
			<Link href="/" className="mr-10 p-2 text-neutral-600 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 [&.active]:text-black/90 dark:[&.active]:text-neutral-400">
	  		Login
	  		</Link>

	  	</div>
	  </header>
	  

	  <section className="col-start-3 col-end-7">
	  	<h2 className="text-6xl">Expertise</h2>
	  	<p>Digital Marketing Manager, Full Stack Web Developer, Security and Data Analyst, and Content Creator</p>
	  	<p>Effective Leader, Strong Communicator, Reliable Innovator, Light-Hearted, and Life-Long Learner</p>
		<p>Programming Languages: Next.JS, SQL, NoSQL, JavaScript, Python, Rust, C</p>
	  	<h3 className="text-3xl mt-10">Job Experience</h3>
	  	<h4 className="text-xl">GlobalLogic, Inc. - Engineer Analyst</h4>
	  	<p>
	  		<span>Date</span>
	  		CREATED AI
	  	</p>
	  	<h3 className="text-3xl mt-10">Certificates</h3>
	  	<h4 className="text-xl">National Cyber League (Capture the Flag CyberSecurity Competition)</h4>
	  	<p></p>



	  </section>
	  <section className="col-start-3 col-end-7 mt-10">
		<h2 className="text-6xl">Digital Showcase</h2>
	  	<h3 className="text-xl">Successful Outreach Campaign</h3>
		<h3 className="text-xl">Conway's Game of Life</h3>
		<h3 className="text-xl">Fourier Transform 3D Visualization</h3>
		<h3 className="text-xl">Database and Web Design Architect</h3>
	  </section>

	  </main>
  

	<footer>
		<p>footer</p>
	  	<p></p>
	</footer>

	  </>
  )
}
