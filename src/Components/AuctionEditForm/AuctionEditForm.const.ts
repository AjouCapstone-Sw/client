import { SliderProps as MSliderProps } from '@mui/material';

export const AUCTION_DURATIONS = new Array(12)
  .fill(0)
  .map((_, idx) => ({ value: idx * 5 + 5, label: `${idx * 5 + 5}분` }));

export const SLIDER_PROPS: MSliderProps = {
  'aria-label': 'Small steps',
  defaultValue: 15,
  step: 5,
  valueLabelDisplay: 'auto',
  marks: AUCTION_DURATIONS,
  min: 5,
  max: 60,
};
