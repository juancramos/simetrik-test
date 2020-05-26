import React, { useState } from 'react';
import { Layout } from '@components/layout/Layout';
import { Row, Column } from '@components/grid';
import { Gap } from '@components/gap/Gap';
import { CardContainer } from '@components/card/card.styled';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie,
} from 'recharts';

const Chart = () => {
  const [data, setData] = useState<{}>({});

  fetch('data/data.json').then(r => r.json())
    .then((data) => {
      const newJson = data && data.map(item => ({
        creation_date: item.creation_date,
        status: item.status,
      }
      ));
      const reducer = newJson.reduce((rv, x) => {
        (rv[x['creation_date']] = rv[x['creation_date']] || []).push(x);
        return rv;
      }, {});
      console.log(reducer);
    }).catch(e => console.log(e));

  const data0 = [
    {
      name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
  ];

  const data01 = [
    { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 },
  ];

  return (
    <Layout helmetTags={<title>Chart</title>}>
      <Gap size={40} />
      <Row>
        <Column size={1}>
        </Column>
        <Column size={4}>
          <Gap size={10} />
          <CardContainer>
            <BarChart
              width={500}
              height={300}
              data={data0}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey='pv' fill='#8884d8' />
              <Bar dataKey='uv' fill='#82ca9d' />
            </BarChart>
          </CardContainer>
          <Gap size={20} />
          <CardContainer>
            <PieChart width={400} height={400}>
              <Pie dataKey='value' isAnimationActive={false} data={data01}
                cx={200} cy={200} outerRadius={80} fill='#8884d8' label />
              <Tooltip />
            </PieChart>
          </CardContainer>
        </Column>
        <Column size={1}>
        </Column>
      </Row>
    </Layout>
  );
};

export default Chart;
