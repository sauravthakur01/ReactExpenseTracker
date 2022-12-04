import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {

    const dataPointValues = props.dataPoints.map(datapoint => datapoint.value)
   
    const totalMax = Math.max(...dataPointValues)
    console.log(totalMax)

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key = {dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMax}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
