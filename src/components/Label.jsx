import React from "react";

const Label = ({ label, dataLabel, className }) => {
  return (
    <div className={className}>
      <p className="text-primary font-bold">{label}</p>
      <p>{dataLabel}</p>
    </div>
  );
};

export default Label;
