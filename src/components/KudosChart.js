import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const KudosChart = (kudosData) => {

    const data = [
        {
            name: 'Page A',
            kudos: 4000,
          },
          {
            name: 'Page B',
            kudos: 3000,
          },
          {
            name: 'Page C',
            kudos: 2000,
          }
    ]

    const getIntroOfPage = (label) => {
        /*
        if (label === 'Page A') {
          return "Page A is about men's clothing";
        }
        */
        return 'naujas'
        return '';
      }

    const CustomTooltip = ({active, payload, label}) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p className="label">{`${label} : ${payload[0].value}`}</p>
                    <p className="intro">{getIntroOfPage(label)}</p>
                    <p className="desc">Anything you want can be displayed here.</p>
                </div>
            )
        }else{
            return ''
        }
    }

    return (
        <BarChart
        layout= 'vertical'
          width={800}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number"/>
            <YAxis type="category" dataKey="kudos" />
            <Bar dataKey="kudos" fill="#8884d8" />
            <Tooltip content={<CustomTooltip />} />
            <Legend/>
        </BarChart>
    )
}

export default KudosChart
