function Transacton({ individualTransaction }) {
  return (
    <div className="transaction">
      <p>{individualTransaction.description}</p>
      <p>
        {individualTransaction.dayOfAugust == 21
          ? "21st "
          : individualTransaction.dayOfAugust == 22
          ? "22nd "
          : individualTransaction.dayOfAugust == 23
          ? "23rd "
          : individualTransaction.dayOfAugust.toString().concat("th ")}
        of August
      </p>
      <p id="expense">
        {individualTransaction.amount} {individualTransaction.currency}{" "}
      </p>
    </div>
  );
}

export default Transacton;
