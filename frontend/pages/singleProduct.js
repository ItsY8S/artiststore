import Title from '../components/Title'
import Products from '../components/Products'
import SingleProduct from '../components/SingleProduct'

const singleProduct = props => {
  return (
    <div>
      <Title title="Product" />
      <SingleProduct id={props.query.id} />
    </div>
  )
}

export default singleProduct
