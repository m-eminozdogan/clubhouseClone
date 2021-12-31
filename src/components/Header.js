import React from 'react'
import {Link} from 'react-router-dom'
import style from '../style/header.module.css'
function Header() {
    return (
        <div className={style.Header} >
            <Link exact to='/explore'>
                <img alt='#' src='/images/search.png' />
            </Link>
        </div>
    )
}

export default Header
