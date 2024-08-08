import React from 'react'
import { Container , Row } from 'react-bootstrap'
import CategoryCart from './CategoryCart'
import clothe from "../../assets/images/clothe.png";
import cat2 from "../../assets/images/cat2.png";
import labtop from "../../assets/images/labtop.png";
import sale from "../../assets/images/sale.png";
import pic from "../../assets/images/pic.png";
const CategoryContainer = () => {
  return (
    <Container style={{marginBottom:"3rem"}}>
      <Row className='my-2 d-flex justify-content-between'>
      <CategoryCart title="تصنيفات" img={clothe}  background="black"/>
      <CategoryCart title="تصنيفات" img={cat2}  background="red"/>
      <CategoryCart title="تصنيفات" img={sale}  background="blue"/>
      <CategoryCart title="تصنيفات" img={pic}  background="gray"/>
      <CategoryCart title="تصنيفات" img={labtop}  background="black"/>
      <CategoryCart title="تصنيفات" img={labtop}  background="black"/>        
      <CategoryCart title="تصنيفات" img={clothe}  background="black"/>
      <CategoryCart title="تصنيفات" img={cat2}  background="red"/>
      <CategoryCart title="تصنيفات" img={sale}  background="blue"/>
      <CategoryCart title="تصنيفات" img={pic}  background="gray"/>
      <CategoryCart title="تصنيفات" img={labtop}  background="black"/>
      <CategoryCart title="تصنيفات" img={labtop}  background="black"/>        
      </Row>
    </Container>
  )
}

export default CategoryContainer
