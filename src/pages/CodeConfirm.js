import React from 'react'
import style from '../style/phoneConfirm.module.css'
import { Link } from 'react-router-dom'
function CodeConfirm() {
    return (
        <div className={style.phoneConfirmContainer} >
            <div className='text-center'>
                <h1 style={{width:'100%',maxWidth:'200px',marginBottom:'1em'}}>Enter the code</h1>
                <p className='mt-2'>Didn't receive it? <span>Tap to resend.</span></p>
            </div>
        </div>
    )
}

export default CodeConfirm
