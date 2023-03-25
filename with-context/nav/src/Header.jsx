import React from "react";

import { useCount } from "host/store";
export const Header = () => {
  const [count, setCount] = useCount();
  return (
    <header className="bg-blue-400 text-white font-bold text-3xl p-5 flex gap-3">
      <div className="flex-grow">Header</div>
      <div>
        count {count}
        <button
          onClick={() => setCount(0)}
          className="bg-red-400 text-white font-bold py-2 px-4 rounded"
        >
          clear count
        </button>
      </div>
    </header>
  );
};
