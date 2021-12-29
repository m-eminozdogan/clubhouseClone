import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PhoneInput from 'react-phone-number-input'
import style from '../style/phoneConfirm.module.css'

function PhoneConfirmation() {
    const [value, setValue] = useState()
    return (
        <div className={style.phoneConfirmContainer}>
            <Link to='/' className={style.backBtn} >
                <img alt='#' src='/images/arrow.png' />
            </Link>
            <h1>Enter your phone number</h1>
            <PhoneInput international defaultCountry='TR' value={value} onChange={setValue} />
            <p>By entering your number, you're agreeing to our {' '}
                <span>Terms of service and Privacy Policy.</span>
                Thanks!
            </p>
            <Link to='/code_confirm' className='primaryBtn d-flex align-items-center' >
                Next <img alt='#' src='/images/nextArrowIcon.svg' className='ml-1' />
            </Link>
        </div>
    )
}

export default PhoneConfirmation
