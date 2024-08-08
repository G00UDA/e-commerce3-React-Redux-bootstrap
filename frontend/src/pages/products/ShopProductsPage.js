import React from "react";
import SearchCountResult from "../../components/Uitily/SearchCountResult";
import CategoryHeader from "../../components/category/CategoryHeader";
import { Container , Row , Col } from "react-bootstrap";
import SideFilter from "../../components/Uitily/SideFilter";
import CartProductContainer from '../../components/Products/CartProductContainer'
import Pagination from '../../components/Uitily/Pagination'

const ShopProductsPage = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <Container>
        <SearchCountResult title="400 نتجية بحث"/>
        <Row className='d-flex flex-row'>
                    <Col sm="2" xs="2" md="1" className='d-flex'>
                        <SideFilter />
                    </Col>
                    <Col sm="10" xs="10" md="11">
                         <CartProductContainer/>
                    </Col>
                    <Pagination/>
                </Row>
      </Container>
    </div>
  );
};

export default ShopProductsPage;
