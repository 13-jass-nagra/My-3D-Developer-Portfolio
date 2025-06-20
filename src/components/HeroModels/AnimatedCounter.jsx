import { useRef } from "react";
import CountUp from "react-countup";
import { counterItems } from "../../constants/index.js"; // ✅ Fixed path


const AnimatedCounter = () => {
  const counterRef = useRef(null);

  return (
    <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item,index) => (
          <div key={item.label} className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center">
            <div className="counter-number text-white-50 text-5xl font-bold mb-2">
              <CountUp end={item.value} duration={3} delay={0.2} suffix={item.suffix} />
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
