// function ParameterPanel({ algorithm, params, setParams }) {
//   const handleChange = (key, value) => {
//     setParams({ ...params, [key]: value });
//   };

//   const renderFields = () => {
//     switch (algorithm) {
//       case "knn":
//         return (
//           <>
//             <Input
//               label="Neighbors (k)"
//               value={params.n_neighbors || ""}
//               onChange={(v) => handleChange("n_neighbors", Number(v))}
//             />
//           </>
//         );

//       case "logistic_regression":
//         return (
//           <>
//             <Input
//               label="C (Regularization)"
//               value={params.C || ""}
//               onChange={(v) => handleChange("C", Number(v))}
//             />
//           </>
//         );

//       case "decision_tree":
//         return (
//           <>
//             <Input
//               label="Max Depth"
//               value={params.max_depth || ""}
//               onChange={(v) => handleChange("max_depth", Number(v))}
//             />
//           </>
//         );

//       case "svm":
//         return (
//           <>
//             <Input
//               label="C"
//               value={params.C || ""}
//               onChange={(v) => handleChange("C", Number(v))}
//             />

//             <Select
//               label="Kernel"
//               value={params.kernel || "rbf"}
//               onChange={(v) => handleChange("kernel", v)}
//               options={["linear", "rbf", "poly"]}
//             />
//           </>
//         );

//       case "naive_bayes":
//         return (
//           <>
//             <Input
//               label="Var Smoothing"
//               value={params.var_smoothing || ""}
//               onChange={(v) =>
//                 handleChange("var_smoothing", Number(v))
//               }
//             />
//           </>
//         );

//       default:
//         return <p style={{ color: "#888" }}>No parameters required</p>;
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h3 style={styles.title}>Parameters</h3>
//       {renderFields()}
//     </div>
//   );
// }

// /* ---------- Reusable Components ---------- */

// function Input({ label, value, onChange }) {
//   return (
//     <div style={styles.field}>
//       <label>{label}</label>
//       <input
//         type="number"
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         style={styles.input}
//       />
//     </div>
//   );
// }

// function Select({ label, value, onChange, options }) {
//   return (
//     <div style={styles.field}>
//       <label>{label}</label>
//       <select
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         style={styles.input}
//       >
//         {options.map((opt) => (
//           <option key={opt}>{opt}</option>
//         ))}
//       </select>
//     </div>
//   );
// }

// /* ---------- Styles ---------- */

// const styles = {
//   container: {
//     marginTop: "20px",
//     padding: "15px",
//     border: "1px solid #eee",
//     borderRadius: "8px",
//     background: "#fafafa",
//   },
//   title: {
//     marginBottom: "10px",
//   },
//   field: {
//     marginBottom: "10px",
//   },
//   input: {
//     width: "100%",
//     padding: "8px",
//     borderRadius: "5px",
//     border: "1px solid #ccc",
//   },
// };

// export default ParameterPanel;

















function ParameterPanel({ algorithm, params, setParams }) {
  const handleChange = (key, value) => {
    setParams({ ...params, [key]: value });
  };

  const renderFields = () => {
    switch (algorithm) {
      case "knn":
        return (
          <>
            <Input
              label="n_neighbors"
              value={params.n_neighbors || 5}
              onChange={(v) => handleChange("n_neighbors", Number(v))}
            />

            <Select
              label="metric"
              value={params.metric || "minkowski"}
              onChange={(v) => handleChange("metric", v)}
              options={["minkowski", "euclidean", "manhattan"]}
            />
          </>
        );

      case "logistic_regression":
        return (
          <>
            <Input
              label="C"
              value={params.C || 1}
              onChange={(v) => handleChange("C", Number(v))}
            />

            <Select
              label="solver"
              value={params.solver || "lbfgs"}
              onChange={(v) => handleChange("solver", v)}
              options={["lbfgs", "liblinear"]}
            />
          </>
        );

      case "decision_tree":
        return (
          <>
            <Input
              label="max_depth"
              value={params.max_depth || 5}
              onChange={(v) => handleChange("max_depth", Number(v))}
            />

            <Select
              label="criterion"
              value={params.criterion || "gini"}
              onChange={(v) => handleChange("criterion", v)}
              options={["gini", "entropy"]}
            />
          </>
        );

      case "svm":
        return (
          <>
            <Input
              label="C"
              value={params.C || 1}
              onChange={(v) => handleChange("C", Number(v))}
            />

            <Select
              label="kernel"
              value={params.kernel || "rbf"}
              onChange={(v) => handleChange("kernel", v)}
              options={["linear", "rbf", "poly"]}
            />

            <Select
              label="gamma"
              value={params.gamma || "scale"}
              onChange={(v) => handleChange("gamma", v)}
              options={["scale", "auto"]}
            />
          </>
        );

      case "naive_bayes":
        return (
          <Input
            label="var_smoothing"
            value={params.var_smoothing || 1e-9}
            onChange={(v) => handleChange("var_smoothing", Number(v))}
          />
        );

      default:
        return <p>No parameters required</p>;
    }
  };

  return (
    <div style={styles.container}>
      <h3>Hyperparameters</h3>
      {renderFields()}
    </div>
  );
}

/* UI Components */

function Input({ label, value, onChange }) {
  return (
    <div style={styles.field}>
      <label>{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={styles.input}
      />
    </div>
  );
}

function Select({ label, value, onChange, options }) {
  return (
    <div style={styles.field}>
      <label>{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={styles.input}
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

// const styles = {
//   container: {
//     marginTop: "20px",
//     padding: "15px",
//     borderRadius: "8px",
//     background: "#f9fafb",
//     border: "1px solid #eee",
//   },


const styles = {
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    background: "#f8fafc",
    outline: "none",
  },
  
  field: {
    marginBottom: "12px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
};

export default ParameterPanel;