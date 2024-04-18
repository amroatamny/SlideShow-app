const TOKEN = "token";
export const setToken = (payload) => {
  const payloadSTR = JSON.stringify(payload);
  localStorage.setItem("token", payloadSTR);
};
export const removeToken = () => {
  localStorage.removeItem("token");
};
export const getUser = () => {
  const getUserLS = localStorage.getItem("token");
  if (!getUserLS) return null;
  else {
    const tokenGetback = JSON.parse(getUserLS);
    console.log(tokenGetback);
  }
};
