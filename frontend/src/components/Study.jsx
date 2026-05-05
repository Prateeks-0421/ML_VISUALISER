// function Study({ goBack }) {
//   return (
//     <div style={{ padding: "30px" }}>
//       <button className="btn btn-secondary" onClick={goBack}>
//         ← Back
//       </button>

//       <h1 style={{ marginTop: "20px" }}>
//         Machine Learning Algorithms
//       </h1>

//       {/* Linear Regression */}
//       <div className="card">
//         <h2>Linear Regression</h2>
//         <p>
//           Linear Regression predicts continuous values using a linear equation:
//         </p>

//         <h3>Formula:</h3>
//         <p><b>y = β₀ + β₁x</b></p>

//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Linear_regression.svg"
//           width="100%"
//         />

//         <p>
//           Used in price prediction, sales forecasting, etc.
//         </p>
//       </div>

//       {/* Logistic Regression */}
//       <div className="card">
//         <h2>Logistic Regression</h2>
//         <p>
//           Used for classification problems. Uses sigmoid function:
//         </p>

//         <h3>Formula:</h3>
//         <p><b>σ(z) = 1 / (1 + e⁻ᶻ)</b></p>

//         <p>
//           Outputs probability between 0 and 1.
//         </p>
//       </div>

//       {/* KNN */}
//       <div className="card">
//         <h2>K-Nearest Neighbors (KNN)</h2>
//         <p>
//           Classifies based on nearest data points.
//         </p>

//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/e/e7/KnnClassification.svg"
//           width="100%"
//         />

//         <p>
//           Sensitive to value of K and distance metric.
//         </p>
//       </div>

//       {/* Decision Tree */}
//       <div className="card">
//         <h2>Decision Tree</h2>
//         <p>
//           Splits data based on rules using entropy or gini index.
//         </p>

//         <h3>Entropy:</h3>
//         <p><b>H(S) = -Σ p log₂ p</b></p>

//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/f/f3/CART_tree_titanic_survivors.png"
//           width="100%"
//         />
//       </div>

//       {/* SVM */}
//       <div className="card">
//         <h2>Support Vector Machine (SVM)</h2>
//         <p>
//           Finds optimal hyperplane to separate classes.
//         </p>

//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/7/72/SVM_margin.png"
//           width="100%"
//         />

//         <p>
//           Works well in high dimensional spaces.
//         </p>
//       </div>

//       {/* Naive Bayes */}
//       <div className="card">
//         <h2>Naive Bayes</h2>
//         <p>
//           Based on Bayes theorem assuming independence:
//         </p>

//         <h3>Formula:</h3>
//         <p><b>P(A|B) = P(B|A)P(A) / P(B)</b></p>

//         <p>
//           Fast and efficient for large datasets.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Study;








// function Study({ goBack }) {
//   return (
//     <div style={styles.container}>
//       {/* Back Button */}
//       <button style={styles.backBtn} onClick={goBack}>
//         ← Back
//       </button>

//       <h1 style={styles.title}>Machine Learning Algorithms</h1>

//       {/* Linear Regression */}
//       <div style={styles.card}>
//         <h2>Linear Regression</h2>
//         <p>
//           Linear Regression is used to predict continuous values using a linear
//           relationship between input and output.
//         </p>

//         <p style={styles.formula}>y = β₀ + β₁x</p>

//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Linear_regression.svg"
//           alt="Linear Regression"
//           style={styles.image}
//         />

//         <p>
//           It is widely used in price prediction, trend analysis, and forecasting.
//         </p>
//       </div>

//       {/* Logistic Regression */}
//       <div style={styles.card}>
//         <h2>Logistic Regression</h2>
//         <p>
//           Logistic Regression is used for classification problems and outputs
//           probabilities.
//         </p>

//         <p style={styles.formula}>σ(z) = 1 / (1 + e⁻ᶻ)</p>

//         <p>
//           It maps values between 0 and 1 using the sigmoid function.
//         </p>
//       </div>

//       {/* KNN */}
//       <div style={styles.card}>
//         <h2>K-Nearest Neighbors (KNN)</h2>
//         <p>
//           KNN classifies data points based on the majority class of nearest
//           neighbors.
//         </p>

//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/e/e7/KnnClassification.svg"
//           alt="KNN"
//           style={styles.image}
//         />

//         <p>
//           The choice of K greatly affects performance.
//         </p>
//       </div>

//       {/* Decision Tree */}
//       <div style={styles.card}>
//         <h2>Decision Tree</h2>
//         <p>
//           Decision Trees split data into branches based on conditions using
//           metrics like entropy and gini index.
//         </p>

//         <p style={styles.formula}>H(S) = -Σ p log₂ p</p>

//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/f/f3/CART_tree_titanic_survivors.png"
//           alt="Decision Tree"
//           style={styles.image}
//         />

//         <p>
//           Easy to interpret and visualize but prone to overfitting.
//         </p>
//       </div>

//       {/* SVM */}
//       <div style={styles.card}>
//         <h2>Support Vector Machine (SVM)</h2>
//         <p>
//           SVM finds the optimal hyperplane that separates classes with maximum margin.
//         </p>

//         <img
//           src="https://upload.wikimedia.org/wikipedia/commons/7/72/SVM_margin.png"
//           alt="SVM"
//           style={styles.image}
//         />

//         <p>
//           Works well in high-dimensional spaces and supports kernel tricks.
//         </p>
//       </div>

//       {/* Naive Bayes */}
//       <div style={styles.card}>
//         <h2>Naive Bayes</h2>
//         <p>
//           Naive Bayes is a probabilistic classifier based on Bayes theorem assuming independence.
//         </p>

//         <p style={styles.formula}>P(A|B) = P(B|A)P(A) / P(B)</p>

//         <p>
//           Fast and efficient for large datasets and text classification tasks.
//         </p>
//       </div>
//     </div>
//   );
// }

/* ---------- STYLES ---------- */

const styles = {
  container: {
    padding: "40px",
    background: "#f4f7fb",
    minHeight: "100vh",
    fontFamily: "Poppins, sans-serif",
  },

  title: {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "32px",
    fontWeight: "600",
  },

  backBtn: {
    padding: "10px 15px",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    background: "white",
    cursor: "pointer",
    marginBottom: "20px",
  },

  card: {
    background: "#ffffff",
    padding: "25px",
    marginBottom: "20px",
    borderRadius: "14px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
  },

  formula: {
    fontWeight: "600",
    background: "#eef2ff",
    padding: "10px",
    borderRadius: "6px",
    display: "inline-block",
    margin: "10px 0",
  },

  image: {
    width: "100%",
    maxWidth: "450px",      // prevents large stretching
    display: "block",
    margin: "15px auto",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
};

export default Study;