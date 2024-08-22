import React from 'react'

type Props = {
  title: string
}

const NoData = ({ title }: Props) => {
  return (
    <div className='h-full w-full flex flex-1 flex-col items-center justify-center'>
      <p className='text-5xl'>{title}</p>
    </div>
  )
}

export default NoData