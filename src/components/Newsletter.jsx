import React from 'react'

const Newsletter = () => {
  return (
		<section className='container mx-auto relative flex flex-col gap-8 items-center justify-center bg-orange-100 rounded-lg py-20 w:full lg:mx-auto lg:w-4/5 mb-40'>
			<h3 className='font-medium text-lg text-orange-600'>NEWSLETTER</h3>
			<div className='font-medium text-4xl'>
				<p className='text-center'>We Offer Every Month 20% Off</p>
				<p className='text-center'>For Our All Subscribers</p>
			</div>
			<div className='flex flex-col items-center gap-4 p-3 rounded-md border border-slate-300 md:flex-row md:gap-0'>
				<input
					type='text'
					placeholder='Email Address'
					className='flex-1 bg-orange-100 outline-none h-full px-2'
				/>
				<button className='w-full flex-1 py-2 px-6 text-white bg-orange-600 rounded-sm shadow-sm md:w-auto'>
					Subscribe
				</button>
			</div>
		</section>
	)
}

export default Newsletter
