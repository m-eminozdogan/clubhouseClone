import React from 'react'
import { Link } from 'react-router-dom'
import style from '../style/header.module.css'
function Header() {
    return (
        <div className={style.Header} >
            <Link exact to='/explore'>
                <img alt='#' src='/images/search.png' />
            </Link>
            <div className={style.nav_items}>
                <Link exact to='/friends_invite'>
                    <img alt='#' src='/images/invite.png' />
                </Link>

                <Link exact to='/upcoming'>
                    <img alt='#' src='/images/calendar.png' />
                </Link>

                <Link  exact to='/activity'>
                    <img alt='#' src='/images/noti.png' />
                </Link>

                <Link exact to='/profile'>
                    <img alt='#' src='/images/b1.png' />
                </Link>
            </div>
        </div>
    )
}

export default Header
