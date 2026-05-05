// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// function Charts({ result }) {
//   const data = Object.entries(result)
//     .filter(([key]) => key !== "model")
//     .map(([key, value]) => ({
//       name: key,
//       value: Number(value),
//     }));

//   if (data.length === 0) return null;

//   return (
//     <div style={{ marginTop: "20px", height: "300px" }}>
//       <ResponsiveContainer width="100%" height="100%">
//         <BarChart data={data}>
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Bar dataKey="value" />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// export default Charts;












// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// function Charts({ result }) {
//   if (!result) return null;

//   const data = Object.entries(result)
//     .filter(([k]) => k !== "model")
//     .map(([key, value]) => ({
//       name: key,
//       value: Number(value),
//     }));

//   return (
//     <div style={{ height: "300px" }}>
//       <ResponsiveContainer width="100%" height="100%">
//         <BarChart data={data}>
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Bar dataKey="value" />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// export default Charts;











import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function Charts({ result }) {
  if (!result) return null;

  const data = Object.entries(result)
    .filter(([k]) => k !== "model")
    .map(([key, value]) => ({
      name: key,
      value: Number(value),
    }));

  return (
    <div style={{ height: "300px", marginTop: "20px" }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#6366f1" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Charts;