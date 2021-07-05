import { Row, Col } from "react-bootstrap"
import { useEffect, useState, useContext } from "react"
import { AuthContext } from "../App.js"

const LoggedInPage = () => {
    const context = useContext(AuthContext)

    const GetAccesToken = async () => {
        try{
            const response = await fetch(`https://www.strava.com/api/v3/oauth/token?client_id=${context.auth.clientId}&client_secret=${context.auth.clientSecret}&code=${context.auth.code}&grant_type=authorization_code`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if(response.ok){
                const data = await response.json()
                context.changeAuth({...context.auth, data})
            }else{
                context.changeState('preLogin')
                window.history.replaceState({}, document.title, '/');
            }
            
        }
        catch(e){
            console.log('error fetching token: ', e)
        }
    }

    useEffect(() => {
        GetAccesToken()
    }, [])

    return (
        <div className = 'logged-in'>
            <Row>
                <h1>Welcome to the kudos tracker</h1>
            </Row>
            <Row>
                <button onClick = {GetAccesToken}>Get acces token</button>
            </Row>
        </div>
    )
}

export default LoggedInPage
