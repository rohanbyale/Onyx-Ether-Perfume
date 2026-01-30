import React from 'react'
import CollectionHero from '../components/CollectionHero'
import CollectionGrid from '../components/CollectionGrid'
import ArchitecturePage from '../components/Architecture'
import MaterialOrigins from '../components/Material'
import New from '../components/New'
import KProduct from '../components/KProduct'

const Collection = () => {
  return (
    <div>
        <CollectionHero />
        <CollectionGrid />
        <New />
        <KProduct />
        <ArchitecturePage />
      <MaterialOrigins />
    </div>
  )
}

export default Collection