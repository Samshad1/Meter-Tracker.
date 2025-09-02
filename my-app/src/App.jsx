import React, { useState } from "react";
import { Plus, RotateCcw, Calculator, Zap, AlertTriangle } from "lucide-react";

const App = () => {
  const [neighborAvailableUnits, setNeighborAvailableUnits] = useState(0);
  const [neighborTotalPrepaid, setNeighborTotalPrepaid] = useState(20000 / 65);
  const [myPurchases, setMyPurchases] = useState([]);

  return (
    <div className="p-4">
      <h1>Meter Tracker</h1>
      <p>Neighbor Units: {neighborAvailableUnits}</p>
      <p>Total Prepaid: {neighborTotalPrepaid.toFixed(2)}</p>
    </div>
  );
};

export default App;
