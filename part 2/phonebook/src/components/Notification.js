const Notification = ({message, messageType}) => {
  const notificationStyleSuccess = {
    border: "3px solid green",
    borderRadius: "10px",
    padding: "10px",
    backgroundColor: "lightgrey",
    marginBottom: "10px"
  }
  const notificationStyleFailure = {
    ...notificationStyleSuccess,
    border: "3px solid red"
  }
  if (message === null) {
    return null
  }
  return (
    <div className="notification" style={messageType === "success" ? notificationStyleSuccess : notificationStyleFailure}>
      {message}
    </div>
  )
}

export default Notification;