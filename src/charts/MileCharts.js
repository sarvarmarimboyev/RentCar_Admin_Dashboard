
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";
import mileStatics from './../assets/dummy-data/mileStatics';


const MileCharts = () => {
    return <ResponsiveContainer width="100%">
        <BarChart data={mileStatics}>
            <XAxis dataKey="name" stroke="#2884ff" />
            <Bar
                dataKey="mileStats"
                barSize={30}
                stroke="#2884ff"
                fill="#2884ff"
            />
            <Tooltip cursor={false} wrapperClassName="tooltip__style" />
        </BarChart>
    </ResponsiveContainer>
};
export default MileCharts;