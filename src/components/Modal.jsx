import _ from "lodash";

export default function Modal(props) {
  const { store, setStore } = props;

  return (
    <div
      className="modal"
      style={{
        display: store.modalProperty.showModal ? "block" : "none",
      }}
    >
      <div className="background"></div>
      <div className="modal-container">
        <div className="header">
          {store.modalProperty.title}
          <button
            onClick={() => {
              const newStore = _.cloneDeep(store);
              _.set(newStore, "modalProperty.showModal", false);

              setStore(newStore);
            }}
          >
            ×
          </button>
        </div>
        <div className="body">
          <h2
            style={{
              textAlign: "left",
            }}
          >
            {store.modalProperty.content}
          </h2>
          <p>{store.modalText}</p>
        </div>
      </div>
    </div>
  );
}
