import React from 'react'
import CategoryHeader from '../../components/category/CategoryHeader'
import {Container } from 'react-bootstrap'
import ProductsDetails from '../../components/Products/ProductsDetails'
import RateContainer from '../../components/Rate/RateContainer'
import CartProductContainer from '../../components/Products/CartProductContainer'
const ProductsDetailsPage = () => {
  return (
    <div style={{minHeight:"670px"}}>
      <CategoryHeader/>
      <Container>
        <ProductsDetails/>
        <RateContainer/>
        <CartProductContainer title='منتجات قد تعجبك' />
      </Container>
    </div>
  )
}

export default ProductsDetailsPage
