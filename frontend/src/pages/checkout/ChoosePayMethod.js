import React from 'react'
import { Container } from 'react-bootstrap'
import Subtitle from '../../components/Uitily/Subtitle'
import PayMethod from '../../components/checkout/PayMethod'

const ChoosePayMethod = () => {
  return (
    <Container style={{minHeight:"670px"}}>
      <Subtitle title=" اختر طريقة دفع"/>
      <PayMethod/>
    </Container>
  )
}

export default ChoosePayMethod
