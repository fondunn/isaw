import { navigateTo } from "@/utils/navigateTo"

export const getPathkey = (path: string) => {
  if (path === '/auth/signin') return 'signin'
  else if (path === '/auth/signup') return 'signup'
}

export const changeDisplayedTabHandler = (navigate: Function ,tab: 'signin' | 'signup') => {
  navigateTo(navigate, `auth/${tab}`)
}

interface ITabs {
  [key: string]: number
}
export const tabs: ITabs = {
  signin: 1,
  signup: 2,
}