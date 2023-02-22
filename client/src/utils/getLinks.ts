import { Links } from "../Routes/Links"

export const getLinks = (uid: string) => {
  if (!uid) return Links.PUBLIC
  if (uid && uid !== process.env.REACT_APP_ADMIN_UID) return Links.PRIVATE
  if (uid && uid === process.env.REACT_APP_ADMIN_UID) return Links.ADMIN
}