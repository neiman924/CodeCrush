import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../utils/mutations';
import Navbar from "../components/navbar";

const CommentForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    comment: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const [addComment] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState, formState.name, formState.email, formState.comment);
    if (!formState.name || !formState.email || !formState.comment) {
      alert('Failed to submit your comment! please fill all requested fileds.');
      document.location.replace('/contact');
    }
    try {
      // eslint-disable-next-line no-unused-vars
      const { data } = await addComment({
        variables:
          { ...formState }
      });
    } catch (e) {
      console.error(e);
    }
    alert('Thanks for contacting us, Your message was sent successfully, and we will contact you as soon as possible!');
    document.location.replace('/');
    setFormState({ name: '', comment: '', email: '' });
  };

  return (
    <div>
      <Navbar />
      <header id="home" className="header">
        <div className="overlay text-white text-center">
          {/* <!-- Start Content Page --> */}
          <div className="container-fluid py-5">
            <div className="col-md-6 m-auto text-center">
              <p>

              </p>
            </div>
          </div>

          {/* <!-- Start Contact --> */}
          <div className="container py-5">
            <div className="row py-5">
              <form onSubmit={handleFormSubmit} className="col-md-9 m-auto" method="post" >
                <div className="row">
                  <div className="form-group col-md-6 mb-3">
                    <label for="inputname"></label>
                    <input
                      type="text"
                      className="form-control mt-1"
                      id="name"
                      name="name"
                      placeholder="Name"
                      value={formState.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group col-md-6 mb-3">
                    <label for="inputemail"></label>
                    <input
                      type="email"
                      className="form-control mt-1"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={formState.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label for="inputmessage"></label>
                  <textarea
                    className="form-control mt-1"
                    id="comment"
                    name="comment"
                    placeholder="Message"
                    rows="8"
                    value={formState.comment}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="row">
                  <div className="col text-end mt-2">
                    <button type="submit" className="btn btn-success btn-lg px-3">Let’s Talk</button>
                  </div>
                </div>
              </form>

            </div>
          </div>
          {/* <!-- End Contact --> */}
        </div>
      </header>
    </div>
  );
}

export default CommentForm;
