import React from 'react'
import exploreStyle from '../style/explore.module.css'
import style from '../style/profile.module.css'
import { Link } from 'react-router-dom'
import { BsAt, BsPlus, BsUpload } from 'react-icons/bs'
import { AiOutlineInstagram, AiOutlineSetting, AiOutlineTwitter } from 'react-icons/ai'

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
                            <BsAt />
                            <BsUpload />
                            <AiOutlineSetting />
                        </div>
                    </div>
                </div>
                <img alt='#' src='/images/user-img.jpg' className={style.profile_image} />
                <h4>Emin Özdoğan</h4>
                <p>@m.eminozdogan</p>
                <div className={style.follow}>
                    <p>
                        <span>0</span> followers
                    </p>
                    <p>
                        <span>12</span> following
                    </p>
                </div>
                <button>Add a bio</button>
                <div className="mb-4">
                    <button className='mb-0'>
                        <AiOutlineTwitter /> Add Twitter
                    </button>
                    <button className='mb-0'>
                        <AiOutlineInstagram /> Add Instagram
                    </button>
                </div>
                <div className={style.nominated}>
                    <img alt='#' src='/images/user-img.jpg' />
                    <div>
                        <p>Joined 12-Feb-2020</p>
                        <p>Nominated by <span>Clark Kent</span></p>
                    </div>
                </div>
                <p>Member of</p>
                <button className={style.addMemberBtn}>
                    <BsPlus />
                </button>
            </div>
        </>

    )
}
