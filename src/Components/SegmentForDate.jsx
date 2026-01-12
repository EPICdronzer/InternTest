import { useState } from "react";

function SegmentForDate() {
  const [value, setValue] = useState("month");

  const options = [
    { label: "Day", value: "day" },
    { label: "Month", value: "month" },
    { label: "Year", value: "year" },
  ];

  return (
    <div className="p-4 bg-white inline-block">
      <div className="inline-flex bg-gray-100 rounded-lg p-1">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => setValue(option.value)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              value === option.value
                ? "bg-black text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SegmentForDate;