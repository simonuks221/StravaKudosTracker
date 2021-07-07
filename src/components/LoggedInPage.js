import { Row, Col, Container } from "react-bootstrap"
import { useContext, useState } from "react"
import { AuthContext } from "../App.js"
import KudosChart from "./KudosChart.js"

const LoggedInPage = () => {
    const context = useContext(AuthContext)
    const [kudosData, changeKudosData] = useState()
    const [activityCount, changeActivityCount] = useState(0)
    const [dataQueried, changeDataQueried] = useState(false)

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
                if(response.status === 429){
                    alert('Too many requests, please try again later 1')
                    return null
                }else{
                    console.log('Couldnt get all activities: ', response)
                    return null
                }
               
            }
        }
        catch(e){
            console.log('Error encountered while geeting all activities: ', e)
            return null
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
                return data;
            }else{
                if(response.status === 429){
                    alert('Too many requests, please try again later 2')
                    return null
                }else{
                    console.log('Couldnt get kudoers of the activity: ', response)
                    return null
                }
                
            }
        }
        catch(e){
            console.log('Error encountered while geeting all kudoers: ', e)
            return null
        }
    }

    const GetTopKudoers = async () => {
        const topKudoers = []
        const allActivityData = await GetAllAthleteActivities()
        const activitiesCounted = 0
        if(allActivityData){
            allActivityData.forEach(async activity => {
                const activityKudoers = await GetAllActivityKudoers(activity.id)
                if(activityKudoers){
                    for(let i = 0; i < activityKudoers.length; i++){
                        const index = topKudoers.findIndex((element) => element.name === activityKudoers[i].firstname)
                        if(index === -1){ //Kudoer does not exist
                            topKudoers.push({name: activityKudoers[i].firstname, surname: activityKudoers[i].lastname, kudos: 1})
                        }
                        else{ //Kudoer exists
                            topKudoers[index] = {...topKudoers[index], kudos: topKudoers[index].kudos + 1}
                        }
                    }
                    activitiesCounted++
                }
                else{
                    throw('Didnt get break the loop')
                }
            })
            changeActivityCount(activitiesCounted)
            changeKudosData(topKudoers)
            changeDataQueried(true)
        }
    }

    const GetDummyData = () => {
        const data = [
            {
                name: 'Petras1',
                surname: 'Petrauskas1',
                kudos: 4,
              },
              {
                name: 'Antanas11',
                surname: 'Petrauskas2',
                kudos: 5,
              },
              {
                name: 'Petras2',
                surname: 'Petrauskas3',
                kudos: 7,
              },
              {
                name: 'Antanas2',
                surname: 'Petrauskas4',
                kudos: 2,
              },
              {
                name: 'Petras3',
                surname: 'Petrauskas5',
                kudos: 1,
              },
              {
                name: 'Antanas3',
                surname: 'Petrauskas6',
                kudos: 3,
              }
        ]
        changeActivityCount(7)
        changeKudosData(Array.from(data))
        changeDataQueried(true)
    }

    const ClearData = () => {
        changeActivityCount(0)
        changeKudosData({})
        changeDataQueried(false)
    }

    const SortArray = (arrayToSort) => { //Sorts by kudos amount
        if(arrayToSort){
            console.log(arrayToSort, ' ', typeof(arrayToSort))
            return arrayToSort.sort((a, b) => { return b.kudos - a.kudos})
        }
        return ''
    }

    const Deauthorize = async () => {
        try{
            const response = await fetch(`https://www.strava.com/oauth/deauthorize?access_token${context.auth.data.access_token}/kudos`, {
                method: 'POST',
                headers: {
                    "Authorization": `Bearer ${context.auth.data.access_token}`
                }})
            if(response.ok){
                context.changeAuth({})
                context.changeState('preLogin')
                return
            }else{
                if(response.status === 429){
                    alert('Too many requests, please try again later 3')
                    
                }else{
                    console.log('Couldnt deauthorize: ', response)
                }
                
            }
        }
        catch(e){
            console.log('Error encountered while deauthorizing: ', e)
        }
    }

    return (
        <div className = 'page logged-in'>
            <Container fluid>
                <Row>
                    <Col className = 'mb-2'>
                    {context.auth.data? <h2 className = 'secondary-panel text-center'>{`Hello ${context.auth.data.athlete.firstname} ${context.auth.data.athlete.lastname}`}</h2>: ''}
                    </Col>
                </Row>
                <Row>
                    <Col md={10}>
                        {dataQueried? <KudosChart activityCount = {activityCount} kudosData = {SortArray(kudosData)}/>: <div className = 'chart-placeholder secondary-panel'>
                                <h4>Kudos data will show up here after you press the button on the right</h4>
                            </div>}
                    </Col>
                    <Col md={2}>
                        <button className = 'link-button mb-5' onClick = {GetTopKudoers}>Get activities</button>
                        <button className = 'link-button mb-5' onClick = {GetDummyData}>Get dummy data</button>
                        {dataQueried? <button className = 'link-button mb-5' onClick = {ClearData}>Clear data</button>: ''}
                        <button className = 'link-button' onClick = {Deauthorize}>Log out</button>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LoggedInPage
