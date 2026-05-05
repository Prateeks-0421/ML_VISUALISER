import Charts from "./Charts";
import DatasetGraph from "./DatasetGraph";
import ConfusionMatrix from "./ConfusionMatrix";

function Results({ result }) {
  if (!result) return null;

  return (
    <div style={styles.container}>
      <h2>Results</h2>

      <div style={styles.card}>
        {Object.entries(result).map(([key, value]) => (
          <p key={key}>
            <strong>{key}:</strong> {value}
          </p>
        ))}
      </div>

      <Charts result={result} />
      <DatasetGraph />
      <ConfusionMatrix result={result} />
    </div>
  );
}

const styles = {
  container: {
    marginTop: "30px",
    maxWidth: "600px",
    marginInline: "auto",
  },
  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
};

export default Results;