import React from "react";
import AdminAllProductsCard from "./AdminAllProductCard";
import Subtitle from "../Uitily/Subtitle";
import { Row } from "react-bootstrap";

const AdminAllProduct = () => {
  return (
    <div>
      <Subtitle title="ادارة جميع المنتجات" />
      <Row className='justify-content-start'>
      <AdminAllProductsCard />
      <AdminAllProductsCard />
      <AdminAllProductsCard />
      <AdminAllProductsCard />
      <AdminAllProductsCard />
      <AdminAllProductsCard />
      </Row>
    </div>
  );
};

export default AdminAllProduct;
