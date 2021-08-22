import Transaction from "./Transacton";
function Transactions({ transactionsData }) {
  return (
    <div className="transactions">
      <p className="largerText">This will be a list of transactions</p>
      {transactionsData.map((transaction) => (
        <Transaction individualTransaction={transaction}></Transaction>
      ))}
    </div>
  );
}

export default Transactions;
