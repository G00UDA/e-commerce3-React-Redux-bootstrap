import React from 'react'
import Subtitle from '../Uitily/Subtitle'
import { Row } from 'react-bootstrap'
import UserAllOrderItem from './UserAllOrderItem'

const UserAllOrder = () => {
  return (
    <div>
      <Row className='justify-content-between'> 
            <UserAllOrderItem/>
      </Row>
    </div>
  )
}

export default UserAllOrder
