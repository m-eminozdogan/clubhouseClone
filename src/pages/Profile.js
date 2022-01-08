import React from 'react'
import exploreStyle from '../style/explore.module.css'
import style from '../style/profile.module.css'
import {Link} from 'react-router-dom'
import {BsAt, BsUpload} from 'react-icons/bs'
import {AiOutlineSetting} from 'react-icons/ai'

export default function Profile() {
    return (
        <>
            <div className={style.profileContainer}>
                <div className={exploreStyle.header}>
                    <div className={`${exploreStyle.head} text-right mb-0`}>
                        <Link to='/home'>
                            <img alt='#' src='/images/arrow.png' className={exploreStyle.arrow_icon} />
                        </Link>
                        <div className={style.actionBtn}>
                            <BsAt/>
                            <BsUpload/>
                            <AiOutlineSetting/>
                        </div>
                    </div>
                </div>
                <img alt='#' src='/images/user-img.jpg' className={style.profile_image} />
                <h4>Emin Özdoğan</h4>
                <p>@m.eminozdogan</p>
            </div>
        </>

    )
}
