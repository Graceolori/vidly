import React from "react";

const Like = (props) => {
  let heart = "fa fa-heart";
  if (!props.liked) heart += "-o";
  return (
    <i
      onClick={props.onClick}
      className={heart}
      style={{ cursor: " pointer" }}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
