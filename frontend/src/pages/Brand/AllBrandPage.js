import React from 'react'
import BrandsContainer from '../../components/Brands/BrandsContainer'
import Pagination from '../../components/Uitily/Pagination'

import { Container } from 'react-bootstrap'

const AllBrandPage = () => {
  return (
    <Container style={{ minHeight: "680px" }}>
      <BrandsContainer/>
      <Pagination/>
    </Container>
  )
}

export default AllBrandPage
