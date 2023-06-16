import React from 'react'
import fedex from '../assets/company_fedex.png'
import google from '../assets/company_google.png'
import ola from '../assets/company_ola.png'
import microsoft from '../assets/company_microsoft.png'
import amazon from '../assets/company_amazon.png'
import fedx from '../assets/company_fedx.png'
import walmart from '../assets/company_walmart.png'

const Brands = () => {
  return (
		<section className='container mx-auto flex flex-wrap gap-4 justify-center'>
			<div className='flex justify-center items-center w-full sm:w-1/3 md:w-1/3 h-20 px-8 py-4 shadow-sm rounded-sm bg-white'>
				<img src={fedex} alt='fedex logo' />
			</div>
			<div className='flex justify-center items-center w-full sm:w-1/3 lg:w-1/5 h-20 px-8 py-4 shadow-sm rounded-sm bg-white'>
				<img src={google} alt='fedex logo' />
			</div>
			<div className='flex justify-center items-center w-full sm:w-1/3 lg:w-1/5 h-20 px-8 py-4 shadow-sm rounded-sm bg-white'>
				<img src={ola} alt='fedex logo' />
			</div>
			<div className='flex justify-center items-center w-full sm:w-1/3 lg:w-1/5 h-20 px-8 py-4 shadow-sm rounded-sm bg-white'>
				<img src={microsoft} alt='fedex logo' />
			</div>
			<div className='flex justify-center items-center w-full sm:w-1/3 lg:w-1/5 h-20 px-8 py-4 shadow-sm rounded-sm bg-white'>
				<img src={amazon} alt='fedex logo' />
			</div>
			<div className='flex justify-center items-center w-full sm:w-1/3 lg:w-1/5 h-20 px-8 py-4 shadow-sm rounded-sm bg-white'>
				<img src={fedx} alt='fedex logo' />
			</div>
			<div className='flex justify-center items-center w-full sm:w-1/3 lg:w-1/5 h-20 px-8 py-4 shadow-sm rounded-sm bg-white'>
				<img src={walmart} alt='fedex logo' />
			</div>
		</section>
	)
}

export default Brands
