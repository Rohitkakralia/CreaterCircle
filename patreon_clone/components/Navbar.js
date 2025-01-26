"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import NavbarAfterLogin from './NavbarAfterLogin'
const Navbar = () => {
  const { data: session } = useSession()
  if(session) {
    return <>
      <NavbarAfterLogin user={session.user.email} />
    </>
  }
  return (
    <nav className='bg-blue-950 text-white flex justify-between items-center px-4 h-16'>
        <div className='font-bold'>CreatorCircle!</div>
        {/* <ul className='flex justify-center gap-4'>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Signup</li>
          <li>Login</li>
        </ul> */}
        <div>
          <Link href={"/login"}>
          <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Login</button>
          </Link>
        </div>
    </nav>
  )
}

export default Navbar
