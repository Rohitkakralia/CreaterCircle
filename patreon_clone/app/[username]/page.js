import React from 'react'
import NavbarAfterLogin from '@/components/NavbarAfterLogin'

const Username = ({params}) => {
  return (
    <div>
      {/* <NavbarAfterLogin/> */}
      {params.username}
    </div>
  )
}

export default Username
