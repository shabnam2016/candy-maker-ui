import React, { useEffect, useState } from 'react'
import Page from '../components/Page'
import Search from '../components/Search'
import Manufacturer from '../components/Manufacturer'
import Title from '../components/Title'
import { filterManufacturers, retrieveManufacturers } from '../utils/manufacturers'

export default () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [manufacturerList, setManufacturerList] = useState([])
  const [filteredManufacturerList, setFilteredManufacturerList] = useState([])

  useEffect(() => {
    async function pullData() {
      const manufacturers = await retrieveManufacturers()

      setManufacturerList(manufacturers)
      setFilteredManufacturerList(manufacturers)
    }

    pullData()
  }, [])
  useEffect(() => {
    const filtered = filterManufacturers(manufacturerList, searchTerm)

    setFilteredManufacturerList(filtered)
  }, [searchTerm])

  return (
    <Page>
      <Title />
      <Search term={searchTerm} setter={setSearchTerm} />
      {
        // eslint-disable-next-line max-len
        filteredManufacturerList.map(manufacturer => (<Manufacturer key={manufacturer.id} id={manufacturer.id} name={manufacturer.name} country={manufacturer.country} />))
      }
    </Page>
  )
}
