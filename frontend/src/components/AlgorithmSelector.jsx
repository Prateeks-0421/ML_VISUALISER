function AlgorithmSelector({ value, onChange }) {
  return (
    <div style={styles.container}>
      <label style={styles.label}>Select Algorithm</label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={styles.select}
      >
        <option value="linear_regression">Linear Regression</option>
        <option value="logistic_regression">Logistic Regression</option>
        <option value="knn">KNN</option>
        <option value="decision_tree">Decision Tree</option>
        <option value="svm">SVM</option>
        <option value="naive_bayes">Naive Bayes</option>
      </select>
    </div>
  );
}

const styles = {
  container: { marginBottom: "15px" },
  label: { display: "block", marginBottom: "5px" },
  select: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
};

export default AlgorithmSelector;