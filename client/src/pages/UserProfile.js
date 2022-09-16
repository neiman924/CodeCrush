import React from 'react';
//import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import '../assets/css/userprofile.css';
import Auth from '../utils/auth';

import { QUERY_ALL_USER } from '../utils/queries';
import { getRandomItem } from '../utils/helpers';

import ProfilePic from '../components/ProfilePic';
import EditProfile from '../components/EditProfile';

import Navbar from "../components/navbar";

export default function UserProfile() {
    if(!Auth.loggedIn()){
        document.location.replace('/login');
    };
    
    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 5
            }}
        />
    );

    var loginuser = Auth.getProfile().data;
    var useraccount = loginuser.email.split("@")[0];

    console.log(useraccount,loginuser.name,loginuser.email,loginuser._id);



    const { loading, data } = useQuery(QUERY_ALL_USER);
    const allusers = data?.users || [];
    var size = Object.keys(allusers).length;
    var randomNum = getRandomItem(size);
    var randomImg = getRandomItem(Object.keys(ProfilePic).length);

    function getrandomPic(){
        var randomImg = getRandomItem(Object.keys(ProfilePic).length);
        return (ProfilePic[randomImg]);
    }

    var randomPic = (Object.keys(ProfilePic)[randomImg]);
console.log(ProfilePic[randomPic],getrandomPic());
  return (
    <div>
      <Navbar />
        <header id="home" className="header">
        <div className="overlay">
                    <br/><br/><br/><br/><br/><br/>
                    
                    <div className="user-header-wrapper">
                    <div className="user-header-inner">
                    <div className="uh-left">
                        <div className="uh-image">
                        <img className="uh-image-inner" src={ProfilePic[randomPic]} alt=""/>
                        <div className="gradient"></div>
                        </div>
                    </div>
                    <div className="uh-right">
                        <div className="user-info">
                        <h3>Welcome {loginuser.name} !</h3>
                        <a type="submit" className="btn" href='/editprofile'>Edit Profile</a>
                        </div>
                        <div className="user-bio">
                        <p className="user-bio-name">{useraccount}</p><br/>
                        <p>This is the user biography 😄<br/></p>
                        </div>
                    </div>
                    </div>
                    </div>

                    <br/><br/>{ColoredLine}<h2 className='user-info'>Friends List ✌</h2>

                    <div className="user-stories">

                    <div className="user-stories-inner">
                    <a href='/'>
                    <div className="story-wrapper">
                        <div className="story-inner">
                        <img className="story-img" src={getrandomPic()} alt=""/>
                        <div className="gradient"></div>
                        </div>
                        <h2>Friend 1 ✌</h2>
                    </div>
                    </a>
                    <div className="story-wrapper">
                        <div className="story-inner">
                        <img className="story-img" src={getrandomPic()} alt=""/>
                        <div className="gradient"></div>
                        </div>
                        <h2>Friend 2 🛫</h2>
                    </div>
                    <div className="story-wrapper">
                        <div className="story-inner">
                        <img className="story-img" src={getrandomPic()} alt=""/>
                        <div className="gradient-gray"></div>
                        </div>
                        <h2>Friend 3 🍕</h2>
                    </div>
                    <div className="story-wrapper">
                        <div className="story-inner">
                        <img className="story-img" src={getrandomPic()} alt=""/>
                        <div className="gradient-gray"></div>
                        </div>
                        <h2>Friend 4 🌲</h2>
                    </div>
                    <div className="story-wrapper">
                        <div className="story-inner">
                        <img className="story-img" src={getrandomPic()} alt=""/>
                        <div className="gradient-gray"></div>
                        </div>
                        <h2>Friend 5 📚</h2>
                    </div>
                    </div>
                    </div>
        </div>
        </header>
    </div>
  );

};

{/* <>
{loading ? (
    <div>Loading...</div>
  ) : (
  <form >

  <a className="navbar-brand m-auto" href={'singleuser/'+data.users[randomNum]._id}>
      <img src={ProfilePic[randomPic]} className="-img" alt="" />
      <p className="display-4 mb-5">{data.users[randomNum].name}</p>
      <span className="brand-txt">Code Crush</span>
    </a>

    <button className="btn btn-primary" type="submit" onClick={<Matching/>}> Submit </button>
  </form>
 )}
</> */}