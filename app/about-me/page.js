import Image from 'next/image'
import Link from 'next/link'
import ContactForm from './contactform'

export default function Home() {
  return (
	  <>
	  <main>

	  <header className="max-w-full pb-8 pt-5 text-center text-white font-light text-[20px] relative top-[-6px] bg-zinc-700/50">	  
	  	<h1 className="text-[60px] text-white-700 font-bold">Tam Vo</h1>
<div className="text-center"><p className="inline-block text-left">Senior Digital Marketing Director<br/>Web Developer<br/>Content Creator</p>
</div>
	  </header>
	  <section className="max-w-full mb-10">
	  	<h2 className="h-fit text-center max-w-full">Social Media</h2>
	  	<div className="gap-5 place-content-center content-center items-center grid grid-rows-6">
		<h3 className="p-6 max-w-sm max-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 text-xl font-medium text-black"><Link href=""><div className="shrink-0"><Image/></div>Instagram</Link></h3>
		<h3 className="p-6 max-w-sm max-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 text-xl font-medium text-black"><Link href=""><div className="shrink-0"><Image/></div>LinkedIn</Link></h3>
		<h3 className="p-6 max-w-sm max-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 text-xl font-medium text-black"><Link href=""><div className="shrink-0"><Image/></div>YouTube</Link></h3>
		<h3 className="p-6 max-w-sm max-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 text-xl font-medium text-black"><Link href=""><div className="shrink-0"><Image/></div>Digital Marketing Services</Link></h3>
		<h3 className="p-6 max-w-sm max-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 text-xl font-medium text-black"><Link href=""><div className="shrink-0"><Image/></div>Portfolio</Link></h3>
	  	</div>
	  </section>
	  <section className="max-w-full place-content-center content-center items-center grid grid-row-2">
		<ContactForm/>
		
	  </section>

	  

	  </main>
	  </>
  )
}

