import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {

    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
    })

    const [ setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(res => {
                const { displayName, email, photoURL } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL,
                }
                setUser(signedInUser)
                console.log(displayName, email, photoURL);
                setLoggedInUser(signedInUser);
                history.replace(from);
            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    }

    const handleBlur = (event) => {
        // console.log(event.target.name);
        // console.log(event.target.value);
        const newUserInfo = { ...user };
        newUserInfo[event.target.name] = event.target.value;
        setUser(newUserInfo);
    }

    const handleSubmit = (event) => {
        console.log(user.name, user.email, user.password);
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    updateUserName(user.name);
                    setLoggedInUser(newUserInfo);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                    console.log('singed in', res.user);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                });
        }
        event.preventDefault();
    }
    const updateUserName = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
        }).then(function () {
            console.log('user updated successfully');
        }).catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div className='login-form'>
            {!newUser && <h3>Login</h3>}
            <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
            <label htmlFor="newUser">Register New Account</label>
            <Form onClick={handleSubmit}>
                {
                    newUser && <Form.Group controlId="formBasicText">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onBlur={handleBlur} name='name' type="text" placeholder="Enter Your Name" />
                    </Form.Group>
                }
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleBlur} name='email' type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        {/* We'll never share your email with anyone else. */}
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handleBlur} name='password' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button style={{ backgroundColor: '#FF6E40', border: '0px' }} size="lg" block>
                    Submit
                </Button>
            </Form>



            <div className="login-with-account" onClick={handleGoogleSignIn} >
                <img style={{ width: '10%' }} src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1" alt="" />
                <p style={{ paddingLeft: '100px' }}>Sign with google</p>
            </div>
            {/* <h3>name: {user.displayName}</h3> */}
        </div>
    );
};

export default Login;