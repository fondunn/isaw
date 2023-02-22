import { getCookie } from "./getCookie";

export const createUserData = () => {
  return {
    displayName: getCookie("displayName"),
    email: getCookie("email"),
    uid: getCookie("uid"),
    totalFilms: Number(0),
    totalTime: Number(0),
    collection: "",
    genres: ''
  };
}