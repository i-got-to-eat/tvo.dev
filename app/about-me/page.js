import Image from 'next/image'
import Link from 'next/link'
import ContactForm from './contactform'

export default function Home() {
  return (
	  <>
	  <main>

	  <header>
	  	
	  	<h1>Tam Vo</h1>
	  	<Image/>
	  	<p>Senior Digital Marketing Director, Web Developer, Content Creator</p>

	  </header>

	  <section>
	  	<h2><Link href=""><Image/>Instagram</Link></h2>
	  	<h2><Link href=""><Image/>Instagram</Link></h2>
	  	<h2><Link href=""><Image/>Instagram</Link></h2>
	  	<h2><Link href=""><Image/>Instagram</Link></h2>
	  	<h2><Link href=""><Image/>Instagram</Link></h2>
	  	<h2><Link href=""><Image/>Instagram</Link></h2>
	  	<h2><Link href=""><Image/>Instagram</Link></h2>
	  </section>
	  <section>
	  	<h2>Contact Form</h2>
		<ContactForm/>
		
	  </section>

	  

	  </main>
	  </>
  )
}

