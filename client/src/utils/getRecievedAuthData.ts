export const getRecievedAuthData = (data : any) => {
  return {
    displayName: data.displayName,
    email: data.email,
    uid: data.uid,
  }
}