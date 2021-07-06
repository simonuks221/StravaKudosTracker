import { Row, Col, Container } from "react-bootstrap"
import { useContext, useState } from "react"
import { AuthContext } from "../App.js"
import KudosChart from "./KudosChart.js"

const LoggedInPage = () => {
    const context = useContext(AuthContext)
    const [kudosData, changeKudosData] = useState([])

    const GetAllAthleteActivities = async () => {
        try{
            const response = await fetch('https://www.strava.com/api/v3/athlete/activities', {
                method: 'GET',  
                headers: {
                    "Authorization": `Bearer ${context.auth.data.access_token}`
                }
            })
            if(response.ok){
                const data = await response.json()
                return data
            }else{
                console.log('Couldnt get all activities: ', response)
            }
        }
        catch(e){
            console.log('Error encountered while geeting all activities: ', e)
        }
    }

    const GetAllActivityKudoers = async(activityId) => {
        try{
            const response = await fetch(`https://www.strava.com/api/v3/activities/${activityId}/kudos`, {
                method: 'GET',  
                headers: {
                    "Authorization": `Bearer ${context.auth.data.access_token}`
                }})
            if(response.ok){
                const data = await response.json()
            }else{
                console.log('Couldnt get kudoers of the activity: ', response)
            }
        }
        catch(e){
            console.log('Error encountered while geeting all kudoers: ', e)
        }
    }

    const KudoerExists = (topKudoers, kudoer) => { //Searches if kudoer is already in the list, if so returns its index
        for(let i = 0; i < topKudoers.length; i++){
            if(topKudoers.firstname === kudoer.firstname){
                return i;
            }
        }
        return -1;
    }

    const GetTopKudoers = async () => {
        const topKudoers = []
        const allActivityData = await GetAllAthleteActivities()
        if(allActivityData){
            console.log('w')
            allActivityData.forEach(async activity => {
                const activityKudoers = await GetAllActivityKudoers(activity.id)
                if(activityKudoers){
                    console.log('here')
                    for(let i = 0; i < activityKudoers.length; i++){
                        const index = KudoerExists(topKudoers, activityKudoers[i])
                        if(index !== -1){
                            console.log('a', index)
                            topKudoers[index] = {...topKudoers[index], kudos: topKudoers[index].kudos + 1}
                        }
                        else{ //Kudoer does not exist
                            console.log('does not exist')
                            topKudoers.push({name: activityKudoers[i].firstname, surname: activityKudoers[i].lastname, kudos: 1})
                        }
                        
                    }
                }
            })
        }
        changeKudosData(topKudoers)
        console.log(topKudoers)
    }

    return (
        <div className = 'page logged-in'>
            <Container fluid>
                <Row>
                    <Col md={10}>
                        <KudosChart kudosData = {kudosData}/>
                    </Col>
                    <Col md={2}>
                        <button className = 'link-button' onClick = {GetTopKudoers}>Get activities</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LoggedInPage
