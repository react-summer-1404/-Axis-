import React from "react";
 export const StatusBadge = ({ status }) => {
    let classes = 'inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full ';
    let text = status;
  
    if (status === "تایید شده") {
      classes += 'bg-green-100 text-green-800';
    } else if (status === "در انتظار تایید") {
      classes += 'bg-orange-100 text-orange-800';
    } else {
      classes += 'bg-gray-100 text-gray-800';
    }
  
    return (
      <span className={classes}>
        {text}
      </span>
    );
  };