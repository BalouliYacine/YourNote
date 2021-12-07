import React from "react";
import Header from "./component/header";
import Footer from "./component/footer";
// import Note from "./component/note";
import Note from "./component/inputes";
// import Inputs from "./component/inputes";

function App() {
  return (
    <div>
      <Header />
      {/* <Inputs /> */}
      <Note />
      <Footer />
    </div>
  );
}
export default App;
