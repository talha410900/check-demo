import React from 'react'

import ProductSection from '../ProductSection'

function Zemne({products, categories, title }) {

  return (
    <div>

      <ProductSection products={products} dark={false} title={title} categories={categories} />

    </div>
  )
}

export default Zemne
