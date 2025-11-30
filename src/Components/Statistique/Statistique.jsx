import { BarChart, Bar , XAxis , YAxis } from 'recharts';

const data = [
    {
        name: 'Week 1',
        uv: 80,
    },
    {
        name: 'Week 2',
        uv: 57,
    },
    {
        name: 'Week 3',
        uv: 75,
    },
    {
        name: 'Week 4',
        uv: 25,
    },
];

const statistique = () => {
  return (

    <div>
            <BarChart className='mt-3 '
        style={{ width: '300%', maxWidth: '300px', maxHeight: '200px', aspectRatio: 0.4  }}
        responsive
        data={data}
        >
        <XAxis dataKey="name" />
        <YAxis datakey="uv" />
        <Bar dataKey="uv" fill="#FFD1AB" />
    </BarChart>
    </div>

  );
};

export default statistique;