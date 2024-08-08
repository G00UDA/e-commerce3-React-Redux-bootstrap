import React from 'react'
import Subtitle from '../Uitily/Subtitle'
import ProductCard from './ProductCard'
import { Container ,Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const CartProductContainer = ({title , btn_title}) => {

  const navgate = useNavigate();

  const handle_click = () => {
    navgate('/products');
  }

  return (
    <Container>
      <Subtitle title={title} btn_title={btn_title} handle_click={handle_click} />
      <Row className='my-2 d-flex justify-content-between'>
        <ProductCard/>       
        <ProductCard/>       
        <ProductCard/>       
        <ProductCard/>       
      </Row>
    </Container>
  )
}

export default CartProductContainer
