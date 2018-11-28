import ResetPassword from '../components/ResetPassword'

const resetPassword = props => {
  return (
    <>
      <ResetPassword resetToken={props.query.resetToken} />
      <p>Reset Token: {props.query.resetToken}</p>
    </>
  )
}

export default resetPassword
