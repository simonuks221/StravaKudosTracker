import { Row, Col } from "react-bootstrap"
import { useEffect, useContext } from "react"
import { AuthContext } from "../App.js"
import { Spinner } from "react-bootstrap"

const AuthorizationPage = () => {
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
                console.log(context, ' ', context.changeState)
                context.changeState('loggedIn')

            }else{
                context.changeState('preLogin')
            }
            window.history.replaceState({}, document.title, '/');
            
        }
        catch(e){
            console.log('error fetching token: ', e)
        }
    }

    useEffect(() => {
        GetAccesToken()
    }, [])

    return (
        <div className = 'page authorization'>
            <Row>
                <Col className = 'text-center'>
                    <p className = 'p-2'>Loading, please wait</p>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
            </Col>
            </Row>
        </div>
    )
}

export default AuthorizationPage
