function receivesAFunction(cb){
    cb()
}


function returnsANamedFunction(){
    return function print(){
        console.log("This is printed")
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("This has no meaning")
    }
}