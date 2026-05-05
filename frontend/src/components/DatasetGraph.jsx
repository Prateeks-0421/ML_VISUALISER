import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function DatasetGraph({ dataset }) {
  // Fake sample visualization (since backend doesn’t send raw data yet)
  const sampleData = Array.from({ length: 30 }, (_, i) => ({
    x: Math.random() * 10,
    y: Math.random() * 10,
  }));

  return (
    <div style={{ height: "250px" }}>
      <h4>Dataset Visualization</h4>

      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart>
          <XAxis dataKey="x" />
          <YAxis dataKey="y" />
          <Tooltip />
          <Scatter data={sampleData} />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DatasetGraph;