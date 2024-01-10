import React from 'react'

import ProductSection from '../ProductSection'

function Mala({products, categories, title }) {

  return (
    <div>

      <ProductSection products={products} dark={false} title={title} categories={categories} cta={true} />

    </div>
  )
}

export default Mala
