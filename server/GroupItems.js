function groupItems (items){
    var result = [];
    items.reduce(function(res, item) {
      if (!res[item.payer]) {
        res[item.payer] = { payer: item.payer, points: 0 };
        result.push(res[item.payer])
      }
      res[item.payer].points += item.points;
      return res;
    }, {});

    return result;
}

module.exports = groupItems;