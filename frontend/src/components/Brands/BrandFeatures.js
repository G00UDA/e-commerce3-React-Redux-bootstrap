import React from 'react'
import { Container , Row } from 'react-bootstrap'
import Subtitle from '../Uitily/Subtitle'
import BrandCard from './BrandCard'
import brand1 from '../../assets/images/brand1.png'
import brand2 from '../../assets/images/brand2.png'
import brand3 from '../../assets/images/brand3.png'
import { useNavigate } from 'react-router-dom'

const BrandFeatures = ({title , btn_title }) => {

  const navgate = useNavigate();

  const handle_click = () => {
    navgate('/allbrands')
  }

  return (
    <Container>
      <Subtitle title={title} btn_title={btn_title} handle_click={handle_click}/>
      <Row className='my-1 d-flex justify-content-between'>
            <BrandCard img={brand1}/>
            <BrandCard img={brand2}/>
            <BrandCard img={brand3}/>
            <BrandCard img={brand1}/>
            <BrandCard img={brand2}/>
      </Row>
    </Container>
  )
}

export default BrandFeatures
