// Return only user
export function getUser() {   // fetches the saved user object
  const data = JSON.parse(localStorage.getItem("user"));
  if (!data?.user) return null;

  if (data.user.rol && !data.user.role) {   // normalise inconsistent API response
    data.user.role = data.user.rol;
    delete data.user.rol;
  }

  return data.user;    // returns the user object 
}

// Return only token
export function getToken() {   // fetches the saved authentication token
  const data = JSON.parse(localStorage.getItem("user"));  // retrieves and parses user from local storage
  return data?.token || null;  // returns the token if it exists  otherwise returns null
}

// Return both if needed
export function getAuthData() {    //  fetches both user and token.
  const data = JSON.parse(localStorage.getItem("user"));   //  retrieves and parses user from local storage 
  if (!data?.user || !data?.token) return null;    // if either user or token is missing, returned null

  if (data.user.rol && !data.user.role) {   // normalise inconsistent API response
    data.user.role = data.user.rol;
    delete data.user.rol;
  }

  return {
    user: data.user,  // returns an object containing both user and token
    token: data.token
  };
}

// returns the boolean authentication status 
export function isAuthenticated() {
  const token = getToken();
  const isAuth = !!token;   // converts the token value into a boolean
  console.log("Authenticated:", isAuth); // 🔍 Will show true or false in console
  return isAuth;
}

// removes the user data ie logs out
export function clearUser() {
  localStorage.removeItem("user");
}
