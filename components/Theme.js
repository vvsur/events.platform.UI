import React from "react";

function Theme(props) {
  return <>{props.children}</>;
}

export default React.memo(Theme);
