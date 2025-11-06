import React from 'react'
import HeaderShop from './HeaderShop'
import ContentShop from './ContentShop'
import Sidebar from './SidebarShop'

const Shop = () => {
  return (
    <div>
    <HeaderShop/>
    <ContentShop/>
    <div className='flex justify-end'> 
      <Sidebar/>
      </div>
    </div>
  )
}

export default Shop