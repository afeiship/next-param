type ParamObj = Record<string, any>;
type EncodeFunciton = (uriComponent: string | number | boolean) => string;
type EncodeTypes = 'uri' | 'uri2' | 'base64';
type ParamOptions = {
  separator?: string;
  encode: EncodeTypes | EncodeFunciton;
  isEmpty(str: any): boolean;
  transform(key: string, value: any): string;
};

interface NxStatic {
  param(obj: ParamObj, url?: string, options?: any): string;
}
