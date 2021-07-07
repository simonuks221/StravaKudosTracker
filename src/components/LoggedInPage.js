import { Row, Col, Container } from "react-bootstrap"
import { useContext, useState } from "react"
import { AuthContext } from "../App.js"
import KudosChart from "./KudosChart.js"

const LoggedInPage = () => {
    const context = useContext(AuthContext)
    const [kudosData, changeKudosData] = useState()
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
                    alert('Too many requests, please try again later')
                }else{
                    console.log('Couldnt get all activities: ', response)
                }
               
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
                return data;
            }else{
                if(response.status === 429){
                    alert('Too many requests, please try again later')
                }else{
                    console.log('Couldnt get kudoers of the activity: ', response)
                }
                
            }
        }
        catch(e){
            console.log('Error encountered while geeting all kudoers: ', e)
        }
    }

    const GetTopKudoers = async () => {
        const topKudoers = []
        const allActivityData = await GetAllAthleteActivities()
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
                }
            })
        }
        changeKudosData(topKudoers)
        changeDataQueried(true)
    }

    const GetDummyData = () => {
        const data = [
            {
                name: 'Rusne',
                surname: 'Baltr',
                kudos: 4,
              },
              {
                name: 'Page B',
                surname: 'Baltr',
                kudos: 5,
              },
              {
                name: 'Page C',
                surname: 'Baltr',
                kudos: 3,
              },
              {
                name: 'Page C',
                surname: 'Baltr',
                kudos: 3,
              },
              {
                name: 'Page C',
                surname: 'Baltr',
                kudos: 3,
              },
              {
                name: 'Page C',
                surname: 'Baltr',
                kudos: 3,
              }
        ]
        changeKudosData(data)
        changeDataQueried(true)
    }

    const ClearData = () => {
        changeKudosData({})
        changeDataQueried(false)
    }

    const SortArray = (arrayToSort) => { //Sorts by kudos amount
        return arrayToSort.sort((a, b) => { return b.kudos - a.kudos})
    }

    return (
        <div className = 'page logged-in'>
            <Container fluid>
                <Row>
                    <Col md={10}>
                        {dataQueried? <KudosChart kudosData = {SortArray(kudosData)}/>: <div className = 'chart-placeholder secondary-panel'>
                                <h4>Kudos data will show up here after you press the button on the right</h4>
                            </div>}
                    </Col>
                    <Col md={2}>
                        <button className = 'link-button mb-5' onClick = {GetTopKudoers}>Get activities</button>
                        <button className = 'link-button mb-5' onClick = {GetDummyData}>Get dummy data</button>
                        <button className = 'link-button' onClick = {ClearData}>Clear data</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LoggedInPage
