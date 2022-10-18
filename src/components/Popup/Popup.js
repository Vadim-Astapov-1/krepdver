import './Popup.css';

function Popup({ isOpen, name, children }) {
  return <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>{children}</div>;
}

export default Popup;
