export type tcat = 'product' | 'category';

export interface IProduct {
  pname: string;
  pdesc: string;
  pid: string;
  pcat: tcat;
}
