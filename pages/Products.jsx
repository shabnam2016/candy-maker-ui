import React, { useEffect, useState } from 'react'
import GoBack from '../components/GoBack'
import Products from '../components/Products'
import NotFound from '../components/NotFound'
import Page from '../components/Page'
import ManufacturerDetails from '../components/manufacturerDetails'
import Title from '../components/Title'
import { retrieveProducts } from '../utils/products'

export default ({ location }) => {
  const [manufacturerId, setManufacturerId] = useState('')
  const [manufacturer, setManufacturer] = useState({})
  const [productList, setProductList] = useState([])

  useEffect(() => {
    async function pullData() {
      const { details, products } = await retrieveProducts(location)

      setManufacturerId(details.id)
      setManufacturer(details)
      setProductList(products)
    }

    pullData()
  }, [])

  return (
    <Page>
      <Title />
      <GoBack />
      {
        manufacturerId
          ? (
            <>
              <ManufacturerDetails name={manufacturer.name} country={manufacturer.country} />
              {productList.map(product => (
                <Products
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  yearIntroduced={product.yearIntroduced.substring(0, 4)}
                />
              ))}
            </>
          )
          : (<NotFound message="Sorry, I do not know that Manufacturer" />)

      }
    </Page>
  )
}
