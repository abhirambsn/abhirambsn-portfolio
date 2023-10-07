import { Transition } from "@headlessui/react";

const LoadingBar = ({ percentage, color = "red" }) => {
  const numBlocks = parseFloat(percentage) / 25;
  const remainder = parseFloat(percentage) % 25;

  let start_at = 300;

  return (
    <div className="relative w-full">
      <div className="mb-4 flex h-5 overflow-hidden rounded bg-gray-100 text-xs">
        {Array.from({ length: numBlocks }).map((_, i) => {
          const percentage_cur = parseFloat(percentage) - (25 * i);
          const element = (
            <div
                key={i}
              className={`flex flex-col justify-center bg-${color}-${start_at} text-white`}
              style={{ width: `${percentage_cur}%` }}
            ></div>
          );

          start_at += 100;
          return element;
        })}
        {remainder > 0 && (
          <div
            className={`flex flex-col justify-center bg-${color}-${start_at} text-white`}
            style={{ width: `${remainder}%` }}
          ></div>
        )}
      </div>
      <div className="mb-2 flex items-center justify-between text-xs">
        <div className="text-gray-300">Progress</div>
        <div className="text-gray-300">{percentage}%</div>
      </div>
    </div>
  );
};

export default LoadingBar;
