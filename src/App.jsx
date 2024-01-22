import CreateCustomer from "./components/Customers/CreateCustomer";
import Customer from "./components/Customers/Customer";
import AccountOperations from "./components/Account/AccountOperations";
import BalanceDisplay from "./components/Account/BalanceDisplay";

function App() {
  return (
    <div>
      <h1>🏦 The Sujith Bank⚛️</h1>
      <CreateCustomer />
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
    </div>
  );
}

export default App;
