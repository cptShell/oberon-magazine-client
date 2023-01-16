import { CaseColor } from './case-color';

export type Case = {
  title: string;
  type: string;
  mainHex: string;
  colors: Array<CaseColor>;
};
