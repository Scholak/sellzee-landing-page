import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import logo from '../assets/logo.png'
import footerImg from '../assets/footer_bottom.png'

const Footer = () => {
  return (
		<footer className='relative grid grid-cols-1 gap-12 place-items-center w-full p-12 pb-20 bg-blue-950 text-white sm:grid-cols-2 sm:pb-32 mb:gap-8 md:pb-48 lg:grid-cols-4 lg:gap-0 lg:pb-52'>
			<div>
				<img src={logo} alt='logo' className='mb-6' />
				<div className='flex gap-2'>
					<span className='flex items-center justify-center p-2 rounded-full bg-slate-600 cursor-pointer'>
						<FaFacebookF />
					</span>
					<span className='flex items-center justify-center p-2 rounded-full bg-slate-600 cursor-pointer'>
						<FaTwitter />
					</span>
					<span className='flex items-center justify-center p-2 rounded-full bg-slate-600 cursor-pointer'>
						<FaInstagram />
					</span>
					<span className='flex items-center justify-center p-2 rounded-full bg-slate-600 cursor-pointer'>
						<FaYoutube />
					</span>
				</div>
			</div>
			<div>
				<h5 className='mb-3 font-medium text-xl'>Short Links</h5>
				<ul>
					<li className='cursor-pointer p-0.5'>Home</li>
					<li className='cursor-pointer p-0.5'>Services</li>
					<li className='cursor-pointer p-0.5'>Screenshots</li>
					<li className='cursor-pointer p-0.5'>Contact</li>
				</ul>
			</div>
			<div>
				<h5 className='mb-3 font-medium text-xl'>Help Link</h5>
				<ul>
					<li className='cursor-pointer p-0.5'>How to download</li>
					<li className='cursor-pointer p-0.5'>How it work</li>
					<li className='cursor-pointer p-0.5'>Video tutorial</li>
					<li className='cursor-pointer p-0.5'>FAQ</li>
				</ul>
			</div>
			<div>
				<h5 className='mb-3 font-medium text-xl'>Short Links</h5>
				<ul>
					<li className='cursor-pointer p-0.5'>Google Play Store</li>
					<li className='cursor-pointer p-0.5'>Apple App Store</li>
					<li className='cursor-pointer p-0.5'>Download Directly</li>
				</ul>
			</div>
			<img src={footerImg} alt='' className='absolute w-full bottom-0' />
		</footer>
	)
}

export default Footer
