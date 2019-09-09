console.log(pizzaList);
console.log(compositionList);

// 1) Sort
let getSortArrByPrice = function(sortOpt) {

    if(sortOpt == 'ascending') {
        pizzaList.sort ((a,b) => {
            if (a.price > b.price) return 1;
            if (a.price < b.price) return -1;
            if (a.price == b.price) return 0;
          });
          return pizzaList;
    } 
    if(sortOpt == 'descending') {
        pizzaList.sort ((a,b) => {
          if (a.price > b.price) return -1;
          if (a.price < b.price) return 1;
          if (a.price == b.price) return 0;
        });
        return pizzaList;
    }
    else {
      return 'Error, enter: "ascending" or "descending"'
    }
  };

  // console.log(getSortArrByPrice('ascending'));
  console.log(getSortArrByPrice('descending'));
// console.log(getSortArrByPrice('asfsfw'));


//2)
let Pizza = function(id, img, name, compositionId) {
  this.id;
  this.img = img;
  this.name = name;
  this.compositionId;
};
