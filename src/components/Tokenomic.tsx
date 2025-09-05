import React from "react";
import { PieChart, Pie, Cell, Legend, Sector, ResponsiveContainer } from "recharts";

const data = [
  { name: "Liquidity & Fair Launch", value: 90 },
  { name: "OKBURN Vault", value: 10 },
];

const COLORS = ["#cd0000ff", "#9c8e8eff"];

// Custom render for active slice
const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    value,
  } = props;
  
  const total = data.reduce((acc, entry) => acc + entry.value, 0);
  const percent = ((value / total) * 100).toFixed(1);
  
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 50) * cos;
  const sy = cy + (outerRadius + 50) * sin;
  
  // Create a background rectangle for the tooltip
  const textWidth = Math.max(payload.name.length * 8, 120);
  const textHeight = 50;
  const rectX = sx - (cos >= 0 ? 0 : textWidth);
  const rectY = sy - textHeight / 2;
  
  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        opacity={0.6}
      />
      {/* Tooltip background */}
      <rect
        x={rectX}
        y={rectY}
        width={textWidth}
        height={textHeight}
        fill="rgba(0, 0, 0, 0.9)"
        stroke="#fff"
        strokeWidth={1}
        rx={6}
        ry={6}
      />
      {/* Tooltip text */}
      <text
        x={sx - (cos >= 0 ? -10 : textWidth - 10)}
        y={sy - 8}
        textAnchor="start"
        dominantBaseline="central"
        fill="#fff"
        fontSize="16"
        fontWeight="bold"
      >
        {payload.name}
      </text>
      <text
        x={sx - (cos >= 0 ? -10 : textWidth - 10)}
        y={sy + 12}
        textAnchor="start"
        dominantBaseline="central"
        fill="#fff"
        fontSize="15"
      >
        {percent}% ({value.toLocaleString()})
      </text>
    </g>
  );
};

// Custom legend component
const CustomLegend = (props: any) => {
  const { payload } = props;
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-4">
      {payload.map((entry: any, index: number) => (
        <div key={index} className="flex items-center gap-2">
          <div
            className="w-4 h-4 rounded-sm"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-white text-sm font-medium">
            {entry.value}: {data[index].value}%
          </span>
        </div>
      ))}
    </div>
  );
};

const Tokenomics: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  return (
    <section id="tokenomic" className="scroll-mt-20 flex flex-col items-center p-6 bg-[#333333]">
      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-red-400 to-gray-300 bg-clip-text text-transparent">
        TOKENOMICS
      </h2>
      <p className="text-gray-300 text-sm mb-6 text-center max-w-md">
        Distribution of tokens across liquidity provision and vault mechanisms
      </p>
      
      <div className="w-full max-w-4xl" style={{ height: '450px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius="80%"
              fill="#8884d8"
              dataKey="value"
              onMouseEnter={onPieEnter}
              onMouseLeave={onPieLeave}
              activeShape={activeIndex !== null ? renderActiveShape : undefined}
              isAnimationActive={true}
              animationBegin={0}
              animationDuration={800}
              stroke="#000"
              strokeWidth={2}
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index]}
                  className="hover:opacity-80 transition-opacity duration-200 cursor-pointer"
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md">
        {data.map((item, index) => (
          <div 
            key={item.name}
            className="bg-gray-700 rounded-lg p-3 text-center border-l-4"
            style={{ borderLeftColor: COLORS[index] }}
          >
            <div className="text-2xl font-bold text-white">
              {item.value}%
            </div>
            <div className="text-xs text-gray-300 mt-1">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tokenomics;