import { FC } from 'react';
import { checkNumInRange } from '~/common/helpers/helpers';
import arrowLeft from '~/assets/img/icon/arrow-left.svg';
import arrowRight from '~/assets/img/icon/arrow-right.svg';
import styles from './budget-input.module.scss';

type Props = {
  setBudget: (newValue: number) => void;
  value: number;
  step: number;
  max: number;
  min: number;
};

export const BudgetInput: FC<Props> = ({
  setBudget,
  value,
  step,
  max,
  min,
}) => {
  const handleChange = (newValue: number) => {
    if (checkNumInRange(newValue, min, max)) setBudget(newValue);
  };
  const handleUp = () => handleChange(value + step);
  const handleDown = () => handleChange(value - step);

  return (
    <div className={styles['budget-input']}>
      <div onClick={handleDown} className={styles['budget-arrow']}>
        <img src={arrowLeft} />
      </div>
      <div className={styles['budget-display']}>
        {`$${value.toLocaleString('en-US')}`}
      </div>
      <div onClick={handleUp} className={styles['budget-arrow']}>
        <img src={arrowRight} />
      </div>
    </div>
  );
};
