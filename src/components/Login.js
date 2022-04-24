import React, { } from "react";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import { Container } from "react-bootstrap";

const Login = () => {
  const { googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div>
        <Container>
        <img src="./Logo.png" width={250} height={250} style={{ alignSelf: 'center' }}/>
        <h1 className="mb-3 ">Count for Kids</h1>
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
        </Container>
      </div>
    </>
  );
};

export default Login;