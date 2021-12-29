import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from '../style/phoneConfirm.module.css'
function PhoneConfirmation() {
    const [value, setValue] = useState()
    return (
        <div className={style.phoneConfirmContainer}>
            <h1>Enter your phone number</h1>
            <p>By entering your number, you're agreeing to our {' '}
            <span>Terms of service and Privacy Policy.</span>
            Thanks!
            </p>
        </div>
    )
}

export default PhoneConfirmation
