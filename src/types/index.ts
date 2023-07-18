export type Chat = {
  id: string
  title: string
  messages: ChatMessage[]
}

export type ChatMessage = {
  id: string
  author: 'me' | 'ai'
  body: string
}
