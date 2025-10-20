import React, { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-[#FAF8FF]">
      {items.map((item, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            onClick={() => toggle(index)}
            className={`w-full flex justify-between items-center text-left py-4 px-4 font-semibold hover:bg-gray-50 ${
              openIndex === index ? 'text-blue-600' : 'text-black'
            }`}
          >
            {item.question}
            {openIndex === index ? (
              <FaMinus size={20} />
            ) : (
              <FaPlus size={20} />
            )}
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-gray-600 text-sm text-left">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
