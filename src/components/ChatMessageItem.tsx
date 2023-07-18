import Image from 'next/image'
import { FaRegUser } from 'react-icons/fa'
import { ChatMessage } from '@/types'

interface Props {
  imgIcone: string
  item: ChatMessage
}

export default function ChatMessageItem({ item, imgIcone }: Props) {
  return (
    <div className={`py-5 ${item.author === 'ai' && 'bg-slate-100/50'}`}>
      <div className='max-w-4xl m-auto flex'>
        <div
          className={`w-10 h-10 flex justify-center items-center mx-4 md:ml-0 rounded ${
            item.author === 'ai' ? 'bg-transparent' : 'bg-blue-800'
          }`}
        >
          {item.author === 'me' && (
            <FaRegUser width={14} height={14} className='text-white' />
          )}
          {item.author === 'ai' && (
            <Image
              src={imgIcone}
              alt='OpenClick'
              width='500'
              height='500'
              priority
            />
          )}
        </div>
        <div className='flex-1 text-base whitespace-pre-wrap'>{item.body}</div>
      </div>
    </div>
  )
}
