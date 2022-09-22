import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER } from '../utils/queries';
import ProfilePic from '../components/ProfilePic';
import { getRandomItem } from '../utils/helpers';

import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../utils/mutations';
import { getAge } from '../utils/helpers';
import { Link } from 'react-router-dom';
import '../assets/css/signup.css';


import Auth from '../utils/auth';
import Navbar from './navbar';

export default function EditProfile () {

  if(!Auth.loggedIn()){
    document.location.replace('/login');
  };

  const [updateUser, { error, udata }] = useMutation(UPDATE_USER);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
    age:'',
    gender:'',
    pic:''
  });
  var randomImg = getRandomItem(Object.keys(ProfilePic).length);
  var randomPic = (Object.keys(ProfilePic)[randomImg]);

  var loginuser = Auth.getProfile().data;
  //var useraccount = loginuser.email.split("@")[0];

  const userID = loginuser._id;
  console.log(userID);

  const { loading, data } = useQuery(QUERY_SINGLE_USER, {
    // pass URL parameter
    variables: { _id: userID },
  });
  
  var userInfo = data?.user || [];
  console.log(userInfo);
  var userage = getAge(userInfo.age);

  if (loading) {
    return <div>Loading...</div>;
  }


  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    if(!formState.password){
      alert('Failed to submit your comment! please fill all requested fileds.');
      //document.location.replace('/');
  }
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await updateUser({_id: userInfo._id},
        {
        variables: { 
          // name: userInfo.name,
          // email: userInfo.email,
          password: formState.password,
          gender: formState.gender,
          age: formState.age,
          pic: formState.pic
         },
      });

      Auth.login(data.addUser.token);
      alert('your profile successfuly updated! ');
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
                    <h4 className="card-header bg-dark text-light p-2">Your profile Info</h4>
                    <div className="card-body">
                    {udata ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
                            ) : (
                                    <form onSubmit={handleFormSubmit} id="register" method="post" enctype="multipart/form-data" >
                                    <div className="register__box">
                                    <label for="user">User<i className="fas fa-asterisk"></i></label>
                                    <input id="name" name='name' value={formState.name} onChange={handleChange} type="text" maxLength="64" required placeholder={userInfo.name} disabled="disabled"/>
                                    </div>

                                    <div className="register__box">
                                    <label for="mail">E-mail<i className="fas fa-asterisk"></i></label>
                                    <input id="email" name='email' value={formState.email} onChange={handleChange} type="email" size="64" maxLength="64" required placeholder={userInfo.email} pattern=".+@+.+" title="Example@gmail.com" disabled="disabled"/>
                                    </div>

                                    {/* <div className="register__box">
                                    <label for="password">Password<i className="fas fa-asterisk"></i></label>
                                    <input id="password" name='password' value={formState.password} onChange={handleChange} type="password" minLength="6" required placeholder="**************"/>
                                    </div> */}

                                    <label className="register__box" for="gender">Gender: {userInfo.gender}</label>
                                        <select value={formState.gender} onChange={handleChange} name="gender" id="gender" placeholder={userInfo.gender}>
                                          <option value={userInfo.gender} >{userInfo.gender}</option>
                                      </select>


                                    <div className="register__box">
                                    <label for="age">You are {userage} years old</label>
                                    <input value={formState.age} onChange={handleChange} id="age" name="age" type="test" minLength="2" placeholder={userInfo.age} disabled="disabled"/>
                                    </div>

                                    <div className="register__box">
                                    <div className="uh-left">
                                        <div className="uh-image">
                                        <img className="uh-image-inner" src={ProfilePic[randomPic]} alt=""/>
                                        <div className="gradient"></div>
                                        </div>
                                    </div>
                                    </div>

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

