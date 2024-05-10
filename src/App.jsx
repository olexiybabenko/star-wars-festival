// import
import { useState } from "react";
import Header from "./components/Header"; // Header component
import logo from "./assets/star-wars-logo.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Header component */}
      <Header websiteLogo={logo} />
    </>
  );
}

export default App;
