import styled from 'styled-components'

const CartStyles = styled.aside`
  padding: 25px;
  position: relative;
  background: white;
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  width: 40%;
  min-width: 400px;
  bottom: 0;
  transform: translateX(100%);
  transition: all 0.3s;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  z-index: 5;
  display: grid;
  grid-template-rows: auto 1fr auto;
  ${props => props.open && `transform: translateX(0);`};

  header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 50px;
  }

  .cart-title {
    font-weight: 500;
    margin-bottom: 0px;
  }

  .cart-close {
    font-size: 42px;
    margin: 0px;
    border: none;
    padding: 0px;
  }

  .cart-item {
    width: auto;
    display: grid;
    grid-template-columns: 75px 1fr 25px;
    margin-bottom: 25px;
  }

  .cart-item-unavailable {
    width: auto;
    display: grid;
    grid-template-columns: 1fr 25px;
    margin-bottom: 25px;
  }

  .cart-item-details {
    margin-left: 15px;
  }

  .cart-item img {
    width: 75px;
    height: 75px;
    object-fit: contain;
  }

  button.checkout {
    background: linear-gradient(
      to top right,
      #704ce5 0%,
      #4c66e6 50%,
      #4cb3e6 100%
    );
    border-image-slice: 1;
    border-radius: 10px;
    border-image-outset: 0px;
    color: white;
    font-size: 1.6rem;
    border: none;
  }

  footer {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  /* .cart {
    position: absolute;
    left: 0;
    background: white;
    width: 250px;
    height: 100vh;
    color: black;
    box-sizing: border-box;
    padding: 0px 25px;
    text-align: center;
    transform: translateX(-150%);
  } */
`

export default CartStyles
