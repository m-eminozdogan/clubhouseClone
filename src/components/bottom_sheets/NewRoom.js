import React, { useState } from "react";
import style from '../../style/roomDetail.module.css'
import { AiOutlineFile, AiOutlinePlus } from "react-icons/ai";
import { BsMicMuteFill, BsMicFill } from "react-icons/bs";

export default function NewRoom(props) {
    const [micMuteVisible, setMicMuteVisible] = useState(false)
    const [itemsVisible, setItemsVisible] = useState(true)
    const card = props.cardDetail;
    return (
        <>
            <div className={style.roomDetailContainer}>
                <div className={style.head}>
                    <div className={"d-flex align-items-center"}>
                        <a href=""
                            onClick={() => {
                                props.setSheetVisible(false)

                            }}>
                            <img alt="#" src="/images/arrow.png" className={style.arrow_icon} />
                        </a>
                        <span>Hallway</span>
                    </div>
                    <div>
                        <AiOutlineFile />
                        <img alt="#" src="/images/user-img.jpg" className={style.profile_img} />
                    </div>
                </div>
                <div className={style.roomDetailCard}>
                    <div
                        className="d-flex align-items-center justify-content-between flex-wrap"
                        style={{ padding: '0.5em 1em' }}>
                        {card.members.map((item,index) => (
                            <div key={index} className={style.memberContainer}>
                                {micMuteVisible ? (
                                    <div className={style.audio_icon}>
                                        <BsMicMuteFill />
                                    </div>
                                ) : ('')}
                                <img alt="#" src="/images/user-img.jpg" />
                                <p>
                                    <span>*</span>
                                    {item.first_name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={style.footer}>
                    <button
                        onClick={() => { props.setSheetVisible(false) }}>
                        <img alt="#" src="/images/hand-peace.png" />
                        Leave quietly
                    </button>
                    <div>
                        <button>
                            <AiOutlinePlus />
                        </button>
                        <button>
                            <img alt="#" src="/images/stopHandIcon.png" />
                        </button>
                        <button onClick={() => setMicMuteVisible(!micMuteVisible)}>
                            {micMuteVisible ? <BsMicMuteFill /> : <BsMicFill />}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}