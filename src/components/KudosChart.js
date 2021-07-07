import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const KudosChart = (kudosData) => {

    const CustomTooltip = ({active, payload, label}) => {
        if (active && payload && payload.length) {
            return (
                <div className="chart-tooltip">
                    <p>{`User name: ${label}, ${payload[0].payload.surname}`}</p>
                    <p>{`Amount of Kudos given: ${payload[0].value}`}</p>
                </div>
            )
        }else{
            return ''
        }
    }

    return (
      <div className = 'secondary-panel'>
          <BarChart
      layout= 'vertical'
      width={800}
      height={300}
      data={kudosData.kudosData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}>
        <CartesianGrid strokeDasharray="6 6" horizontal = {false} />
        <XAxis type="number"/>
        <YAxis type="category" dataKey="name" />
        <Bar dataKey="kudos" barSize = {50} fill={getComputedStyle(document.documentElement).getPropertyValue('--primaryColor')} />
        <Tooltip content={<CustomTooltip/>}/>
        <Legend/>
    </BarChart>
      </div>
    )
}

export default KudosChart
