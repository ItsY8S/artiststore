import Title from '../components/Title'
import PleaseSignIn from '../components/PleaseSignIn'
import Permissions from '../components/Permissions'

const permissions = props => {
  return (
    <PleaseSignIn>
      <Title title="Permissions" />
      <Permissions />
    </PleaseSignIn>
  )
}

export default permissions
