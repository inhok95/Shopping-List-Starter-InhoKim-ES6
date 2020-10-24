

function validateName(name){
    if (name === '') throw new TypeError("Name must not be blank")
 

}

function create(input){
    let item = {
        id: cuid(),
        name: input,
        checked: false
    }
    return item
}

export default {
    create,
    validateName
};

/*
function create(input){
    let item = {
        id: cuid(),
        name: input,
        checked: false
    }
    return item
}
*/