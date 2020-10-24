import store from './store';
import item from './item';
import shoppingList from './shopping-list';


const main = function () {

  


  shoppingList.bindEventListeners();
  shoppingList.render();
  
};

$(main);

