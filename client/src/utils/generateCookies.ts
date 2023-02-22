export const generateCookies = (cookieKeyArray: { key: string, value: string, expires: number }[]) => {
  cookieKeyArray.forEach(({key, value, expires} )  => {
    generateCookie(key, value, expires)
  })
}

export const generateCookie = (key: string, value: string, expires: number) => {
  document.cookie = `${key}=${value}; domain=localhost; max-age=${expires}`;
};
