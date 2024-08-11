import React from 'react'
import { Row,Col } from 'react-bootstrap'
import avatar from '../../assets/images/avatar.png'
import Subtitle from '../Uitily/Subtitle'
const AdminAddBrand = () => {
    return (
        <div>
            <Row className="justify-content-start ">
                <Subtitle title="اضف ماركه جديده" />
                <Col sm="8">
                    <div className="text-form pb-2">صوره الماركه</div>
                    <img src={avatar} alt="" height="100px" width="120px" />
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم الماركه"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
                </Col>
            </Row>
        </div>
    )
}

export default AdminAddBrand