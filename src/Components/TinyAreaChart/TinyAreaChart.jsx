import { Area, AreaChart,Tooltip , XAxis } from 'recharts';

const data = [
    { name: 'Team 1', Pts_Earned: 60 },
    { name: 'Team 2', Pts_Earned: 70 },
    { name: 'Team 3', Pts_Earned: 80 },
    { name: 'Team 4', Pts_Earned: 90 },
    { name: 'Team 5', Pts_Earned: 100 },
    { name: 'Team 6', Pts_Earned: 80 },
    { name: 'Team 7', Pts_Earned: 80 },
    { name: 'Team 8', Pts_Earned: 90 },
    { name: 'Team 9', Pts_Earned: 95 },
    { name: 'Team 10', Pts_Earned: 100 },
    { name: 'Team 11', Pts_Earned: 100 },
    { name: 'Team 12', Pts_Earned: 100 },
];

const TinyAreaChart = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <AreaChart
        width={800}
        height={200}
        data={data}
        margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FCECB8" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#ffffff" stopOpacity={0.2} />
          </linearGradient>
        </defs>

        <XAxis dataKey="name" />
        <Tooltip />

        <Area
            type="monotone"
            dataKey="Pts_Earned"
            stroke="#F7D047"
            fill="url(#colorUv)"
            dot={{ r: 3, fill: "#F7D047" }}
        />
        </AreaChart>
    </div>
  );
};

export default TinyAreaChart;
