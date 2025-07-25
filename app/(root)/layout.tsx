import React, { ReactNode } from 'react'
import { Toaster } from 'sonner'

const Routelayout = ({children}:{children:ReactNode}) => {
  return (
    <div>{children}
    <Toaster/></div>
  )
}

export default Routelayout