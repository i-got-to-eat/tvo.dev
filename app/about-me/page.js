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
	  <section className="max-w-full mb-5">
	  	<h2 className="h-fit text-center max-w-full place-content-center font-semibold text-4xl text-slate-50/80 my-5">My Social Media</h2>
	  	<div className="gap-5 place-content-center content-center items-center grid grid-rows-6">
		<h3 className="max-w-sm max-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 text-2xl font-medium text-black">
	  		<Link href="https://www.instagram.com/tom_tim_tam/" target="_blank" title="Navigate to Tam's Personal Instagram Page" className="grid grid-cols-3 grid-rows-1 px-5 py-2 w-full text-left">
	  		<Image src="/instagram-round-icon.svg" width={50} height={50} alt="Instagram Logo" className="col-span-1 ml-3 place-self-center"/>
	  		<span className="col-span-2 place-self-center text-left w-full">Instagram</span>
	  		</Link>
	  	</h3>    
	  	<h3 className="max-w-sm max-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 text-2xl font-medium text-black">
	  		<Link href="https://www.linkedin.com/in/tamkhaivo/" target="_blank" title="Navigate to Tam's LinkedIn Page" className="grid grid-cols-3 grid-rows-1 px-5 py-2 w-full text-left">
	  		<Image src="/linkedin-round-icon.svg" width={50} height={50} alt="LinkedIn Logo" className="col-span-1 ml-3 place-self-center"/>
	  		<span className="col-span-2 place-self-center text-left w-full">LinkedIn</span>
	  		</Link>
	  	</h3>
	  	<h3 className="max-w-sm max-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 text-2xl font-medium text-black">
	  		<Link href="https://www.youtube.com/channel/UCOQkZawykCFxabYuGSq-GqQ" target="_blank" title="Navigate to Tam's Youtube Channel" className="grid grid-cols-3 grid-rows-1 px-5 py-2 w-full text-left">
	  		<Image src="/youtube-round-icon.svg" width={50} height={50} alt="YouTube Logo" className="col-span-1 ml-3 place-self-center"/>
	  		<span className="col-span-2 place-self-center text-left w-full">YouTube</span>
	  		</Link>
	  	</h3>
	  	<h3 className="max-w-sm max-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 text-2xl font-medium text-black">
	  		<Link href="" target="_blank" title="Navigate to Tam's Digital Marketing Services Page" className="grid grid-cols-3 grid-rows-1 px-5 py-2 w-full text-left">
	  		<Image src="/marketing-agency-icon.svg" width={50} height={50} alt="Digital Marketing Logo" className="col-span-1 ml-3 place-self-center"/>
	  		<span className="col-span-2 place-self-center text-left w-full">Digital Marketing Services</span>
	  		</Link>
	  	</h3>
	  	<h3 className="max-w-sm max-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 text-2xl font-medium text-black">
	  		<Link href="" target="_blank" title="Navigate to Tam's Digital Portfolio" className="grid grid-cols-3 grid-rows-1 px-5 py-2 w-full">
	  		<Image src="/briefcase-icon.svg" width={50} height={50} alt="Portfolio Logo" className="col-span-1 ml-3 place-self-center"/>
	  		<span className="col-span-2 place-self-center text-left w-full">Portfolio</span>
	  		</Link>
	  	</h3>





	  	</div>
	  </section>
	  <section>
	  	<ContactForm/>
		
	  </section>

	  

	  </main>
	  </>
  )
}

