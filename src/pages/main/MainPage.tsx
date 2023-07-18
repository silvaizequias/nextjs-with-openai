'use client'

import { v4 as uuidv4 } from 'uuid'
import { useEffect, useState } from 'react'
import { Chat } from '@/types'
import Header from '@/components/Header'
import ChatArea from '@/components/ChatArea'
import Footer from '@/components/Footer'
import { openai } from '@/openai'

export default function MainPage() {
  const [chatList, setChatList] = useState<Chat[]>([])
  const [chatActiveId, setChatActiveId] = useState<string>('')
  const [chatActive, setChatActive] = useState<Chat>()
  const [AILoading, setAILoading] = useState<boolean>(false)

  useEffect(() => {
    setChatActive(chatList.find((item) => item.id === chatActiveId))
  }, [chatActiveId, chatList])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (AILoading) getAIResponse()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [AILoading])

  const getAIResponse = async () => {
    let chatListClone = [...chatList]
    let chatIndex = chatListClone.findIndex((item) => item.id === chatActiveId)
    if (chatIndex > -1) {
      const response = await openai.generate(
        openai.translateMessages(chatListClone[chatIndex].messages)
      )

      if (response) {
        chatListClone[chatIndex].messages.push({
          id: uuidv4(),
          author: 'ai',
          body: response
        })
      }
    }
    setChatList(chatListClone)
    setAILoading(false)
  }

  const handleClearConversations = () => {
    if (AILoading) return

    setChatActiveId('')
    setChatList([])
  }

  const handleNewChat = () => {
    if (AILoading) return

    setChatActiveId('')
  }

  const handleSendMessage = (message: string) => {
    if (!chatActiveId) {
      let newChatId = uuidv4()
      setChatList([
        {
          id: newChatId,
          title: message,
          messages: [{ id: uuidv4(), author: 'me', body: message }]
        },
        ...chatList
      ])
      setChatActiveId(newChatId)
    } else {
      let chatListClone = [...chatList]
      let chatIndex = chatListClone.findIndex(
        (item) => item.id === chatActiveId
      )
      chatListClone[chatIndex].messages.push({
        id: uuidv4(),
        author: 'me',
        body: message
      })
      setChatList(chatListClone)
    }
    setAILoading(true)
  }

  return (
    <main className='flex min-h-screen bg-gray-50'>
      <section className='flex flex-col w-full'>
        <Header imgHeader={''} />
        <ChatArea
          chat={chatActive}
          loading={AILoading}
          imgIcone={''}
        />
        <Footer disabled={AILoading} onSendMessage={handleSendMessage} />
      </section>
    </main>
  )
}
