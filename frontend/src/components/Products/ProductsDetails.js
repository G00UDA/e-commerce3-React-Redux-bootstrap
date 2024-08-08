import React from "react";
import { Col, Row } from "react-bootstrap";
import ProductGallery from "./Productgallary";
import ProductText from "./ProductText";

const ProductsDetails = () => {
  return (
    <div>
      <Row className="py-3">
        <Col lg='4'>
            <ProductGallery/>
        </Col>
        <Col lg='4'>
            <ProductText/>
        </Col>
      </Row>
    </div>
  );
};

export default ProductsDetails;
