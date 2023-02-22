export interface IContextChildrenProps {
  children: React.ReactNode;
}

export interface IAuthorize {
  email: string,
  uid: string,
  displayName: string,
}

export interface IContext {
  user: IAuthorize,
  login: Function,
  logout: Function,
}