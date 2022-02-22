import { StatusEnum } from '../enums/StatusEnum';

export interface IContractor {
  avatar: string;
  name: string;
  type: string;
  startDate: string;
  amount: number;
  status: StatusEnum;
}