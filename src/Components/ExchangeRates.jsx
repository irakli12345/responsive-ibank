function ExchangeRates({ rates }) {
  return (
    <div className="ExchangeRates">
      <p className="largerText">Current Exchange Rates:</p>
      <p>$ - {rates.usd}</p>
      <p>€ - {rates.eur}</p>
      <p>£ - {rates.gbp}</p>
    </div>
  );
}

export default ExchangeRates;
