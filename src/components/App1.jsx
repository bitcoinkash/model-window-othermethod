import React from "react";
import _ from "lodash";

const modals = [
  { id: "1", title: "Modal 1", content: "Content 1", text: "Text 1" },
  { id: "2", title: "Modal 2", content: "Content 2", text: "Text 2" },
  { id: "3", title: "Modal 3", content: "Content 3", text: "Text 3" },
  { id: "4", title: "Modal 4", content: "Content 4", text: "Text 4" },
  { id: "5", title: "Modal 5", content: "Content 5", text: "Text 5" },
];

export default function App1({ store, setStore }) {
  return (
    <div id="app">
      <h1>Modal</h1>
      <div className="container">
        {modals.map((modal, index) => {
          return (
            <button
              key={index}
              id={modal.id}
              onClick={() => {
                const newStore = _.cloneDeep(store);
                _.set(newStore, "modalProperty.showModal", true);
                _.set(newStore, "modalProperty.title", modal.title);
                _.set(newStore, "modalProperty.content", modal.content);
                _.set(newStore, "modalText", modal.text);

                setStore(newStore);
              }}
            >
              {modal.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}
