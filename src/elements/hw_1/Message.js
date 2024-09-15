import './Message.css';

const Message = ({ text }) => {
  return (
    <div className="msg-container">
      <p className="msg-text">{ text }</p>
    </div>
  );
};

export default Message;