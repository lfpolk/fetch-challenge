function insertTransaction(transaction) {

    transaction.timestamp = Date.parse(transaction.timestamp);
    let inserted = false;

    // Empty transactions array
    if (transactions.length == 0){
        transactions.push(transaction)
        inserted = true;
    } else {
        // Insert into sorted array
        for (i = 0; i < transactions.length; i++){
            if (transaction.timestamp < transactions[i].timestamp){
                transactions.splice(i, 0, transaction);
                inserted = true;
                break;
            } 
        }
    }

    // Only happens if timestamp > all current timestamps
    if (!inserted){
        transactions.push(transaction)
    }
}

module.exports = insertTransaction;