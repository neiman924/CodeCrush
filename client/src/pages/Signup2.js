import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/signup.css';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { getAge } from '../utils/helpers';

import Auth from '../utils/auth';
import Navbar from '../components/navbar';

const Signup = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
    age:'',
    gender:'',
    pic:'',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  };
  // console.log('test',formState.name,formState.password,formState.email,formState.age,formState.gender,formState.pic);
  // var dob = new Date(formState.age);  
  // var dobyear = dob.getUTCFullYear(); 
  // var year = new Date();
  // year = year.getFullYear();



  var userage = getAge(formState.age);

  const handleFormSubmit = async (event) => {
    if(!formState.name || !formState.email || !formState.password){
      alert('Failed to submit your comment! please fill all requested fileds.');
      document.location.replace('/');
  }

  if (userage < 18){
    alert('Sorry, we are not able to submit your request! You are ' + userage + ' old!  you have to be at least 18!');
    document.location.replace('/signup');
  }

    event.preventDefault();
    

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
      alert('your profile successfuly created! ');
      //document.location.replace('/');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>   
    <Navbar/>
    <header id="home" className="header text-dark">
    <div className="overlay text-center">

            <main className="flex-row justify-center mb-4">
                <div className="col-12 col-lg-10">
                    <div className="card">
                    <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
                    <div className="card-body">
                    {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
                            ) : (
                                    <form onSubmit={handleFormSubmit} id="register" method="post" enctype="multipart/form-data" >
                                    <div className="register__box">
                                    <label for="user">User Name<i className="fas fa-asterisk"></i></label>
                                    <input id="name" name='name' value={formState.name} onChange={handleChange} type="text" maxLength="64" required placeholder="Username"/>
                                    </div>

                                    <div className="register__box">
                                    <label for="mail">E-mail<i className="fas fa-asterisk"></i></label>
                                    <input id="email" name='email' value={formState.email} onChange={handleChange} type="email" size="64" maxLength="64" required placeholder="Example@gmail.com" pattern=".+@+.+" title="Example@gmail.com"/>
                                    </div>

                                    <div className="register__box">
                                    <label for="password">Password<i className="fas fa-asterisk"></i></label>
                                    <input id="password" name='password' value={formState.password} onChange={handleChange} type="password" minLength="6" required placeholder="Password"/>
                                    </div>

                                      <label className="register__box" for="gender">Gender</label>
                                        <select value={formState.gender} onChange={handleChange} name="gender" id="gender">
                                          <option value="">Select</option>
                                          <option value="femal">Female</option>
                                          <option value="male">Male</option>
                                          <option value="other">Other</option>
                                      </select>


                                    <div className="register__box">
                                    <label for="age">Age</label>
                                    <input value={formState.age} onChange={handleChange} id="age" name="age" type="date" minLength="2" />
                                    </div>

                                    <div className="register__box">
                                    <label for="pic">Choose profile picture</label>
                                    <input value={formState.pic} onChange={handleChange} type="file" id="pic" name="pic" accept="image/*"/>
                                    <div id="preview">
                                        <p>No files currently selected for upload</p>
                                    </div>
                                    </div>

                                    <input type="submit" value="Create profile" id="register__btn" className='btn btn-block btn-primary'/>
                                    </form>  

                            )}

                                    {error && (
                                    <div className="my-3 p-3 bg-danger text-white">
                                        {error.message}
                                    </div>
                            )}
                                    <div id="overlay" className="hidden">
                                    <div id="avatar"></div>
                                    </div>

                    </div>
                    </div>
                </div>
            </main>
    </div>
    </header>
    </div>
  );
};

export default Signup;
