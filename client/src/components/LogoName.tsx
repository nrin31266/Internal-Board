import React from 'react'

const LogoName = ({fontSize} : {fontSize?: string}) => {
  return (
    <div>
        <span className='fugaz-one-regular text-black h-full' style={{ fontSize }}>{` InternalBoard`}</span>
    </div>
  )
}

export default LogoName