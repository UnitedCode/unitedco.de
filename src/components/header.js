import React from 'react'
import { Link } from 'gatsby'

import { header } from './header.module.scss'
import { container } from './container.module.scss'

const Header = ({ siteTitle }) => (
  <div
  className={header}
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div className={container}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    {/* Nave bar for the UC, the idea is that it has a few simple elements, a home page, about page.*/}
    {/*The nav bar css is stored in the layouts css, i dont think that is correct so im leaving this note */}
    <nav className={container}>
      <ul>
         <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/about/">About</Link>
        </li>
        <li>
        <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default Header
