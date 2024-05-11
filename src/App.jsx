// import
import { useState } from "react";
import Header from "./components/Header"; // Header component
import logo from "./assets/star-wars-logo.png";
import { HEADER_ELEMENTS } from "./data"; // Array with list of header elements

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Header component */}
      <Header websiteLogo={logo} headerElements={HEADER_ELEMENTS} />
    </>
  );
}

export default App;
