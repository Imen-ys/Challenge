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

const statistique = ({color}) => {
  return (

    <div className='mr-2 rounded-md p-2 shadow-md'>
        <h2 className='font-bold mt-2 text-lg'>
            Attendace Rate
        </h2>
        <BarChart className='mt-3 '
        style={{ width: '300%', maxWidth: '300px', maxHeight: '200px', aspectRatio: 0.4  }}
        responsive
        data={data}
        >
        <XAxis dataKey="name" />
        <YAxis datakey="uv" />
        <Bar dataKey="uv" fill={color} />
        </BarChart>
    </div>

  );
};

export default statistique;