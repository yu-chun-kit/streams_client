import { createPortal } from "react-dom";
import history from "../history";
import { connect } from "react-redux";

type Props = {
  title: string;
  content: string;
  actions: JSX.Element;
  onDisMiss: () => void;
};

const Modal = ({ title, content, actions, onDisMiss }: Props) => {
  return createPortal(
    <div onClick={onDisMiss} className="ui dimmer modals visible active">
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{title}</div>
        <div className="content">{content}</div>

        <div className="actions">{actions}</div>
      </div>
    </div>,
    document.getElementById("modal") as Element
  );
};

export default Modal;
