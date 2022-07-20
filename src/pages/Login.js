import React, {useEffect, useState} from 'react';
import Input from "../components/Input";
import {useDispatch} from "react-redux";
import {loginRequest} from "../store/actions/users";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

function Login(props) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const [errors,setErrors] = useState({});
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  useEffect(()=>{
    if (token){
      navigate('/home')
    }

  },[])

  const handleChangeLogin = (key, val) => {
    setFormData({ ...formData, [key]: val })
  }
  const handleSubmitLogin = async (ev) => {
    ev.preventDefault();
    dispatch(loginRequest(formData, (err, data) => {
      if (err) {
        setErrors(err.errors?err.errors:err.message)
        toast.error(`invalid email or password `);
      }

      if (data?.status === 'ok'){
        window.location.href = '/home'
      }
    }))

  }
  return (
      <div className="login">
        <form onSubmit={handleSubmitLogin}>
          <label htmlFor="chk" aria-hidden="true">Login</label>
          <Input type="email" name="email" placeholder="Email" required=""
                 value={formData.email || ''}
                 onChange={(ev) => handleChangeLogin('email', ev.target.value)}
                 error={errors.email || ''}
          />
          <Input type="password" name="password" placeholder="Password" required=""
                 value={formData.password || ''}
                 onChange={(ev) => handleChangeLogin('password', ev.target.value)}
                 error={errors.password || ''}
          />
          <button>Login</button>
        </form>
      </div>
  );
}

export default Login;
