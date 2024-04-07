import React from 'react'

const Status: React.FC = () => {
    console.log('Rendering Status Page');

    let webStatus = 'Available' //if this page is served, the web server is available

    const response = {
        webStatus,
    }

    return <pre>{JSON.stringify(response, null, 2)}</pre>
}

export default Status
