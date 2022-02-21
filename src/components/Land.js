import Backdrop from "./Backdrop";
import Modal from "./Modal";
import { useState } from "react";


function WriteLand(props)  {
  const [modalIsOpen, setModalIsOpen] = useState();

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }


  return (
    <div className="land">
      <button
        id="landBtn"
        onClick={deleteHandler}
        style={{ background: props.color }}
      >
        {props.id}
      </button>
      {modalIsOpen && <Modal landId={props.id} landType={props.type} landOwner={props.owner} landPrice={props.price} onCancel={closeModalHandler}/>}
      {modalIsOpen && <Backdrop onClick={closeModalHandler}/>}
    </div>
  );
}

class Land {
  constructor(id, type, x, y, owner, price) {
    this.id = id;
    this.type = type;
    this.x = x;
    this.y = y;
    this.price = price;
    this.owner = owner;
    this.color = this.setColorByType();
  }

  setColorByType() {
    if (this.type === "nLand") {
      return "brown";
    } else if (this.type === "road") {
      return "grey";
    } else if (this.type === "park") {
      return "green";
    }
  }
}

export { Land };

export default WriteLand;
