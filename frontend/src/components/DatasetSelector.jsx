function DatasetSelector({ value, onChange }) {
  return (
    <div style={styles.container}>
      <label style={styles.label}>Select Dataset</label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={styles.select}
      >
        <option value="iris">Iris</option>
        <option value="wine">Wine</option>
        <option value="breast_cancer">Breast Cancer</option>
        <option value="diabetes">Diabetes</option>
        <option value="california_housing">California Housing</option>
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

export default DatasetSelector;