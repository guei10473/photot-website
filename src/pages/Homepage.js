import React from "react";
import Search from "../components/Search";

const Homepage = () => {
  const auth = "2HbarqkSJnfPYiy9cKuOYmuUDXSTloefv9yeuL3lEAab29nmuPxUiJNK";
  return (
    <div style={{ minHeight: "100vh" }}>
      <Search />
      <h1>This is hompage.</h1>
    </div>
  );
};

export default Homepage;
