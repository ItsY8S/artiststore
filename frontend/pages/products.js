import Title from '../components/Title'
import Products from '../components/Products'

const products = props => {
  return (
    <div>
      <Title title="Products" />
      <Products page={parseFloat(props.query.page) || 1} />
    </div>
  )
}

export default products
