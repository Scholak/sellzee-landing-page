import React, { useRef, useState } from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [open, setOpen] = useState(false)

	const navEl = useRef()

  const handleToggle = () => {
    setOpen(!open)
		navEl.current.classList.toggle('-translate-x-full')
  }

  return (
		<>
			<div
				className='fixed top-4 right-4 z-50 flex flex-col gap-1 p-4 rounded-md shadow-lg bg-white cursor-pointer md:hidden'
				onClick={handleToggle}
			>
				<span
					className={`w-8 h-1 rounded-md bg-purple-800 transition duration-200 ${
						open ? 'rotate-45 translate-y-1.5' : ''
					}`}
				></span>
				<span
					className={`w-8 rounded-md bg-purple-800 transition duration-200 ${
						open ? 'h-0' : 'h-1'
					}`}
				></span>
				<span
					className={`w-8 h-1 rounded-md bg-purple-800 transition duration-200 ${
						open ? '-rotate-45 -translate-y-1.5' : ''
					}`}
				></span>
			</div>
			<nav
				className='fixed top-0 bottom-0 w-2/3  flex flex-col justify-between p-8 bg-indigo-800 z-50 transition duration-300 shadow-sm -translate-x-full 
					sm:w-1/2 md:bg-transparent md:static md:shadow-none md:flex-row md:items-center md:w-full md:bg-none md:translate-x-0 xl:px-36'
				ref={navEl}
			>
				<img src={logo} alt='logo' className='w-40' />
				<ul className='flex flex-col gap-4 md:flex-row'>
					<li className='font-semibold text-lg'>Home</li>
					<li className='text-lg'>About</li>
					<li className='text-lg'>Contact</li>
					<li className='text-lg'>Testimonials</li>
					<li className='text-lg'>Pricing</li>
				</ul>
				<button className='py-4 px-8 text-white bg-orange-600 rounded shadow-sm'>
					Get Started
				</button>
			</nav>
		</>
	)
}

export default Navbar
