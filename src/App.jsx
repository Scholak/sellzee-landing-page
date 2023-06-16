import React from 'react'
import About from './components/About'
import Awards from './components/Awards'
import Brands from './components/Brands'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import Plans from './components/Plans'
import Reviews from './components/Reviews'
import './index.scss'

const App = () => {
  return (
		<div className='bg-slate-50'>
			<header className='mb-32 bg-gradient-to-r from-purple-800 to-blue-600 text-white'>
				<Navbar />
				<Hero />
			</header>
			<main className='flex flex-col gap-36'>
				<Brands />
				<About />
				<Awards />
				<Features />
				<Reviews />
				<Plans />
				<Newsletter />
			</main>
      <Footer />
		</div>
	)
}

export default App
