import React from "react";

const Card = ({ userInfo }) => {
  const { name, order } = userInfo;
  return (
    <div style={{ backgroundColor: "#99cfa4", paddingBottom: 5 }}>
      <p>{name}</p>({order})
    </div>
  );
};

export default Card;
