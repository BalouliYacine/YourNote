import React, { useState } from "react";

let newnote = JSON.parse(localStorage.getItem("notes")) || [];
function Note() {
  // States
  const [title, settiyle] = useState("");
  const [content, setcontent] = useState("");
  const [arr, setarr] = useState(newnote);
  // Functions
  function titlechange(e) {
    let Tvalue = e.target.value;
    settiyle(Tvalue);
  }
  function contentchange(e) {
    let Cvalue = e.target.value;
    setcontent(Cvalue);
  }
  function btnCear() {
    settiyle("");
    setcontent("");
  }
  function btnClick() {
    if (title.length > 0) {
      let k0 = Math.floor(Math.random() * 100000);
      newnote.push({
        key: k0,
        title: title,
        content: content,
      });
    }
    setarr(newnote);
    localStorage.setItem("notes", JSON.stringify(newnote));
    settiyle("");
    setcontent("");
  }
  // to ReDO
  function delbtn(e) {
    let g = arr.filter((note) => note.key !== parseInt(e.target.id));
    localStorage.setItem("notes", JSON.stringify(g));
    setarr(function () {
      return g;
    });
  }
  // Elements
  return (
    <div>
      <div className="inputs">
        <input
          onChange={titlechange}
          type="text"
          name="notetitle"
          placeholder="title"
          value={title}
        />
        <input
          onChange={contentchange}
          type="text"
          name="notecontent"
          placeholder="Content"
          value={content}
        />
        <div>
          <button onClick={btnClick} className="addnote">
            Add
          </button>
          <button onClick={btnCear} className="addnote">
            Clear
          </button>
        </div>
      </div>
      <div className="allnotes">
        {arr.map(function (x) {
          return (
            <div className="note" key={x.key}>
              <h1>{x.title}</h1>
              <p>{x.content}</p>
              <button id={x.key} onClick={delbtn}>
                🗑️
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Note;
