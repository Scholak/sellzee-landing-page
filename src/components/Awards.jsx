import React from 'react'
import awardsBg from '../assets/awards_bg.png'

const Awards = () => {
  return (
		<section className='container mx-auto mb-8 relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
			<img src={awardsBg} alt='' className='absolute inset-0 -translate-y-28' />
			<div className='flex flex-col justify-center items-center gap-4 px-12 py-24 shadow-md bg-white z-10'>
				<span className='text-indigo-600 font-bold text-4xl'>50 +</span>
				<p className='text-gray-700 font-medium'>Happy Clients</p>
			</div>
			<div className='flex flex-col justify-center items-center gap-4 px-12 py-24 shadow-md bg-white z-10'>
				<span className='text-indigo-600 font-bold text-4xl'>550 +</span>
				<p className='text-gray-700 font-medium'>Projects Completed</p>
			</div>
			<div className='flex flex-col justify-center items-center gap-4 px-12 py-24 shadow-md bg-white z-10'>
				<span className='text-indigo-600 font-bold text-4xl'>250</span>
				<p className='text-gray-700 font-medium'>Dedicated Members</p>
			</div>
			<div className='flex flex-col justify-center items-center gap-4 px-12 py-24 shadow-md bg-white z-10'>
				<span className='text-indigo-600 font-bold text-4xl'>30 +</span>
				<p className='text-gray-700 font-medium'>Awards Won</p>
			</div>
		</section>
	)
}

export default Awards
