import React from "react";
import { Row, Container } from "react-bootstrap";
import Subtitle from "../Uitily/Subtitle";
import BrandCard from "./BrandCard";

import brand1 from '../../assets/images/brand1.png'
import brand2 from '../../assets/images/brand2.png'
import brand3 from '../../assets/images/brand3.png'

const BrandsContainer = () => {
  return (
    <Container style={{ marginBottom: "3rem" }}>
      <Subtitle title="كل التصنيفات" />
      <Row className="my-2 d-flex justify-content-between">
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
      </Row>
    </Container>
  );
};

export default BrandsContainer;
