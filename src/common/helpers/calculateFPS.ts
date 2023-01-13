import { Resolution, Chipset } from '../enums/enums';

export const calculateFPS = (
  fpsRatio: number,
  resolution: Resolution,
  chipset: Chipset,
  budget: number
) => {
  const defaultResolution = Number(Resolution.FHD);
  const defaultBudget = 2500;

  const resolutionRatio = defaultResolution ** 2 / Number(resolution) ** 2;
  const chipsetRatio = chipset === Chipset.INTEL ? 0.9 : 1;
  const budgetRation = budget / defaultBudget;

  return Math.round(fpsRatio * resolutionRatio * chipsetRatio * budgetRation);
};
