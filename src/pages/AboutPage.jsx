import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/SneakerBox-logos_black.png'

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center yellow'>
        <img src={aboutImg} alt='' />
        <article className='padding'>
          <div className='title'>
            <h2>Our Story</h2>
            <div className='underline'></div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              adipisci corporis labore excepturi eum fuga mollitia eligendi
              nesciunt amet eaque earum velit dicta, provident quaerat nobis,
              animi quam aspernatur blanditiis similique natus dolorem odit
              dignissimos! Quod cum animi perspiciatis vitae accusamus fuga
              officiis, modi praesentium? Iste pariatur sit et quas!
            </p>
          </div>
        </article>
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-black);
    font-size: 1.1rem;
    font-weight: 500;
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  .padding {
    padding-top: 0px;
  }
  @media (min-width: 992px) {
    .padding {
      padding-top: 100px;
    }
  }
`
export default AboutPage
