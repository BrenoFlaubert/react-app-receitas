import { IOwner } from "./IOwner";

export interface IReceita {
  id: number;
  name: string;
  imgUrl: string;
  description: string;
  assessment: number;
  owner: IOwner;
}