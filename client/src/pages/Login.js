import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { LOGIN } from '../utils/mutations';
import Navbar from "../components/navbar";
import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    if (!formState.email || !formState.password) {
      alert('Failed to submit your comment! please fill all requested fileds.');
      document.location.replace('/');
    }
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      Auth.login(data.login.token, data.login.user.permission);
      document.location.replace('/matching');
      //localStorage.setItem('status',data.login.user.permission);
      //Auth.login(data.login.token);
    } catch (e) {
      console.log(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <div>
      <Navbar />
      <div>
        {/* <!-- header --> */}
        <header id="home" className="header">
          <div className="overlay text-white text-center">

            <main className="flex-row justify-center mb-4">
              <div className="col-12 col-lg-10">
                <div className="card">
                  <h4 className="card-header bg-dark text-light p-2">Login</h4>
                  <div className="card-body">
                    {data ? (
                      <p>
                        Success! You may now head{' '}
                        <Link to="/">back to the homepage.</Link>
                      </p>
                    ) : (
                      <form onSubmit={handleFormSubmit}>
                        <input
                          className="form-input"
                          placeholder="Your email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                        />
                        <input
                          className="form-input"
                          placeholder="******"
                          name="password"
                          type="password"
                          value={formState.password}
                          onChange={handleChange}
                        />
                        <button
                          className="btn btn-block btn-primary"
                          style={{ cursor: 'pointer' }}
                          type="submit"
                        >
                          Submit
                        </button>
                      </form>
                    )}

                    {error && (
                      <div className="my-3 p-3 bg-danger text-white">
                        {error.message}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </main>

          </div>
        </header>
      </div>

    </div>
  );
};

export default Login;
