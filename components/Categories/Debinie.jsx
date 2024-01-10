import React from 'react'

import ProductSection from '../ProductSection'

function Debinie({ categories, products, title }) {

  return (
    <div>

      <ProductSection dark={true} products={products} title={title} categories={categories} />

    </div>
  )
}

export default Debinie
