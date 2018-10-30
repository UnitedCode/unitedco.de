import React from 'react'
import { Link } from 'gatsby'

import { header } from './header.module.scss'

const Header = ({ siteTitle }) => (
  <div className={header}>     
    <nav>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about/">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects/">
              Project
            </Link>
          </li>
        </ul>
      </nav>
    {/* Nave bar for the UC, the idea is that it has a few simple elements, a home page, about page.*/}
    {/*The nav bar css is stored in the layouts css, i dont think that is correct so im leaving this note */}
    
  </div>
)

export default Header
