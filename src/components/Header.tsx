import Image from 'next/image'

interface Props {
  imgHeader: string
}

export default function Header({ imgHeader }: Props) {
  return (
    <header>
      <div className='mx-auto max-w-lg flex flex-col text-right mt-10'>
        <div className='h-25'>
          <Image
            src={imgHeader}
            alt='OpenClick'
            width='600'
            height='270'
            priority
          />
        </div>
        <small className='text-slate-200 hover:text-slate-400 cursor-pointer'>
          SmartBase
        </small>
      </div>
      <div className='my-6'>
        <blockquote className='text-2xl uppercase font-semibold italic text-center text-blue-900'>
          A Sua Base de Conhecimento
          <span className='mx-4 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-900 relative inline-block'>
            <span className='relative text-white'>Inteligente</span>
          </span>
        </blockquote>
      </div>
    </header>
  )
}
