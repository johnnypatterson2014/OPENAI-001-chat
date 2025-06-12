import ChatForm from '@/components/ChatForm'
import ChatHistory from '@/components/ChatHistory'
import { NextPage } from 'next'
import { ChatMessageWrapper } from '@/components/ChatMessageWrapper'

const IndexSpringPage: NextPage = () => {
  return (
    <>
      <div className="article-wrapper">

        <div className="article-body-wrapper">

          <ChatMessageWrapper>
            <div className='flex'>
              <div className='flex-1'>
                <div className="my-card text-sm">
                  <ChatHistory />
                  <ChatForm />
                </div>
              </div>
            </div>
          </ChatMessageWrapper>

        </div>

      </div>
    </>
  )
}

export default IndexSpringPage
