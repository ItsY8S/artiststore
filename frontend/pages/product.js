import Title from '../components/Title'
import Products from '../components/Products'
import ProductUpdate from '../components/ProductUpdate'

const productUpdate = props => {
  return (
    <div>
      <Title title="Update Product" />
      <ProductUpdate id={props.query.id} />
    </div>
  )
}

export default productUpdate
