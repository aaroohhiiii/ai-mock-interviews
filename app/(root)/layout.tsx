import React, { ReactNode } from 'react'
import { Toaster } from 'sonner'
import Image from 'next/image'
import Link from 'next/link'
// import { isAuthenticated } from '@/lib/actions/auth.action'
// import { redirect } from 'next/navigation'
const  Routelayout = async({children}:{children:ReactNode}) => {
  // const isUserAuthenticated= await isAuthenticated();
  // if(!isUserAuthenticated)
  //   redirect('/');
  return (
    <div className='root-layout'>
      <nav>
        <Link href="/" className='flex items-centergap-2'>
        <Image src="/logo.svg" alt='logo' width={38} height={32}/></Link>
        <h2 className='text-primary-100'>PrepAI</h2>
        {children}
      </nav>
   </div>
  )
}

export default Routelayout