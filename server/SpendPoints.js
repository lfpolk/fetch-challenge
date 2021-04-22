const groupItems = require("./GroupItems");

function spendPoints (points){
    let pointsSpent = [];
    let i = 0;
    while(points > 0){
        if (points > transactions[i].points){
            points -= transactions[i].points;
            pointsSpent.push({"payer": transactions[i].payer, "points": transactions[i].points * -1})
            transactions[i].points = 0;
        } else {
            transactions[i].points -= points;
            pointsSpent.push({"payer": transactions[i].payer, "points": points * -1})
            points = 0;
        }
        i++;
    }
    return groupItems(pointsSpent);

}

module.exports = spendPoints;