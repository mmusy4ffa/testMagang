import { Route, Routes } from "react-router-dom";
import Transaction from "./page/Transaction";
import Accounts from "./page/Accounts";
import Setting from "./page/Settings";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Transaction />} />
      <Route path="/accounts" element={<Accounts />} />
      <Route path="/setting" element={<Setting />} />
    </Routes>
  );
}

export default App;
