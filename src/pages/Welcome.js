import React from 'react'
import style from '../style/welcome.module.css'
import {Link} from 'react-router-dom'
function Welcome() {
    return (
        <div className={style.WelcomeContainer}>
            <h1>Welcome!</h1>
            <div className={style.WelcomeInfo}>
                <p>
                    I'm working hard on this clone. Hope it will be a nice one.
                    Let's see whats happening.
                </p>
                <p>
                    Nowadays I'm really spending much time on clone stuff.
                    Maybe you can give me a feedback.
                </p>
                <p>
                    m.eminozdogan author of what u see rn.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur elementum hendrerit feugiat. Morbi iaculis nulla varius mi varius efficitur.
                    Aliquam dictum nunc ac efficitur ornare. Vivamus tincidunt iaculis ex.
                    Proin eget ultricies felis. Etiam tempus nibh quam, non lobortis sapien sollicitudin id.
                    In facilisis dictum quam. Nullam id libero nisl. Nam faucibus,
                    felis a pellentesque convallis, eros sem viverra neque, id porttitor
                    eros tellus sed turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras placerat, est ut lacinia gravida, enim nibh laoreet sapien, a varius augue magna
                    at nisi. Morbi iaculis id mi ut vestibulum.
                </p>
            </div>
            <div className={style.actionBtn}>
                <Link
                    to='/get_username'
                    className='primaryBtn d-flex align-items-center mb-3'
                >
                    Get yout username{''}
                </Link>
                <Link to='#'>
                Have an invite text? Sign in
                </Link>
            </div>

        </div>

    )
}

export default Welcome
