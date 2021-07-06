import { Row, Col } from "react-bootstrap"
import { useEffect, useState, useContext } from "react"
import { AuthContext } from "../App.js"

import {ReactComponent as GitHubLogo} from '../github.svg'
import {ReactComponent as LinkedInLogo} from '../linkedin.svg'

const PreLoginPage = () => {
    const context = useContext(AuthContext)

    useEffect(() => {
        const url = window.location
        const code = new URLSearchParams(url.search).get('code')
        if(code){
            context.changeAuth({...context.auth, code: code})
            context.changeState('authorization')
        }
    }, [])
    return (
        <div>
            <div className = 'page pre-login'>
                <Row>
                    <Col>
                        <h1 className = 'text-center'>Kudos tracker</h1>
                        <p className = 'text-center'>An app to show who gives you Kudos the most</p>
                    </Col>
                </Row>
                <Row className = 'pt-5'>
                    <Col className = 'text-center'>
                        <a className = 'text-center link-button' href = {`https://www.strava.com/oauth/authorize?client_id=${context.auth.clientId}&response_type=code&redirect_uri=http://localhost:3000&approval_prompt=force&scope=activity:read`}>Login to strava</a>
                        <div className = 'pt-5'>
                            <p>Made by Simonas Riauka</p>
                            <a className = 'about-links' href = 'https://github.com/simonuks221'><GitHubLogo/></a>
                            <a className = 'about-links' href = 'https://linkedin.com/in/simonas-riauka-851a7017b'><LinkedInLogo/></a>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default PreLoginPage
