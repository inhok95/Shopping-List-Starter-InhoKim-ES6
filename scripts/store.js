import item from './item.js';

let items =  []
let hideCheckedItems =  false

//replacing toggleCheckedForListItem

function findById(id){

    let value = items.find(function (items){
        //console.log("Line 11 = current id: " +id)
        //console.log("type of var " +typeof id)
        //console.log(items)
        return (items.id === id)
    })
    //console.log("findById returning: " +value)
    //console.log(value)
    return value
}



function findAndToggleChecked(id){
    //console.log(id)
    let temp = findById(id)
    //console.log(temp)
    temp.checked = !temp.checked
}




function addItem(name){
    try{
        items.push(item.create(name))
       // console.log(name)
       // console.log(items)
    }catch(error) {
        console.log(`Cannot add item: ${error.message}`)
    }
}



function findAndUpdateName(id, newName){
    try{
        let oldNameObj= findById(id)
        //console.log(oldNameObj)
        //console.log("The name of the obj: " +oldNameObj.name)
        let editName = newName
        //console.log(newName)
        oldNameObj.name = editName
    }catch(error){
        console.log(`Cannot add item: ${error.message}`)
    }
}


function findAndDelete(id){

    //console.log("current items"+items)
    const itemIndex = items.findIndex(item => item.id === id);
    //console.log(index)
    items.splice(itemIndex, 1)
    //console.log("new items: " +items)


}

function toggleCheckedFilter(){

    this.hideCheckedItems
    this.hideCheckedItems = !this.hideCheckedItems
    
    return this.hideCheckedItems
}



  export default {
    items,
    hideCheckedItems,
    findAndToggleChecked,
    addItem,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter
  };


