import React, { useEffect, useState } from 'react'
import style from '../style/roomCard.module.css'
import data from '../data/roomCard.json'
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
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default RoomInfoCard
