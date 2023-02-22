export const navigateTo = (navigate: Function, path: string, key?: string) => {
  if (key) {
    navigate(`${path}/${key}`)
  } else {
    if (path === '/') {
      navigate('/')
    } else {
      navigate(`/${path}`)
    }
    
  }
}