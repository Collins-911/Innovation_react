let  _userData;

export function isAuthenticated(){
    return getData("user") ? true : false
}

export function getUser(){
    _userData = JSON.parse(getData("user"))
    return _userData;
}

function getData(name) {
    return localStorage.getItem(name)
    
    // const value = `; ${document.cookie}`;
    // const parts = value.split(`; ${name}=`);
    // if (parts.length === 2) 
    //     return parts.pop().split(';').shift();
}