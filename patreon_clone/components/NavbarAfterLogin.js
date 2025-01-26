import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const NavbarAfterLogin = ({user}) => {
  return (
    <nav className='bg-blue-950 text-white flex justify-between items-center px-4 h-16'>
        <div className='font-bold'>{user}</div>

        <div>
            
          <Link href={"/login"}>
          <button onClick={() => signOut()} className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>signout</button>
          </Link>
        </div>
    </nav>
  )
}

export default NavbarAfterLogin
