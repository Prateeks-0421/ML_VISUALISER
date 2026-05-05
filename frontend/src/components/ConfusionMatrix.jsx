function ConfusionMatrix({ result }) {
  if (!result || !result.confusion_matrix) return null;

  const matrix = result.confusion_matrix;

  return (
    <div style={{ marginTop: "20px" }}>
      <h4>Confusion Matrix</h4>

      <table style={styles.table}>
        <tbody>
          {matrix.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} style={styles.cell}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  table: {
    borderCollapse: "collapse",
    marginTop: "10px",
  },
  cell: {
    border: "1px solid #ccc",
    padding: "10px",
    textAlign: "center",
  },
};

export default ConfusionMatrix;