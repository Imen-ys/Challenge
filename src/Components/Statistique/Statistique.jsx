import { BarChart, Bar , XAxis , YAxis , CartesianGrid } from 'recharts';

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

const statistique = ({color , Title}) => {
    return (

    <div className=' rounded-md p-2 shadow-md'>
        <h2 className='font-bold mt-2 text-lg'>
            {Title}
        </h2>
        <div className="flex justify-center mt-3">
        <BarChart className='mt-3 '
        style={{ width: '300%', maxWidth: '300px', maxHeight: '200px', aspectRatio: 0.2  }}
        responsive
        data={data}
        >
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="name" />
        <YAxis tickFormatter={(v) => `${v}%`} />
        <Bar dataKey="uv" fill={color}  radius={[10, 10, 0, 0]}/>
        </BarChart>
        </div>
    </div>

  );
};

export default statistique;