import { IOwner } from "./IOwner";

export interface IReceita {
  id: number;
  name: string;
  description: string;
  methodPreparation?: string;
  ingredients?: string;
  imgUrl?: string;
  assessment?: number;
  owner?: IOwner;
}