// utils/authService.js

export function getUser() {
  const data = JSON.parse(localStorage.getItem("user"));
  if (data?.user?.rol && !data.user.role) {
    data.user.role = data.user.rol;
    delete data.user.rol;
  }
  return data;
}

export function getToken() {
  const data = getUser();
  return data?.token || null;
}

export function isAuthenticated() {
  return !!getToken();
}

export function clearUser() {
  localStorage.removeItem("user");
}
