import React from 'react'
import style from '../style/dailyInfoCard.module.css'
import data from '../data/dailyCard.json'
function DailyInfoCard() {
    console.log(data);

    return (
        <div className={style.dailyInfoCard}>
            {
                data.map((item,index)=>(

                    <div key={index}>
                        <span >{item.time}</span>
                        <div>
                            <span>{item.title}</span>
                            <p>{item.description}</p>
                        </div>
                    </div>
                    
                ))
            }
        </div>
    )
}

export default DailyInfoCard
