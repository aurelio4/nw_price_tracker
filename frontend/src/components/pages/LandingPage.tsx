import React from 'react'
import { Button } from 'antd';

const LandingPage = (): JSX.Element => {
    return (
        <div className="landing-page">
            <h1>New World Price Tracker</h1>
            <p>Welcome to the New World Price Tracker for the server Belovodye</p>
            <div className="landing-page-buttons">
                <Button type="primary">Register</Button>
                <Button type="primary">Login</Button>
            </div>
        </div>
    );
}

export default LandingPage