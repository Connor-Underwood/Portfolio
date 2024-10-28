import { motion, useMotionValue, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useResizedWidth } from "../../utils/useResizedWidth";

const calculateValueFromWidth = (
  value,
  step,
  minValue,
  maxValue,
  truckWidth
) => {
  return Math.floor((minValue + (value / truckWidth) * maxValue) / step) * step;
};

const calculateWidthFromValue = (
  value,
  step,
  minValue,
  maxValue,
  truckWidth
) => {
  const val = value < minValue ? minValue : value;
  const result = ((Math.floor(val / step) * step) / maxValue) * truckWidth;
  return result > truckWidth ? truckWidth : result;
};

const formatTime = (time) => {
  const mins = Math.floor(time / 60)
  const secs = time % 60 //ayo?
  let minString = `${mins}`  
  let secsString = `${secs}`
  if(secs < 10) {
    secsString = `0${secs}`
  }
  return `${minString}:${secsString}`
}

const Slider = (props) => {
  const { initValue = 0, min, max, step, onChange, playing } = props;
  const [value, setValue] = useState(0);
  const [truckRef, truckWidth] = useResizedWidth();
  const [thumbRef, thumbWidth] = useResizedWidth();

  const containerRef = useRef(null);

  const x = useMotionValue(0);
  const widthX = useTransform(x, (value) => {
    //console.log(`truck:${truckWidth}, thumb:${thumbWidth}`);
    return value + thumbWidth;
  });

  useEffect(() => {
    const width = calculateWidthFromValue(value, step, min, max, truckWidth);
    x.set(width);
    /*console.log(
      `value:${value}, step:${step}, min:${min}, max:${max}, truck:${truckWidth}, thumb:${thumbWidth}`
    );*/
  }, [value, step, min, max, truckWidth]);

  const handleDrag = (event, info) => {
    const val = calculateValueFromWidth(x.get(), step, min, max, truckWidth);
    setValue(val);
    onChange && onChange(val);
  };

  useEffect(() => {
      if(playing) {
          const interval = setInterval(() => {
              setValue((value) => value + 1)
          }, 1000)
          return () => clearInterval(interval)
      }
  })

  return (
    <div className='w-full'>
      <motion.div
        ref={containerRef}
        className="relative w-full h-2 px-2 bg-gray-600 rounded-full"
      >
        <motion.div ref={truckRef} className="relative w-full">
          <motion.span
            ref={thumbRef}
            tabIndex={0}
            drag="x"
            dragConstraints={containerRef}
            dragElastic={0}
            dragMomentum={false}
            onDrag={handleDrag}
            className="absolute top-0 z-10 w-4 h-4 -mt-1 -ml-2 bg-indigo-500 rounded-full shadow cursor-pointer"
            style={{ x }}
          />
        </motion.div>
        <motion.span
          className="absolute top-0 left-0 h-2 bg-indigo-500 rounded-full"
          style={{ width: widthX }}
        />
        
      </motion.div>
      <div className='mt-1 relative flex items-center justify-between font-semibold text-sm text-gray-400'>
        <p>{formatTime(value)}</p>
        <p>{formatTime(max)}</p>
      </div>
    </div>
  );
};

export default  Slider