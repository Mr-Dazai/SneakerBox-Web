import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const PageHero = ({ title }) => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>
          <Link to='/'>Home</Link>/{title}
        </h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-blue);
  width: 100%;
  min-height: 10vh;
  display: flex;
  align-items: center;

  color: var(--clr-black);
  a {
    color: var(--clr-vivid-red);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-red-light);
  }
`

export default PageHero
