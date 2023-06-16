import React from 'react'
import hero from '../assets/hero_img.png'

const Hero = () => {
  return (
		<section
			className='relative grid grid-cols-1 gap-4 p-8 lg:flex-row-reverse place-items-center overflow-hidden
			md:grid-cols-2 lg:px-8 lg:grid-cols-3 xl:px-12
			after:hidden after:content-[""] after:absolute after:bottom-0 after:left-0 after:origin-bottom-left after:-rotate-12 after:h-5/6 after:bg-gradient-to-r after:from-white after:to-transparent after:opacity-20
			md:after:block md:after:w-1/2 lg:after:w-1/3'
		>
			<img
				src={hero}
				alt='hero image'
				className='lg:col-span-2 md:order-last'
			/>
			<div className='h-full flex flex-col gap-6 xl:pl-24 z-10'>
				<h3 className='font-medium text-xl'>Inspiration Technology.</h3>
				<div>
					<h1 className='font-bold text-6xl mb-2'>Runs faster.</h1>
					<h2 className='font-medium text-4xl mb-1'>Costs less and</h2>
					<h2 className='font-medium text-4xl'>never breaks.</h2>
				</div>
				<span className='block h-0.5 w-full my-2 bg-white'></span>
				<p className='mb-8 text-gray-300'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sapien
					lectus sit tristique rhoncus, nisi, malesuada. Tellus consequat
				</p>
				<div className='flex flex-col gap-4 md:flex-row md:justify-between'>
					<button className='flex-1 py-4 px-8 text-white bg-orange-600 rounded shadow-sm'>
						Get Started
					</button>
					<button className='flex-1 py-4 px-8 text-white border border-white rounded shadow-sm'>
						Free Trail
					</button>
				</div>
			</div>
		</section>
	)
}

export default Hero
