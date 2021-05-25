import React, { useState } from "react";

const Togglable = ({
  showFormBtnText,
  hideFormBtnText = "cancel",
  children,
}) => {
  const [showActionButton, setActionButton] = useState(true);

  return (
    <div>
      {showActionButton ? (
        <div>
          <button onClick={() => setActionButton(false)}>
            {showFormBtnText}
          </button>
        </div>
      ) : (
        <div>
          {children}
          <button onClick={() => setActionButton(true)}>
            {hideFormBtnText}
          </button>
        </div>
      )}
    </div>
  );
};

export default Togglable;
