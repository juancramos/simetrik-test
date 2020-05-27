import React from 'react';
import { Layout } from '@components/layout/Layout';
import { Row, Column } from '@components/grid';
import { Gap } from '@components/gap/Gap';
import { CardContainer } from '@components/card/card.styled';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie,
} from 'recharts';

function Chart({ lData, pData }) {
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
              data={lData}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey='APPROVED' fill='#8884d8' />
              <Bar dataKey='PENDING' fill='#82ca9d' />
              <Bar dataKey='REJECTED' fill='#a7ca2d' />
            </BarChart>
          </CardContainer>
          <Gap size={20} />
          <CardContainer>
            <PieChart width={600} height={600}>
              <Pie dataKey='total_amount' isAnimationActive={true} data={pData}
                cx={400} cy={400} outerRadius={80} fill='#8884d8' label />
              <Tooltip />
            </PieChart>
          </CardContainer>
        </Column>
        <Column size={1}>
        </Column>
      </Row>
    </Layout>
  );
}

Chart.getInitialProps = async ({ req }) => {
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';

  const apiUrl = `${process.browser
    ? `${protocol}://${window.location.host}`
    : `${protocol}://${req.headers.host}`}/data/data.json`;

  const res = await fetch(apiUrl);
  const data = await res.json();

  const lData = [];
  const pData = [];
  data && data.map((item) => {
    const lIndex = lData.find(x => x.name === item.creation_date);
    if (lIndex) {
      if (lIndex[item.status]) {
        lIndex[item.status] += 1;
      }
      else lIndex[item.status] = 1;
    }
    else { lData.push({ name: item.creation_date, [item.status]: 1 }); }

    let replace = item.total_amount.replace(/[^\d\,]/g, '');
    replace = replace.replace(',', '.');
    console.log(replace);
    const result = Number(replace);
    const pIndex = pData.find(x => x.name === item.creation_date);
    if (pIndex) {
      pIndex.total_amount += result;
    }
    else { pData.push({ name: item.creation_date, total_amount: result }); }
  });
  return { lData, pData };
};

export default Chart;
