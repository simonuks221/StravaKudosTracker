import { Row, Col } from "react-bootstrap"

const PreLoginPage = () => {
    const LoginButtonPressed = () => {
        
    }

    return (
        <div className = 'pre-login'>
            <Row>
                <h1>Welcome to the kudos tracker</h1>
            </Row>
            <Row>
                <button onClick = {LoginButtonPressed}>Login to strava</button>
            </Row>
        </div>
    )
}

export default PreLoginPage
