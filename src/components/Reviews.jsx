import React from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import { FaAngleRight } from 'react-icons/fa'
import review from '../assets/review_img.png'

const Reviews = () => {
  return (
		<section className='container mx-auto'>
			<h2 className='mb-4 text-center text-4xl font-bold lg:text-5xl'>
				User’s Review
			</h2>
			<h4 className='mx-auto mb-8 text-center text-gray-700 text-sm lg:w-2/5'>
				Collaborate over projects with your team and clients optimised for
				mobile and tablet don't let slow
			</h4>
			<div className='flex flex-col-reverse gap-4 lg:flex-row'>
				<div className='flex-1 flex flex-col justify-between'>
					<h6 className='font-semibold text-2xl'>What People Say About Us</h6>
					<div>
						<div className='md:w-96 p-12 shadow-md rounded bg-white'>
							<p className='mb-2 font-semibold text-xl'>Davit millar</p>
							<p className='text-gray-800'>CEO, PParkivew int, Ltd</p>
						</div>
						<p className='p-8'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nisl,
							tincidunt commodo sit. Et, purus lectus odio cursus placerat leo,
							non etiam. Neque at leo risus orci,{' '}
						</p>
					</div>
					<div className='w-full flex justify-center gap-4'>
						<button className='relative flex items-center justify-center p-4 rounded-full rounded-br-none shadow-sm bg-orange-600 text-white'>
							<FaAngleLeft />
						</button>
						<button className='flex items-center justify-center p-4 rounded-full rounded-bl-none shadow-sm bg-orange-600 text-white'>
							<FaAngleRight />
						</button>
					</div>
				</div>
				<div className='flex-1'>
					<img src={review} alt='review image' />
				</div>
			</div>
		</section>
	)
}

export default Reviews
