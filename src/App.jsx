import { Route, Routes } from "react-router-dom";
import Transaction from "./page/Transaction";

function App() {
  return (
    <div>
      <main className="absolute">
        <div className="">
          <Routes>
            <Route path="*" element={<Transaction />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
