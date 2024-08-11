import React from 'react'
import UserSideBar from '../../components/User/UserSideBar'
import { Container , Row , Col } from 'react-bootstrap'
import UserAllOrder from '../../components/User/UserAllOrder'
import Subtitle from '../../components/Uitily/Subtitle'
const UserAllOrdersPage = () => {
    return (
        <Container>
          <Row className="py-3">
            <Col sm="3" xs="2" md="2">
            <UserSideBar/>
            </Col>
            <Col sm="9" xs="10" md="10">
            <Subtitle title="اهلا عبدالله جوده" />
                <UserAllOrder/>
                <UserAllOrder/>
            </Col>
          </Row>
        </Container>
      )
}

export default UserAllOrdersPage
