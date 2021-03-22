//retorna el nombre del usuario de la sesión actual
export const getUser = () => {
    const userStr = sessionStorage.getItem('username');
    if (userStr) return JSON.parse(userStr);
    else return null;
}

//retorna el id del usuario de la sesión actual
export const getId = () => {
    const userId = sessionStorage.getItem('id');
    if (userId) return JSON.parse(userId);
    else return null;
}

//retorna el token de la sesión actual
export const getToken = () => {
    return sessionStorage.getItem('token') || null;
}

//remueve el token de la sesión actual
export const removeUserSession = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
}

//setea el token, nombre de usuario y id de la sesión actual
export const setUserSession = (token, username, id) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('username', JSON.stringify(username));
    sessionStorage.setItem('id',id);
}