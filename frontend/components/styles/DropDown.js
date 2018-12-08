import styled, { keyframes } from 'styled-components'

const DropDown = styled.div`
  position: absolute;
  width: 100%;
  z-index: 2;

  .addBorder {
    border-left: 2px solid black;
    border-right: 2px solid black;
    border-bottom: 2px solid black;
  }
`

const DropDownItem = styled.div`
  background-color: ${props => ('purple' ? '#fff' : 'white')};
  padding: 1.25rem 0rem;
  transition: all 0.2s;
  ${props =>
    props.highlighted
      ? 'padding-left: 2rem; cursor: pointer; transform: scale(1.05); border: 2px solid; border-image: linear-gradient(to top right, #704ce5 0%, #4c66e6 50%, #4cb3e6 100%); border-image-slice: 1;'
      : null};
  display: grid;
  grid-template-columns: 50px 1fr;
  align-items: center;

  /* &:hover {
    /* background-color: #eee; */
  /* padding-left: 2rem;
    cursor: pointer;
    transform: scale(1.05);
    border: 2px solid;
    border-image: linear-gradient(
      to top right,
      #704ce5 0%,
      #4c66e6 50%,
      #4cb3e6 100%
    );
    border-image-slice: 1;
  } */

  p {
    margin-left: 10px;
    margin-bottom: 0px;
  }
`

const SearchStyles = styled.div`
  position: relative;
  input {
    width: 100%;
    padding: 10px;
    border: 2px solid black;
    font-size: 2rem;
    margin-bottom: 0px;
    &.loading {
      border-radius: 25px 25px 0px 0px !important;
    }
    &:focus {
      border: 2px solid #765ee9;
      border-radius: 4px 4px 0px 0px;
    }
  }
`

export { DropDown, DropDownItem, SearchStyles }
