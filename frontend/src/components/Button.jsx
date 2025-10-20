import React from 'react'

const Button = ({ title }) => {
  return (
    <button className='bg-[#F28D35] px-2 py-6 rounded-[4px] h-[38px] w-[214px] flex items-center justify-center font-[inter] text-[14px] font-bold tracking-[-0.02em] leading-[100%] text-white uppercase'>
      {title}
    </button>
  )
}

export default Button