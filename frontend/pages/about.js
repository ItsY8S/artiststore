import Title from '../components/Title'

// Query the database for a user image here

class about extends React.Component {
  render() {
    return (
      <>
        <Title title="About" />
        <h3 className="fw-500">Details</h3>
        <p>
          Wow. Some cool information about the store. Wow. Even more. Wow. Some
          cool information about the store. Wow. Even more. Wow. Some cool
          information about the store. Wow. Even more. Wow. Some cool
          information about the store. Wow. Even more.
        </p>

        <label htmlFor="userImage">
          <input type="file" name="userImage" id="userImage" />
        </label>
      </>
    )
  }
}

export default about
