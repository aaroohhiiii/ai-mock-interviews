"use client"

import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils';
import { useState } from 'react';
enum CallStatus {
  INACTIVE ='INACTIVE',
  CONNECTING ='CONNECTING',
  ACTIVE='ACTIVE',
  FINISHED='FINISHED',
}
const Agent = ({userName}:AgentProps) => {
  const callStatus =CallStatus.INACTIVE
  const isSpeaking = true ;
   const lastMessage= "whats your name? my name is aarohi , nice to meet you !";

  const messages =[
    'whats your name?','my name is aarohi , nice to meet you !'

  ]
  return (
    <>
    <div className='call-view'>
      <div className='card-interviewer'>
        <div className='avatar'>
          <Image src ='/ai-avatar.png' alt ="vapi"width={65} height={54} />
          {isSpeaking && <span className='animate-speak'/>}

        </div>
        <h3>AI interviewer</h3>
      </div>
      <div className='card-border'>
        <div className='card-content'>
          <Image src=
        '/user-avatar.png' alt='user savatar' width={540} height={540} className='rouned-full object-cover size-[120px]'/>
        <h3>{userName}</h3>
        </div>
      </div>
    </div>
    {messages.length>0 &&(
      <div className='transcript-border'>
        <div className='transcript'>
          <p key={lastMessage} className={cn('transition-opacity duration-500 opacity-0','animate\ opacity-100')}>{lastMessage}</p>
        </div>
      </div>
    )}
    <div className='w-full flex justify-center'>
      {callStatus !=='ACTIVE'?(
        <button className='relative btn-call'>
          <span className={cn('absolute animate-ping rounded-full opacity-75',callStatus !=='CONNECTING' && 'hidden')}/>
          
          
          <span>
  {callStatus ==='INACTIVE'|| callStatus==='FINISHED'?'Call':'...'} 
          </span>
        </button>
      ):(
        <button className='btn-disconnect'>
          <span>
            End
          </span>
        </button>
      )}
    </div>
    </>
  )
}

export default Agent