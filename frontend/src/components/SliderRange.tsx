import MultiRangeSlider from "multi-range-slider-react";
import { memo } from "react";

interface SliderRangeProps {
  min: number;
  max: number;
  minValue: number;
  maxValue: number;
  handleInput: (e: any) => void;
}

function SliderRange({ min, max, maxValue, minValue, handleInput }: SliderRangeProps) {

return (
	<div className="relative">
		<MultiRangeSlider
			min={min}
			max={max}
			step={1}
			minValue={minValue}
			maxValue={maxValue}
			onInput={(e) => {
				handleInput(e);
			}}
      style={{ border: 'none', boxShadow: 'none', padding: '15px 10px' }}
      minCaption={`Min: ${minValue}`}
      maxCaption={`Max: ${maxValue}`}
      ruler={false}
      barInnerColor="bg-slate-900"
		/>
	</div>
	);
}

export default memo(SliderRange);