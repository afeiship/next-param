type ParamObj = Record<string, any>;
type ParamOptions = {
  separator?: string;
  encode(uriComponent: string | number | boolean): string;
  isEmpty(str: any): boolean;
  transform(key: string, value: any): string;
}

interface NxStatic {
  param(obj: ParamObj, url?: string, options?: any): string;
}
