import React from 'react'
import tic from '../assets/tic.png'
import fire from '../assets/card_fire.png'
import heart from '../assets/card_heart.png'

const Plans = () => {
  return (
		<section className='relative w-full flex flex-col items-center gap-6 py-12'>
			<div className='absolute top-0 left-0 w-full h-full bg-gray-200 md:h-1/2'></div>
			<h3 className='text-center text-3xl font-bold lg:w-1/3 mx-auto z-10'>
				Without Extra Charge Choose Your Best Plan
			</h3>
			<div className='flex gap-6 justify-center p-3 bg-white rounded-md z-10'>
				<button className='flex items-center justify-center py-3 px-6 rounded-md shadow-sm text-white bg-orange-600 font-medium'>
					Monthly
				</button>
				<button className='flex items-center justify-center py-3 px-6 rounded-md shadow-sm text-orange-600 bg-orange-200 font-medium'>
					Yearly
				</button>
			</div>
			<div className='flex flex-col gap-8 mx-4 md:flex-row md:mx-0'>
				<div className='relative flex flex-col items-center bg-white rounded-md shadow-md py-6 px-20 pt-28'>
					<img
						src={fire}
						alt='fire icon'
						className='absolute top-0 left-1/2 -translate-x-1/2'
					/>
					<h6 className='font-medium text-2xl'>Standard</h6>
					<span className='my-4 text-indigo-700 text-6xl font-bold'>$29</span>
					<p className='mb-4 font-medium'>monthly pack</p>
					<ul className='flex flex-col gap-3.5 mb-12'>
						<li className='flex gap-4 items-center'>
							<img src={tic} alt='tic icon' className='w-5 h-5' />
							256 GB SSD STORE
						</li>
						<li className='flex gap-4 items-center'>
							<img src={tic} alt='tic icon' className='w-5 h-5' />
							FULL UI KIT DOWNLOAD
						</li>
						<li className='flex gap-4 items-center'>
							<img src={tic} alt='tic icon' className='w-5 h-5' />
							PUBLIC API
						</li>
						<li className='flex gap-4 items-center'>
							<img src={tic} alt='tic icon' className='w-5 h-5' />
							FULL UI PACK DOWNLOAD
						</li>
						<li className='flex gap-4 items-center'>
							<img src={tic} alt='tic icon' className='w-5 h-5' />
							24/7 SUPPORT
						</li>
					</ul>
					<button className='flex items-center justify-center w-full p-2 rounded-md shadow-sm bg-orange-600 text-white font-semibold'>
						Install Pack
					</button>
				</div>
				<div className='relative flex flex-col items-center bg-white rounded-md shadow-md py-6 px-20 pt-28'>
					<img
						src={heart}
						alt='fire icon'
						className='absolute top-0 left-1/2 -translate-x-1/2'
					/>
					<h6 className='font-medium text-2xl'>Standard</h6>
					<span className='my-4 text-indigo-700 text-6xl font-bold'>$39</span>
					<p className='mb-4 font-medium'>monthly pack</p>
					<ul className='flex flex-col gap-3.5 mb-12'>
						<li className='flex gap-4 items-center'>
							<img src={tic} alt='tic icon' className='w-5 h-5' />
							256 GB SSD STORE
						</li>
						<li className='flex gap-4 items-center'>
							<img src={tic} alt='tic icon' className='w-5 h-5' />
							FULL UI KIT DOWNLOAD
						</li>
						<li className='flex gap-4 items-center'>
							<img src={tic} alt='tic icon' className='w-5 h-5' />
							PUBLIC API
						</li>
						<li className='flex gap-4 items-center'>
							<img src={tic} alt='tic icon' className='w-5 h-5' />
							FULL UI PACK DOWNLOAD
						</li>
						<li className='flex gap-4 items-center'>
							<img src={tic} alt='tic icon' className='w-5 h-5' />
							24/7 SUPPORT
						</li>
					</ul>
					<button className='flex items-center justify-center w-full p-2 rounded-md shadow-sm bg-orange-600 text-white font-semibold'>
						Install Pack
					</button>
				</div>
			</div>
		</section>
	)
}

export default Plans
