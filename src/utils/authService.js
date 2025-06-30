import { useCookies } from 'react-cookie';
import { useCallback } from 'react';

const useAuth = () => {
    const [cookies] = useCookies(['token']);


    const isAuthenticated = useCallback(() => {
        return cookies.token !== undefined && cookies.token !== null;
    }, [cookies.token]);

    return {isAuthenticated};
}
export default useAuth;


// export function getUser(){
//     _userData = JSON.parse(getData("user"))
//     return _userData;
// }

// function getData(name) {
//     return localStorage.getItem(name)
    
//     // const value = `; ${document.cookie}`;
//     // const parts = value.split(`; ${name}=`);
//     // if (parts.length === 2) 
//     //     return parts.pop().split(';').shift();
// }