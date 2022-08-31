import React from 'react'
import pdf from '../assets/images/Resume-David-Dwight-2.pdf'
// import {FaBars, FaTimes} from 'react-icons/fa'
const NavBar = () => {
  return (
    <div>
    <header>
        <h1>David Dwight</h1>
        <nav>
            <ul class="links">
                <li>
                <a href={pdf} target="_blank">Resume</a>
                </li>
                <li>
                    <a href="#examples">Projects</a>
                </li>
                <li>
                    <a href="#about">About Me</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    </header>

    <br id="top-spacer"></br>
    
    </div>
  )
}

export default NavBar