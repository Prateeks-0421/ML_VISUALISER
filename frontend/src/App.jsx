// import { useState } from "react";
// import DatasetSelector from "./components/DatasetSelector";
// import AlgorithmSelector from "./components/AlgorithmSelector";
// import ParameterPanel from "./components/ParameterPanel";
// import Results from "./components/Results";
// import Study from "./components/Study";
// import { trainModel } from "./services/api";

// function App() {
//   const [dataset, setDataset] = useState("iris");
//   const [algorithm, setAlgorithm] = useState("knn");
//   const [params, setParams] = useState({});
//   const [result, setResult] = useState(null);
//   const [page, setPage] = useState("home");

//   const handleTrain = async () => {
//     const res = await trainModel({ dataset, algorithm, params });
//     setResult(res.data);
//   };

//   if (page === "study") return <Study goBack={() => setPage("home")} />;

//   return (
//     <div style={styles.layout}>
      
//       {/* Sidebar */}
//       <div style={styles.sidebar}>
//         <h2 style={{ color: "white" }}>ML Dashboard</h2>

//         <button onClick={() => setPage("home")} style={styles.navBtn}>
//           Home
//         </button>

//         <button onClick={() => setPage("study")} style={styles.navBtn}>
//           Study
//         </button>
//       </div>

//       {/* Main Content */}
//       <div style={styles.main}>
//         <h1 style={styles.header}>Machine Learning Visualizer</h1>

//         <div style={styles.grid}>
          
//           {/* Config */}
//           <div className="card">
//             <h3>Configuration</h3>

//             <DatasetSelector value={dataset} onChange={setDataset} />
//             <AlgorithmSelector value={algorithm} onChange={setAlgorithm} />
//             <ParameterPanel
//               algorithm={algorithm}
//               params={params}
//               setParams={setParams}
//             />

//             <button style={styles.trainBtn} onClick={handleTrain}>
//               Train Model
//             </button>
//           </div>

//           {/* Results */}
//           <div className="card">
//             <h3>Results</h3>
//             <Results result={result} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   layout: {
//     display: "flex",
//     height: "100vh",
//   },
//   sidebar: {
//     width: "220px",
//     background: "#1e293b",
//     padding: "20px",
//     display: "flex",
//     flexDirection: "column",
//     gap: "10px",
//   },
//   navBtn: {
//     background: "#334155",
//     color: "white",
//     border: "none",
//     padding: "10px",
//     borderRadius: "6px",
//     cursor: "pointer",
//   },
//   main: {
//     flex: 1,
//     padding: "30px",
//   },
//   header: {
//     marginBottom: "20px",
//   },
//   grid: {
//     display: "grid",
//     gridTemplateColumns: "1fr 1fr",
//     gap: "20px",
//   },
//   trainBtn: {
//     marginTop: "15px",
//     padding: "12px",
//     background: "#6366f1",
//     color: "white",
//     border: "none",
//     borderRadius: "6px",
//     cursor: "pointer",
//   },
// };

// export default App;















import { useState } from "react";
import DatasetSelector from "./components/DatasetSelector";
import AlgorithmSelector from "./components/AlgorithmSelector";
import ParameterPanel from "./components/ParameterPanel";
import Results from "./components/Results";
import Study from "./components/Study";
import { trainModel } from "./services/api";

function App() {
  const [dataset, setDataset] = useState("iris");
  const [algorithm, setAlgorithm] = useState("knn");
  const [params, setParams] = useState({});
  const [result, setResult] = useState(null);
  const [page, setPage] = useState("home");

  const handleTrain = async () => {
    try {
      const res = await trainModel({
        dataset,
        algorithm,
        params,
      });
      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert("Backend error. Check server.");
    }
  };

  if (page === "study") {
    return <Study goBack={() => setPage("home")} />;
  }

  return (
    <div style={styles.layout}>
      
      {/* SIDEBAR */}
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>ML Dashboard</h2>

        <button
          className="btn btn-secondary"
          onClick={() => setPage("home")}
        >
          Home
        </button>

        <button
          className="btn btn-secondary"
          onClick={() => setPage("study")}
        >
          Study
        </button>
      </div>

      {/* MAIN CONTENT */}
      <div style={styles.main}>
        <h1 style={styles.header}>Machine Learning Visualizer</h1>

        <div style={styles.grid}>

          {/* LEFT: CONFIGURATION */}
          <div className="card">
            <h3 style={styles.sectionTitle}>Configuration</h3>

            <DatasetSelector value={dataset} onChange={setDataset} />
            <AlgorithmSelector value={algorithm} onChange={setAlgorithm} />
            <ParameterPanel
              algorithm={algorithm}
              params={params}
              setParams={setParams}
            />

            <button
              className="btn btn-primary"
              style={{ marginTop: "15px", width: "100%" }}
              onClick={handleTrain}
            >
              🚀 Train Model
            </button>
          </div>

          {/* RIGHT: RESULTS */}
          <div className="card">
            <h3 style={styles.sectionTitle}>Results & Visualization</h3>

            {result ? (
              <Results result={result} />
            ) : (
              <div style={styles.placeholder}>
                <p>No results yet.</p>
                <p style={{ fontSize: "13px", color: "#64748b" }}>
                  Select dataset & algorithm, then click Train.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

/* ---------- STYLES ---------- */

const styles = {
  layout: {
    display: "flex",
    height: "100vh",
  },

  sidebar: {
    width: "230px",
    background: "#1e293b",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  logo: {
    color: "white",
    marginBottom: "20px",
    textAlign: "center",
  },

  main: {
    flex: 1,
    padding: "30px",
    overflowY: "auto",
  },

  header: {
    fontSize: "28px",
    fontWeight: "600",
    marginBottom: "20px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },

  sectionTitle: {
    marginBottom: "10px",
  },

  placeholder: {
    textAlign: "center",
    padding: "40px",
    color: "#94a3b8",
  },
};

export default App;




