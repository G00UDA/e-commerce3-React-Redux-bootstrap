import React from "react";
import { Container } from "react-bootstrap";
import Subtitle from "../../components/Uitily/Subtitle";
import CategoryContainer from "../../components/category/CategoryContainer";
import Pagination from "../../components/Uitily/Pagination";
const AllCategorys = () => {
  return (
    <Container style={{ minHeight: "680px" }}>
      <Subtitle title="كل التصنيفات" />
      <CategoryContainer />
      <Pagination/>
    </Container>
  );
};

export default AllCategorys;
