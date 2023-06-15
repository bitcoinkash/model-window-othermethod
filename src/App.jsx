import React, { useState } from "react";
import App1 from "./components/App1";
import Modal from "./components/Modal";
import "./components/button.scss";
import "./components/Modal.scss";

import "./App.scss";

export default function App() {
  const [store, setStore] = useState({
    modalProperty: {
      showModal: false,
      title: "Modal 1",
      content: "Content 1",
    },
    modalText: "Content 1",
  });

  return (
    <>
      <App1 store={store} setStore={setStore} />
      <Modal store={store} setStore={setStore} />
    </>
  );
}
