import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/signup.css';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';
import Navbar from '../components/navbar';

const Signup = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    if(!formState.name || !formState.email || !formState.password){
      alert('Failed to submit your comment! please fill all requested fileds.');
      document.location.replace('/');
  }
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
      alert('your profile successfuly created! ');
      document.location.replace('/');
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
                                    <label for="user">User<i className="fas fa-asterisk"></i></label>
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

                                    <div className="register__box conteiner__check">
                                    <label for="genders">Gender</label>
                                    <ul className="conteiner__check">
                                        <li>
                                        <input id="female" name="gender" type="radio" value="Female"/>
                                        <label for="female">Female</label>
                                        </li>
                                        <li>
                                        <input id="male" name="gender" type="radio" value="Male"/>
                                        <label for="male">Male</label>
                                        </li>
                                        <li>
                                        <input id="other" name="gender" type="radio" value="Other"/>
                                        <label for="other">Other</label>
                                        </li>
                                    </ul>
                                    </div>

                                    <div className="register__box">
                                    <label for="age">Age</label>
                                    <input id="age" type="date" minLength="2"/>
                                    </div>

                                    <div className="register__box">
                                    <label for="image">Choose profile picture</label>
                                    <input type="file" id="image" name="image" accept="image/*"/>
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
