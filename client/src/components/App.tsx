import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate.tsx";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";

const App = () => {
  return (
    <div className="">
      <Router>
        <Header />
        <Route path={"/"} exact component={StreamList} />
        <Route path={"/streams/new"} exact component={StreamCreate} />
        <Route path={"/streams/delete"} exact component={StreamDelete} />
        <Route path={"/streams/edit"} exact component={StreamEdit} />
        <Route path={"/streams/show"} exact component={StreamShow} />
      </Router>
    </div>
  );
};

export default App;
