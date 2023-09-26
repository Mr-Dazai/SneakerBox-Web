import React from 'react'
import logo from '../../assets/logo3.svg'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../../context/products_context'
import { FaTimes } from 'react-icons/fa'
import { links } from '../../utils/constants'
import styled from 'styled-components'
import CartButtons from '../CartButtons'
import { useUserContext } from '../../context/user_context'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext()

  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div className='sidebar-header'>
          <img src={logo} className='logo' alt='log' />
          <button className='close-btn' type='button' onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            )
          })}
          <li>
            <Link to='/checkout' onClick={closeSidebar}>
              Checkout
            </Link>
          </li>
        </ul>
        <CartButtons />
      </aside>
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0rem;
    padding-right: 25px;
    height: 92px;
  }
  .close-btn {
    font-size: 1.8rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 1rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .logo {
    justify-self: left;
    width: 250px;
  }
  .links {
    margin-bottom: 2rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1.5rem;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: var(--clr-black);
    transition: var(--transition);
    letter-spacing: var(--spacing);
  }

  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-yellow);
    color: var(--clr-white);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-blue);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`

export default Sidebar
