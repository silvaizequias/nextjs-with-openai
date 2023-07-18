import ChatMessageInput from './ChatMessageInput'

interface Props {
  disabled: boolean
  onSendMessage: (message: string) => void
}

export default function Footer({ disabled, onSendMessage }: Props) {
  return (
    <footer className='w-full p-2'>
      <div className='max-w-4xl mx-auto'>
        <ChatMessageInput disabled={disabled} onSend={onSendMessage} />
        <div className='pt-8 text-center text-xs text-gray-400'>
          SmartBase é uma ferramenta da{' '}
          <a
            href='https://www.openclick.com.br'
            target='_blank'
            className='underline'
          >
            OpenClick
          </a>
        </div>
      </div>
    </footer>
  )
}
