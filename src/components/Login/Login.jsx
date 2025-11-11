import { useState } from "react"
import { useAuthContext } from "../../context/AuthContext/useAuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const [userForm, setUserForm]= useState({name: "", password:""});
  const {user, login } = useAuthContext();

  const navigate = useNavigate()

  if(user){
    return <Navigate to="/admin/products-entry" replace/>;
  }

  const handleChange = (e) => {
    const {name, value}= e.target;
    setUserForm({...userForm, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const success = login(userForm.name, userForm.password);

    if(success){
        navigate("/admin/products-entry");
    }
    else{
        alert("Credenciales incorrectas. Intente nuevamente")
        setUserForm({name: "", password:""})
    }

  };

   return (
    <div className={styles.formContainer}>
      <form className={styles.formBox} onSubmit={handleSubmit}>
        <h2>Iniciar sesión</h2>

        <div className={styles.inputGroup}>
          <label>Usuario:</label>
          <input
            type="text"
            name="name"
            value={userForm.name}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            value={userForm.password}
            onChange={handleChange}
          />
        </div>

        <button className={`${styles.buttonBase} ${styles.btnBlack}`} type="submit">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};
export default Login