import React from 'react'

const Header = () => {
  return (
    <div className='flex bg-white p-2 justify-center items-center'>
        <header className='flex items-center justify-center gap-4 '>
            <img src='/spotlogo.png' alt='spots logo'className='w-[10px] h-[16px]'/>
            <h1 className='text-2xl font-medium spacing font-dm-mono'>SPOTS</h1>

        </header>
      
    </div>
  )
}

export default Header
