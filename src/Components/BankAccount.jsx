function BankAccount({ balance }) {
  return (
    <div className="bankAccount">
      <p className="largerText">Bank Account: GE3100342</p>
      <div className="balance">
        <p id="balance">Current Balance: {balance}</p>
      </div>
    </div>
  );
}

export default BankAccount;
