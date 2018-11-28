import Title from '../components/Title'
import Products from '../components/Products'
import ProductUpdate from '../components/ProductUpdate'

const productUpdate = props => {
  return (
    <>
      <Title title="Update Product" />
      <ProductUpdate id={props.query.id} />
    </>
  )
}

export default productUpdate
