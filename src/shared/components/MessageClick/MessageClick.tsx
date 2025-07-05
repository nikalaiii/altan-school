import ReactDOM from "react-dom";
import styles from "./messageClick.module.scss";
import { useClickContext } from "../../contexts/ClickContext/ClickContext";

export const MessageClick = () => {
  const { isActive } = useClickContext();

  if (!isActive) return null;

  return ReactDOM.createPortal(
    <div className={styles.message}>
      ✅ You clicked a button or image
    </div>,
    document.body
  );
};
