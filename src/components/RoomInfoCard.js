import React, { useEffect, useState } from 'react'
import style from '../style/roomCard.module.css'
import data from '../data/roomCard.json'
import {BsChatDots,BsChatDotsFill,BsFillPersonFill, BsPersonFill}  from 'react-icons/bs'
function RoomInfoCard(props) {
    return (
        <div>
            {
                data.map((item,index) => (
                    <div key={index}>
                        <div>
                            <div className={style.roomCardContainer}>
                                <h6>{item.title}</h6>
                                <h2>{item.sub_title}</h2>
                                <div className={style.roomMembers}>
                                    <div>
                                        <img alt='#' src='/images/user-img.jpg'/>
                                        <img alt='#' src='/images/user-img2.jpg'/>

                                    </div>
                                    <div>
                                        {item.members.map( (person)=>(
                                            <p>
                                                {person.first_name} {person.last_name} <BsChatDots/>
                                            </p>
                                        ))}
                                        <p className='d-flex align-items-center'>
                                            <span className='mr-2'>1.8&nbsp;</span>
                                            <BsFillPersonFill/>
                                            <span className='mx-2'></span>{" "}
                                            <span className='mr-2'>5&nbsp;</span><BsChatDotsFill/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default RoomInfoCard
