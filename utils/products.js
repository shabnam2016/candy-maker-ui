import fetchProductsForManufacturers from '../actions/products'

export const getManufacturerIdFromUrl = location => (location && location.pathname
  ? location.pathname.split('/manufacturers/').pop()
  : '')

export const retrieveProducts = async (location) => {
  const manufacturerId = getManufacturerIdFromUrl(location)

  if (!manufacturerId) return { details: {}, manufacturers: [] }
  const { id, name, country, products } = await fetchProductsForManufacturers(manufacturerId)

  if (!id || !name || !country || !products) return { details: {}, products: [] }

  return { products, details: { id, name, country } }
}
