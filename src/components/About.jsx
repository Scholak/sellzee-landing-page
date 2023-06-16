import React from 'react'
import { FaCheck } from 'react-icons/fa'
import about from '../assets/about_img.png'

const About = () => {
  return (
		<section className='container mx-auto grid grid-cols-1 px-2 md:px-0 md:grid-cols-2 md:gap-4'>
			<img src={about} alt='about us image' />
			<div className='flex flex-col justify-center items-start xl:w-3/4'>
				<h3 className='mb-2 text-orange-600 font-semibold text-sm'>
					Lorem ipsum dolor sit ame
				</h3>
				<h2 className='text-3xl font-bold md:text-5xl'>
					Simple Solutions for Complex Connections
				</h2>
				<p className='my-4 text-gray-800 text-justify text-sm'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec
					gravida feugiat neque, ipsum faucibus. Pharetra vel suspendisse mi
					odio a velit feugiat sapien.
				</p>
				<div className='flex gap-4 mb-4'>
					<div className='flex gap-2 items-center'>
						<FaCheck />
						<span className='font-semibold text-lg'>High Analysis</span>
					</div>
					<div className='flex gap-2 items-center'>
						<FaCheck />
						<span className='font-semibold text-lg'>Certified Institute</span>
					</div>
				</div>
				<button className='px-8 py-4 rounded shadow-md bg-orange-600 text-white'>
					Learn More
				</button>
			</div>
		</section>
	)
}

export default About
