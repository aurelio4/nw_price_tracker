import React from 'react'
import { Button } from 'antd';

import { Link } from 'react-router-dom'

const LandingPage = (): JSX.Element => {
    return (
        <div className="landing-page">
            <h1>New World Price Tracker</h1>
            <p>Welcome to the New World Price Tracker for the server Belovodye</p>
            <div className="landing-page-buttons">
                <Button type="primary"><Link to='/register'>Register</Link></Button>
                <Button type="primary"><Link to='/login'>Login</Link></Button>
            </div>
        </div>
    );
}

export default LandingPage