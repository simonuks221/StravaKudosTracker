import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useEffect } from 'react';

const KudosChart = ({kudosData, activityCount}) => {
    const CustomTooltip = ({active, payload, label}) => {
        if (active && payload && payload.length) {
            return (
                <div className="chart-tooltip">
                    <p>{`#${kudosData.findIndex(element => element.name === payload[0].payload.name) + 1} ${label}, ${payload[0].payload.surname}`}</p>
                    <hr className = 'solid'/>
                    <p>{`Kudos given: ${payload[0].value}`}</p>
                </div>
            )
        }else{
            return ''
        }
    }

    return (
      <div className = 'secondary-panel'>
        {kudosData.length === 0? <p>Looks like you don't have any Kudos given to you :(</p>:
        <ResponsiveContainer width="100%" height={kudosData.length * 75}>
          <BarChart
      layout= 'vertical'
      width={800}
      height={kudosData.length * 75}
      data={kudosData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}>
        <CartesianGrid strokeDasharray="6 6" horizontal = {false} />
        <XAxis type="number" dataKey = "kudos"/>
        <YAxis type="category" dataKey="name" />
        <Bar name = {`Number of Kudos given across ${activityCount} ${activityCount === 1? 'activity': 'activities'}`} dataKey="kudos" barSize = {50} fill={getComputedStyle(document.documentElement).getPropertyValue('--primaryColor')} />
        <Tooltip content={<CustomTooltip/>} cursor = {{fill: 'rgb(255, 255, 255, 0.6)'}}/>
        <Legend/>
    </BarChart>
    </ResponsiveContainer>
}
      </div>
    
    )
}

export default KudosChart
