import { Chipset } from '../enums/chipset';
import { Case } from './case';

export type PCConfig = {
  chipset: Chipset;
  case: Case;
  currentColorIndex: number;
};
