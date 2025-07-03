// Return only user
export function getUser() {
  const data = JSON.parse(localStorage.getItem("user"));
  if (!data?.user) return null;

  if (data.user.rol && !data.user.role) {
    data.user.role = data.user.rol;
    delete data.user.rol;
  }

  return data.user;
}

// Return only token
export function getToken() {
  const data = JSON.parse(localStorage.getItem("user"));
  return data?.token || null;
}

// Return both if needed
export function getAuthData() {
  const data = JSON.parse(localStorage.getItem("user"));
  if (!data?.user || !data?.token) return null;

  if (data.user.rol && !data.user.role) {
    data.user.role = data.user.rol;
    delete data.user.rol;
  }

  return {
    user: data.user,
    token: data.token
  };
}

export function isAuthenticated() {
  const token = getToken();
  const isAuth = !!token;
  console.log("Authenticated:", isAuth); // 🔍 Will show true or false in console
  return isAuth;
}


export function clearUser() {
  localStorage.removeItem("user");
}
