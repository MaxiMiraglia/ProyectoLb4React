export const getUser = () => {
    
    /*antes estaba:
    const userStr = sessionStorage.getItem("user");
    if(userStr)
    {
        return JSON.parse(userStr);
    }
    else
    {
        return null;
    }*/

    //ahora:
    const userStr = JSON.stringify(sessionStorage.getItem("user"));
    if (userStr) 
    {
        //console.log(user.username); <-- lo uso como testeo pero devuelve undefined, chequear eso
        return JSON.parse(userStr);
    }
    else return null;
}

export const getToken = () => {
    return sessionStorage.getItem("token") || null;
}

export const setUserSession = (token, user) => {
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("user", JSON.stringify(user));
}

export const removeUserSession = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
}