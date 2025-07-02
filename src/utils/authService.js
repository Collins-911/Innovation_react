// src/utils/authService.js

// Normalize user roles in case backend sends 'rol' instead of 'role'
const normalizeUser = (user) => {
  if (user?.rol && !user.role) {
    user.role = user.rol;
    delete user.rol;
  }
  return user;
};

// Retrieve user object from localStorage and normalize it
export function getUser() {
  try {
    const data = JSON.parse(localStorage.getItem("user"));
    if (data?.user) {
      data.user = normalizeUser(data.user);
    }
    return data;
  } catch (e) {
    return null;
  }
}

// Get token from normalized user object
export function getToken() {
  const data = getUser();
  return data?.token || null;
}

// Boolean authentication check
export function isAuthenticated() {
  return !!getToken();
}

// Clear user and token from storage
export function clearUser() {
  localStorage.removeItem("user");
}
