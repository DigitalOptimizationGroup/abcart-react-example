import React from "react";

export default ({ children }) => (
    <div
        style={{
            maxWidth: "600px",
            fontSize: "14px",
            margin: "20px 0 5px 0",
            lineHeight: "18px"
        }}
    >
        {children}
    </div>
);
