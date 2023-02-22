type ScreenSizeType = {
  width: number | undefined
  height: number | undefined
}
export interface IContext {
  windowSize: ScreenSizeType;
  deviceType: string | undefined;
}