import React ,{useEffect,useState}from 'react';
import style from "./Login.module.css";
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';
import {auth ,signInWithGoogle } from "./Firebase";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  let nevigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((users) => {
      setUser(users);
    });

    return unsubscribe;
  }, []);

  const signOutWithGoogle = () => {
    auth.signOut().then(() => {
      setUser(null);
    });
  };

  function handlesubmit() {
    
    if(user != null && email != null  && password != null){
      alert("welcome ");
      nevigate("/Home");
    }
   
  }

  return (
    <div className={style.main}>
      <div className={style.left}>
        <img src='https://t4.ftcdn.net/jpg/01/22/71/95/360_F_122719584_A863mvJEcEAnqmGQ4ky6RbXEhsHKw95x.jpg'/>
        <h1>Board</h1>
      </div>
      <div className={style.right}>
        <div className={style.signin}>
          <h1>Sign In</h1>
          <h4>Sign in to your account</h4>
        </div>
        <div className={style.btnmain}>
          {user === null ? (
            <button  icon={<FcGoogle />} className={style.gbtn} onClick={signInWithGoogle} >Sign in with Google</button>
          ) : (
            <button  icon={<FcGoogle />} className={style.gbtn} onClick={signOutWithGoogle} >Sign out from Google</button>
          )}
          <button  icon={<BsApple />} className={style.gbtn} >Sign in with Apple</button>
        </div>
        <div className={style.form}>
          <h4>Email address</h4>
          <input type="email" placeholder="Email" className={style.input} value={user ? user.email : email} />
          <h4>Password</h4>
          <input type="password" placeholder="Password" className={style.input} value={user ? user.refreshToken : password} />
          <h4>Forgot Password</h4>
          <button text="Sign In" className={style.sbtn} onClick={() => handlesubmit()} />

        </div>
        

      </div>


    </div>
  );
}

export default Login;
