import React from "react";

const TableHeader = ({ headerContent, minSize, cols }) => {
  return (
    <div style={{ minWidth: minSize }} className={`bg-sky-50 p-5`}>
      <div className={`grid gap-2 grid-cols-${cols}`}>
        {headerContent?.map((header, index) => (
          <h2
            className='whitespace-nowrap font-bold text-xs capitalize'
            key={index}
          >
            {header}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default TableHeader;
