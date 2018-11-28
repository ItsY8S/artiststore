import styled from 'styled-components'

const ProductAddForm = styled.div`
  #details-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
  }

  .image {
    max-width: 100%;
    height: auto;
  }

  .details {
    color: blue;
    text-transform: uppercase;
  }

  .title-and-price {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .description {
    color: rgba(39, 39, 39, 0.75);
    text-transform: uppercase;
    font-size: 16px;
    flex-grow: 1;
    cursor: pointer;
    width: 100%;
    height: 250px;
    resize: none;
    font-size: 16px;
    letter-spacing: 0px;
    border: none;
    outline: none;
  }
`

export default ProductAddForm
