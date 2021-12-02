import React from "react";
import notes from "./TheNotes";

function Info(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content} </p>
    </div>
  );
}
function Note() {
  return (
    <div>
      {notes.map((x) => (
        <Info key={x.key} title={x.title} content={x.content} />
      ))}
    </div>
  );
}
export default Note;
