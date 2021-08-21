import Transaction from "./Transacton"
function Transactions() {
    return (
        <div className="transactions">
            <h1>This will be a list of transactions</h1>
            <Transaction id={1}></Transaction>
            <Transaction id={2}></Transaction>
            <Transaction id={3}></Transaction>
            <Transaction id={4}></Transaction>

        </div>
    )
}

export default Transactions
