import React, { useState } from "react";
import "./modal.css";

const ReusableModalComp = ({ children }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(true)}>Open Modal</button>
      {show && (
        <div className="modal-background" onClick={() => setShow(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <labe>Name: </labe>
            <input />
            <button onClick={() => setShow(false)}>Close Modal</button>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default ReusableModalComp;
