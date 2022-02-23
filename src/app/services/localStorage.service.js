const TOKEN_KEY = "jwt-token";
const REFRESH_KEY = "jwt-refresh-token";
const EXPIRES_KEY = "jwt-expires";
const LOGIN_STATUS = "registered";
const USERID_KEY = "user-local-id";

export function setTokens({
    refreshToken,
    idToken,
    expiresIn = 3600,
    localId,
    registered = false
}) {
    const expiresDate = new Date().getTime() + expiresIn * 1000;
    localStorage.setItem(TOKEN_KEY, idToken);
    localStorage.setItem(REFRESH_KEY, refreshToken);
    localStorage.setItem(EXPIRES_KEY, expiresDate);
    localStorage.setItem(LOGIN_STATUS, registered);
    localStorage.setItem(USERID_KEY, localId);
}
export function getAccessToken() {
    return localStorage.getItem(TOKEN_KEY);
}
export function getRefreshToken() {
    return localStorage.getItem(REFRESH_KEY);
}
export function getTokenExpiresDate() {
    return localStorage.getItem(EXPIRES_KEY);
}
export function getLoginStatus() {
    return localStorage.getItem(LOGIN_STATUS);
}
export function getUserId() {
    return localStorage.getItem(USERID_KEY);
}

const localStorageService = {
    setTokens,
    getAccessToken,
    getRefreshToken,
    getTokenExpiresDate,
    getLoginStatus,
    getUserId
};

export default localStorageService;
