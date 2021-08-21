import { useState, useEffect } from "react";
import _ from "lodash";
import "./App.css";
import BankAccount from "./Components/BankAccount";
import CreditCards from "./Components/CreditCards";
import ExchangeRates from "./Components/ExchangeRates";
import Transactions from "./Components/Transactions";
import Payment from "./Components/Payment";
import ExpensesChart from "./Components/ExpensesChart";
import Greeting from "./Components/Greeting";
function App() {
  const [balance, setBalance] = useState(100);
  return (
    <div className="App">
      <div className="top">
        {" "}
        <Greeting></Greeting>
        <BankAccount balance={balance}></BankAccount>
        <CreditCards></CreditCards>
        <Payment></Payment>
      </div>
      <div className="body">
        {" "}
        <Transactions></Transactions>
        <ExpensesChart></ExpensesChart>
      </div>
      <div className="sidebar">
        {" "}
        <ExchangeRates></ExchangeRates>
      </div>
    </div>
  );
}

export default App;
