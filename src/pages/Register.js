import React, {useState} from 'react';
import '../assets/style/style.css'
import {useDispatch} from "react-redux";
import {registerRequest} from "../store/actions/users";
import {toast} from "react-toastify";
import Input from "../components/Input";

function Register(props) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const [errors,setErrors] = useState({});
  const handleChange = (key, val) => {
    setFormData({...formData, [key]: val})
  }
  const handleSubmit = async (ev) => {
    ev.preventDefault();

    dispatch(registerRequest(formData, (err, data) => {
      if (err) {
        setErrors(err.errors)
        toast.error(`Invalid Params`)
      }
      if (data?.status === 'ok') {
        window.location.href = '/home'
      }
    }))
  }

  return (
      <div className='wraper'>
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true"/>
          <div className="signup">
            <form onSubmit={handleSubmit}>
              <label htmlFor="chk" aria-hidden="true">ADD Workers</label>
              <Input type="text" name="firstName" placeholder="Firts Name" required=""
                     value={formData.firstName || ''}
                     onChange={(ev) => handleChange('firstName', ev.target.value)}
                     error={errors.firstName}
              />
              <Input type="text" name="lastName" placeholder="Last Name" required=""
                     value={formData.lastName || ''}
                     onChange={(ev) => handleChange('lastName', ev.target.value)}
                     error={errors.lastName}
              />
              <div className='divGender'>
                <Input type="number" name="age" placeholder="Age" required="" className='ageInput'
                       value={formData.age || ''}
                       onChange={(ev) => handleChange('age', ev.target.value)}
                       error={errors.age}
                />
                <div className='divchek'>
                  <Input type="radio" name="gender" id='male' required=""
                         value={formData.gender || 'male'}
                         onChange={(ev) => handleChange('gender', ev.target.value)}
                  />
                  <label htmlFor="male" className='gender'>Male</label>
                </div>
                <div className='divchek2'>
                  <Input type="radio" name="gender" id='female' required=""
                         value={formData.gender || 'female'}
                         onChange={(ev) => handleChange('female', ev.target.value)}
                  />
                  <label htmlFor="female" className='gender'>Female</label>
                </div>
              </div>
              <Input type='tel' name="phoneNumber" placeholder="Phone Numer" required=""
                     value={formData.phoneNumber || ''}
                     onChange={(ev) => handleChange('phoneNumber', ev.target.value)}
                     error={errors.phoneNumber}
              />
              <Input type="email" name="email" placeholder="Email" required=""
                     value={formData.email || ''}
                     onChange={(ev) => handleChange('email', ev.target.value)}
                     error={errors.email}
              />
              <Input type="password" name="password" placeholder="Password" required=""
                     value={formData.password || ''}
                     onChange={(ev) => handleChange('password', ev.target.value)}
                     error={errors.password}
              />
              <button>Sign up</button>
            </form>
          </div>
        </div>
      </div>
  );
}

export default Register;
