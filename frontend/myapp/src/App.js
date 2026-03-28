import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://YOUR_BACKEND_URL/api/test")
      .then((res) => res.json())
      .then((res) => setData(res.message));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>CI/CD Test App 🚀ggg</h1>
      <h2>{data}</h2>
    </div>
  );
}

export default App;