
function Registration() {
  return (
    <>
      <h1>Registration</h1>
      <form>
        <label>Email<input type="email"></input></label>
        <label>Username<input type="text"></input></label>
        <label>Password<input type="password"></input></label>
        <button type="submit">Sign Up!</button>
      </form>
    </>
  );
};

export default Registration