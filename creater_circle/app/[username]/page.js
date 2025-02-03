import Payment from '@/models/Payment'
import React from 'react'
import PaymentPage from '@/components/PaymentPage'

const username = ({params}) => {
  return (
    <>
      <PaymentPage username = {params.username}/>
    </>
  )
}

export default username
