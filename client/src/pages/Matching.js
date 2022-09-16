import React from 'react';
//import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_ALL_USER } from '../utils/queries';
import { getRandomItem } from '../utils/helpers';
import { ADD_LIKE, ADD_PASS, ADD_MATCH } from '../utils/mutations';
import { useMutation } from '@apollo/client';

import ProfilePic from '../components/ProfilePic';
import Auth from '../utils/auth';

import Navbar from "../components/navbar";

export default function Matching() {
  const [addLike, { el }] = useMutation(ADD_LIKE);
  const [addPass, { ep }] = useMutation(ADD_PASS);
  const [addMatch, { em }] = useMutation(ADD_MATCH);

    if(!Auth.loggedIn()){
        document.location.replace('/login');
    };
    
    const { loading, data } = useQuery(QUERY_ALL_USER);
    const allusers = data?.users || [];
    var size = Object.keys(allusers).length;
    var randomNum = getRandomItem(size);
    var randomImg = getRandomItem(Object.keys(ProfilePic).length);
    var randomPic = (Object.keys(ProfilePic)[randomImg]);
    // console.log(ProfilePic[randomPic]);


const handleFormSubmit = e => {
   e.preventDefault();

    if (e.target.value === "like") {
          var loginuser = Auth.getProfile().data;
          var userID = loginuser._id;
          var matchuserID = data.users[randomNum]._id;
          console.log(userID,matchuserID);
          try {
                const { data } = addLike({
                  variables: {
                    UserID: userID,
                    UsersLiked: matchuserID,
                  },
                });
              } catch (el) {
                console.error(el);
              }

            alert(e.target.value);
    }else if (e.target.value === "next") {
          var matchuserID = data.users[randomNum]._id;
          var loginuser = Auth.getProfile().data;
          var userID = loginuser._id;
          console.log(userID,matchuserID);
          try {
                const { data } = addPass({
                  variables: {
                    UserID: userID,
                    UsersPassed: matchuserID,
                  },
                });
              } catch (ep) {
                console.error(ep);
              }

            alert(e.target.value);
    }
        var matchID = '';
        if (matchuserID === matchID) {
          alert('MATCHED');
          console.log(userID,matchuserID);
          try {
                const { data } = addMatch({
                  variables: {
                    UserID: userID,
                    Matched: matchuserID                  
                  },
                });
              } catch (em) {
                console.error(em);
              }
      }

  };
  return (
    <div>
      <Navbar />
        <header id="home" className="header">
        <div className="overlay text-white text-center">
        
        <>

        
        {loading ? (
            <div>Loading...</div>
          ) : (
            <>
          <form onClick={handleFormSubmit}>
            <button name='btn' className="btn btn-primary ml-xl-4" type='submit' value='like' > Like </button>
          
                <br/><br/><br/>
                <a className="navbar-brand m-auto" href={'singleuser/'+data.users[randomNum]._id}>
                    <img src={ProfilePic[randomPic]} className="-img" alt="" />
                    <p className="display-4 mb-5">{data.users[randomNum].name}</p>
                    <span className="brand-txt">Code Crush</span>
                </a>
            <button name='btn' className="btn btn-primary ml-xl-4" type='submit' value='next'> Next </button>
          </form>
          </>
         )}


        </>

        </div>
        </header>
    </div>
  );

};


// const allusers  = useQuery(QUERY_ALL_USER);
// console.log(allusers.data.users)
// var randomNum;
// randomNum = getRandomItem(allusers.data.users);
 

// const { data } = useQuery(QUERY_ALL_USER);
// var usersData;
//     if (data) {
//         usersData = data.users;
//     }

    //console.log(allusers.data.users);
//    var randomNum;

    // finalArray = usersData.map(function (obj) {
    //     return obj.name;
    //   });
 //   randomNum = getRandomItem(allusers.data.users);
   


//   const { correntUser } = user({
//     variables: { singleId },
//   });
//     console.log(correntUser);