import React from "react";
import "./Styles/MainButton.scss";

const MainButton = (props) => {
  const { content, style, onClick } = props;
  // if (props.style)
  //   return (
  //     <button style={props.style} className={"landing-button"}>
  //       {content}
  //     </button>
  //   );
  return (
    <button onClick={onClick} style={style} className={"landing-button"}>
      {content}
    </button>
  );
};

export default MainButton;
