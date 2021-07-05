import { Row, Col } from "react-bootstrap"
import { useEffect, useState, useContext } from "react"
import { AuthContext } from "../App.js"

const PreLoginPage = () => {
    const context = useContext(AuthContext)

    useEffect(() => {
        const url = window.location
        const code = new URLSearchParams(url.search).get('code')
        if(code){
            context.changeAuth({...context.auth, code: code})
            context.changeState('loggedIn')
        }
    }, [])
    return (
        <div className = 'pre-login'>
            <Row>
                <h1>Welcome to the kudos tracker</h1>
            </Row>
            <Row>
                <a href = {`https://www.strava.com/oauth/authorize?client_id=${context.auth.clientId}&response_type=code&redirect_uri=http://localhost:3000&approval_prompt=force`}>Login to strava</a>
            </Row>
        </div>
    )
}

export default PreLoginPage
