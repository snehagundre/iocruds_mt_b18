
export type activeness = 
'active' | 'inactive';

export interface IStudent {
  fname: string;
  lname: string;
  nickname: string;
  email: string;
  contact: number;
  isActive: activeness;
  id:string
}