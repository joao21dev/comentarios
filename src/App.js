import React from "react";
import { Container } from "react-bootstrap";

import NewComment from "./NewComment";
import Comments from "./Comments";

import { AuthProvider } from "./auth";
import { CreateUser } from "./CreateUser";
import UserInfo from "./UserInfo";
import SignInUser from "./SignInUser";

function App() {
  return (
    <AuthProvider>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          
            <UserInfo />
            <Comments />
         
          <NewComment />

          <CreateUser />
          <SignInUser />
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;
