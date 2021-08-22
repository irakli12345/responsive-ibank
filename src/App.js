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
  const [user, setUser] = useState(100);
  const [transactions, setTransactions] = useState([]);
  const [rates, setRates] = useState({});
  useEffect(() => {
    const getTransactions = async () => {
      const data = await fetchData("http://localhost:3000/transactions");
      setTransactions(data);
    };
    getTransactions();
  }, []);
  useEffect(() => {
    const getUser = async () => {
      const data = await fetchData("http://localhost:3000/user");
      setUser(data);
    };
    getUser();
  }, []);
  useEffect(() => {
    const getRates = async () => {
      const data = await fetchData("http://localhost:3000/rates");
      setRates(data);
    };
    getRates();
  }, []);
  const fetchData = async (source) => {
    const res = await fetch(source);
    const data = await res.json();
    return data;
  };
  return (
    <div className="App">
      <div className="top">
        {" "}
        <Greeting firstName={"Irakli"}></Greeting>
        <BankAccount balance={user.startingBalance}></BankAccount>
        <CreditCards></CreditCards>
        <Payment></Payment>
      </div>
      <div className="body">
        <div className="main">
          {" "}
          <Transactions transactionsData={transactions}></Transactions>
          <ExpensesChart></ExpensesChart>
        </div>
        <div className="sidebar">
          {" "}
          <ExchangeRates rates={rates}></ExchangeRates>
        </div>
      </div>
    </div>
  );
}

export default App;
