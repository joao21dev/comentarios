import React, { useContext, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { AuthContext } from "./auth";

const SignInUser = () => {
  const auth = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", passwd: "" });
  const onChange = (campo) => (evt) => {
    setForm({
      ...form,
      [campo]: evt.target.value,
    });
  };
  if (auth.user !== null) {
    return null;
  }
  return (
    <>
      <Card className="mt-3">
        <Card.Body>
          <h3 className="text-center mb-3">Entre com sua conta:</h3>
          {auth.signInUser.signInUserState.error !== "" && (
            <div className="alert alert-dark" role="alert">
              {auth.signInUser.signInUserState.error}
            </div>
          )}
          <Form>
            <Form.Group id="email">
              <Form.Label>Login</Form.Label>
              <Form.Control
                type="email"
                placeholder="Seu e-mail"
                value={form.email}
                onChange={onChange("email")}
              />
            </Form.Group>

            <Form.Group id="password">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Sua senha"
                value={form.passwd}
                onChange={onChange("passwd")}
              />
            </Form.Group>
            <Button
              className="w-100 mt-4"
              onClick={() => {
                auth.signInUser.signInUser(form.email, form.passwd);
              }}
            >
              Entrar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default SignInUser;
