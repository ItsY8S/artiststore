import styled from 'styled-components'

const OrderStyles = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  .fw-600 {
    font-weight: 600;
  }

  .order-details {
    /* background: yellow; */
    margin-bottom: 5rem;
  }
  .order-details p {
    display: grid;
    grid-template-columns: minmax(150px, 1fr) 5fr;
    margin: 0.5rem;
    span:first-child {
      font-weight: 600;
      text-align: left;
    }
  }
  .order-item {
    display: grid;
    grid-template-columns: minmax(100px, 250px) 1fr;
    align-items: center;
    grid-gap: 2rem;
    margin: 2rem 0;
    padding-bottom: 2rem;
    img {
      width: 100%;
      object-fit: contain;
    }
    p {
      margin-bottom: 0.5rem;
    }
    h5 {
      margin-bottom: 1rem;
    }
  }
`
export default OrderStyles
