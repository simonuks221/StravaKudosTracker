import { Row, Col } from "react-bootstrap"
import { useEffect, useState, useContext } from "react"
import { AuthContext } from "../App.js"

const LoggedInPage = () => {
    const context = useContext(AuthContext)

    const GetAccesToken = async () => {
        const response = await fetch("https://www.strava.com/api/v3/athlete", {
            headers: {
                "Authorization": "Bearer 0aa10c7c6e2f93896751ce05d4e6b0c04ea01f21"
            }
        })
        const data = await response.json()
        console.log(data)
    }

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
