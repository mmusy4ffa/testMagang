import { Route, Routes } from "react-router-dom";
import Transaction from "./page/Transaction";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Transaction />} />
    </Routes>
  );
}

export default App;
