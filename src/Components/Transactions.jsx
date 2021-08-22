import Transaction from "./Transacton";
function Transactions({ transactionsData }) {
  return (
    <div className="transactions">
      <p className="largerText">This will be a list of transactions</p>
      {transactionsData.map((transaction) => (
        <h1>boo</h1>
      ))}
    </div>
  );
}

export default Transactions;
