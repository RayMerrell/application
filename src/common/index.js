export const writeCookie =(key, value, days) =>{
    //key = name
    //value = jwt token
    //days = when the cookie expires
    let expiryDate = new Date();
    days = days || 365;
    expiryDate.setDate(expiryDate.getDate() + days);

    let cookie = document.cookie = key + "=" + value + "; expires=" + expiryDate.toGMTString() + "; path=/";
    return cookie;
}
export const getCookie =(cookieName) =>{
    const regExp = new RegExp(`(?<=${cookieName}=)[^;]*`);
    console.log("regExp", regExp);
    try {
        let cookie = document.cookie.match(regExp)[0]; //will cause typeError if cookie not found
        return cookie;
    } catch (error) {
        console.log("Cookie not found...", error);
        return false;
    }
}