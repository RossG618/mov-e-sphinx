import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="btn py-1  btn-outline-info" onClick={() => loginWithRedirect()}>Log In</button>;
};

export const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
  );
};


// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import './login.css'
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// const Login = ({login, setLoggedIn}) => {
//   const [passReveal, setPassReveal] = useState(false);
//   const [details, setDetails] = useState({
//     username: "",
//      password:"",
//     firstName:"",
//     lastName:"",
//  });
//  const [error, setError] = useState();
//  const admin = {username: "admin", password: "admin"};
//  const jake = {username: "jacob", password: "Kinzz6"};
//  const Guest = {username: "guest"};

//  const navigate = useNavigate();

//  const handleSubmit = e => {
//   e.preventDefault();
//   // dispatch(Login({username: username, password: password}));
//   // imperatively redirect the user to /profile
//   if (details.username === admin.username && details.password === admin.password){
//     // setUser({username: details.username, password:details.password});
//     // dispatch(logIn({username: details.username, password:details.password}));
//     navigate('/')
//     // setLoggedIn(true)
//     // setUserId('admin')
//     console.log('logged in')
//   }else {
//     console.log('Wrong passkey');
//     setError("Wrong Details");
//     setLoggedIn(false)
//   }
//   // else if(details.username === jake.username && details.password === jake.password){
//   //   navigate('/users/jacob')
//   //   setSignedIn(true)
//   //   setUserId(`jacob`)
//   // }else if(details.username === Guest.username){
//   //   navigate('/users/Guest')
//   //   setSignedIn(true)
//   //   setUserId(`guest`)
//   // }else {
//   //   console.log('Wrong passkey');
//   //   setError("Wrong Details");
//   //   setSignedIn(false)
//   // }
// }
//     return ( 
//         <main className="form-signin App d-flex align-items-center vh-90" style={{'background-color': '#7b7'}}>
//           <form className="signin-form container p-3 shadow bg-light border border-4 border-warning login-form" onSubmit={handleSubmit}>
//                 <a href="/" >
//                   <h1 className="colgrad-title text-center text rog-font text-uppercase">sphinx</h1>
//                     {/* <h1 className="text-primary rog-font" >T<span className="text-warning text-decoration-none rog-font" >/M</span></h1> */}
//                   </a>
//             <h1 className="h3 mt-3 fw-normal text-dark">Please sign in</h1>
//             <p className="text-center text-dark mb-3">Enter login details </p>
//             <p className="mb-0" style={{color: "red"}}>
//                 {error}
//             </p>
//             <div className="form-floating w-75 mb-5 mx-auto">
//               <input
//               id="username floatingInput"
//               name="username"
//               onChange={e => setDetails( {...details, username: e.target.value})}
//               value={details.username}
//               type="username" className="form-control rounded-0 "  placeholder="name@example.com"/>
//               <label for="floatingInput">Username</label>
//             </div>
//             <div className="form-floating w-75 input-group mx-auto">
//               <input
//               id="password floatingPassword"
//               name="password"
//               onChange={e => setDetails( {...details, password: e.target.value})}
//               value={details.password}
//               type={passReveal ? 'text' : 'password'}
//               className="form-control pass-bar rounded-0 " placeholder="Password"/>
//               <div className="input-group-append">

//               <span className="input-group-text reveal-icon h-100 rounded-0 rounded-end" onClick={() => setPassReveal(!passReveal)}>
//                 {passReveal ? 
//                 <FontAwesomeIcon type="button" size="sm" icon={faEye} /> :
//                 <FontAwesomeIcon type="button" size="sm" icon={faEyeSlash}/>
//                 }
//               </span>
//               </div>
//               <label for="floatingPassword p-0">Password</label>
//             </div>
//             <button type="submit" className="border-0 bg-sky w-75 btn text-light mt-3 py-2">Submit</button>
            
//             <p className="mt-5 mb-1 text-muted">© 1991-2022 Travel Mania&trade;</p>
//           </form>
//         </main>
//      );
// }
 
// export default Login;