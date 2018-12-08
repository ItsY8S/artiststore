import React from 'react'
import PropTypes from 'prop-types'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import styled from 'styled-components'

const AnimationStyles = styled.span`
  position: relative;
  top: -0.25rem;

  .count {
    display: block;
    position: relative;
    transition: all 0.4s;
    backface-visibility: hidden;
  }

  .count-enter {
    transform: scale(2) rotateX(0.5turn);
  }

  .count-enter-active {
    transform: rotateX(0);
    background-color: #cc4ce6;
  }

  .count-exit {
    top: 0;
    position: absolute;
    transform: rotateX(0);
    background-color: #4c6de6;
  }

  .count-exit-active {
    transform: scale(2) rotateX(0.5turn);
  }
`

const Dot = styled.div`
  background-color: #704ce5;
  display: block;
  color: white;
  border-radius: 50%;
  padding: 0.5rem;
  line-height: 1.4rem;
  min-width: 1.4rem;
  margin-left: 1rem;
  vertical-align: middle;
  font-size: 1.4rem;
  font-weight: 700;
  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;
`

const CartCount = ({ count }) => (
  <AnimationStyles>
    <TransitionGroup>
      <CSSTransition
        unmountOnExit
        className="count"
        classNames="count"
        key={count}
        timeout={{ enter: 400, exit: 400 }}
      >
        <Dot>{count}</Dot>
      </CSSTransition>
    </TransitionGroup>
  </AnimationStyles>
)

export default CartCount
