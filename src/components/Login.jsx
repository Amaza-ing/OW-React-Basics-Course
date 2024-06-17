function Login(props) {
  const user = {
    username: "",
    email: "",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleLogin(user);
  };

  // const setUsername = (e) => {
  //   user.username = e.target.value;
  // };

  const setUserField = (e, field) => {
    user[field] = e.target.value;
  };

  return (
    <section>
      <h2>Login section</h2>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            onChange={(e) => setUserField(e, "username")}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            onChange={(e) => setUserField(e, "email")}
          />
        </fieldset>
        <button>Login</button>
      </form>
    </section>
  );
}

export default Login;
