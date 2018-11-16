import Title from '../components/Title'
import Products from '../components/Products'
import ProductAdd from '../components/ProductAdd'
import PleaseSignIn from '../components/PleaseSignIn'

const productAdd = props => {
  return (
    <PleaseSignIn>
      <Title title="Add Product" />
      <ProductAdd />
    </PleaseSignIn>
  )
}

export default productAdd
