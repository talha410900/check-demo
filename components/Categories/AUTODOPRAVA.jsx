import React from 'react'

import ProductSection from '../ProductSection'

function AUTODOPRAVA({products, categories, title }) {

  return (
    <div>

      <ProductSection products={products} dark={true} title={title} categories={categories} />

    </div>
  )
}

export default AUTODOPRAVA
