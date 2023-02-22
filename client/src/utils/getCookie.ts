export const getCookie = (key: string) => {
  const res = document.cookie.split(";");

  const finded = res.find((i) => i.includes(key));
  if (!finded) return null;
  else {
    return finded.split(`${key}=`)[1];
  }
};