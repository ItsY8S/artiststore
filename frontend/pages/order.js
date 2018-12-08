import Title from '../components/Title'
import PleaseSignIn from '../components/PleaseSignIn'
import Order from '../components/Order'

const singleOrder = props => {
  return (
    <PleaseSignIn>
      <Title title="Your Order" />
      <Order id={props.query.id} />
    </PleaseSignIn>
  )
}

export default singleOrder
