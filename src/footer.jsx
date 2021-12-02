import React from "react";

let date = new Date().getFullYear();

function footer() {
  return (
    <footer>
      <p>Copyright ⓒ {date} </p>
    </footer>
  );
}
export default footer;
