import React from 'react'
import bulb from '../assets/bulb.png'
import pen from '../assets/pen.png'
import users from '../assets/users.png'
import showcase from '../assets/showcase.png'
import hand from '../assets/hand.png'

const Features = () => {
  return (
		<section className='container mx-auto grid grid-cols-1 gap-8 px-2 sm:grid-cols-2 md:px-0 lg:grid-cols-3'>
			<div className='md:p-10'>
				<h3 className='mb-2 text-orange-600 font-semibold text-sm'>
					Your Vision, Our Future.
				</h3>
				<h2 className='text-3xl font-bold md:text-lx'>
					Committed to People, Committed
				</h2>
				<p className='my-4 text-gray-800 text-justify text-sm'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
			</div>
			<div className='flex flex-col gap-6 p-12 bg-indigo-700 text-white rounded-lg shadow-sm'>
				<img src={bulb} alt='light bulb' className='w-14' />
				<h5 className='font-medium text-xl'>Creative Ideas</h5>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec
					gravida
				</p>
			</div>
			<div className='flex flex-col gap-6 p-12 rounded-lg border-2 border-gray-200 bg-white shadow-sm'>
				<img src={pen} alt='pen' className='w-14' />
				<h5 className='font-medium text-xl'>Creative Ideas</h5>
				<p className='text-gray-800 text-sm'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec
					gravida
				</p>
			</div>
			<div className='flex flex-col gap-6 p-12 rounded-lg border-2 border-gray-200 bg-white shadow-sm'>
				<img src={users} alt='pen' className='w-14' />
				<h5 className='font-medium text-xl'>User Friendly</h5>
				<p className='text-gray-800 text-sm'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec
					gravida
				</p>
			</div>
			<div className='flex flex-col gap-6 p-12 rounded-lg border-2 border-gray-200 bg-white shadow-sm'>
				<img src={showcase} alt='pen' className='w-14' />
				<h5 className='font-medium text-xl'>Perfect Showcase</h5>
				<p className='text-gray-800 text-sm'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec
					gravida
				</p>
			</div>
			<div className='flex flex-col gap-6 p-12 rounded-lg border-2 border-gray-200 bg-white shadow-sm'>
				<img src={hand} alt='pen' className='w-14' />
				<h5 className='font-medium text-xl'></h5>
				<p className='text-gray-800 text-sm'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec
					gravida
				</p>
			</div>
		</section>
	)
}

export default Features
