import { Chat } from '@/types'
import ChatPlaceholder from './ChatPlaceholder'
import ChatMessageItem from './ChatMessageItem'
import ChatMessageLoading from './ChatMessageLoading'
import { useEffect, useRef } from 'react'

interface Props {
  imgIcone: string
  chat: Chat | undefined
  loading: boolean
}

export default function ChatArea({ imgIcone, chat, loading }: Props) {
  const scrollArea = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollArea.current?.scrollTo(0, scrollArea.current.scrollHeight)
  }, [loading, chat?.messages.length])

  return (
    <section ref={scrollArea} className='flex-auto h-0 overflow-y-scroll'>
      {!chat && <ChatPlaceholder />}
      {chat &&
        chat.messages.map((item) => (
          <ChatMessageItem key={item.id} item={item} imgIcone={imgIcone} />
        ))}
      {loading && <ChatMessageLoading />}
    </section>
  )
}
