import { useContext } from "react";
import { useForm } from "../../hooks/useForm";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {
  const [values, handleInputChange, reset] = useForm();
  const { setUser } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser(values);
    reset();
  };

  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />
      <form className="form-group p-3" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Your name"
          onChange={handleInputChange}
          autoComplete="off"
        />
        <input
          type="text"
          className="form-control mt-3"
          name="email"
          placeholder="Your email"
          onChange={handleInputChange}
          autoComplete="off"
        />
        <button className="btn btn-primary mt-3">Sing in</button>
      </form>
    </div>
  );
};
