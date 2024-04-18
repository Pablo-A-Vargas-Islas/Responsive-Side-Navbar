const Alert = ({ message, type }) => {
  return (
    <div className={`alert ${type}`} role="alert">
      {message}
    </div>
  );
};

export default Alert;
