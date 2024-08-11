import React from 'react'
import Subtitle from '../Uitily/Subtitle'
import AdminAllOrdersItem from './AdminAllOrdersItem'

const Ordercard = () => {
  return (
    <div>
      <Subtitle title="اداره كل المنتجات" />
      <AdminAllOrdersItem/>
      <AdminAllOrdersItem/>
      <AdminAllOrdersItem/>
    </div>
  )
}

export default Ordercard
