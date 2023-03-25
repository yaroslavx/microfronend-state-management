import React from "react";
export const Header = ({ count, onClear }) => {
  return (
    <header className="bg-blue-400 text-white font-bold text-3xl p-5 flex gap-3">
      <div className="flex-grow">Header</div>
      <div>
        count {count}
        <button
          onClick={onClear}
          className="bg-red-400 text-white font-bold py-2 px-4 rounded"
        >
          clear count
        </button>
      </div>
    </header>
  );
};
