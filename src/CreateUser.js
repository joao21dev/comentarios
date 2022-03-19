import React, { useContext, useState } from "react";
import { AuthContext } from "./auth";
import { Card, Form, Button } from "react-bootstrap";

export const CreateUser = () => {
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
      <Card>
        <Card.Body>
          <h2 className="text-center mb-3">Criar nova conta:</h2>
          {auth.createUser.createUserState.error !== "" && (
            <p className="alert alert-danger">
              {auth.createUser.createUserState.error}
            </p>
          )}
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Seu e-mail"
                value={form.email}
                onChange={onChange("email")}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Sua senha"
                value={form.passwd}
                onChange={onChange("passwd")}
              />

              <Button
                className="w-100 mt-4"
                onClick={() => {
                  auth.createUser.createUser(form.email, form.passwd);
                }}
              >
                Criar
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

{
  /* return (
    <>
      <h3>Criar nova conta:</h3>
      {auth.createUser.createUserState.error !== "" && (
        <p className="alert alert-danger">
          {auth.createUser.createUserState.error}
        </p>
      )}

      <input
        type="text"
        className="form-control"
        placeholder="Seu e-mail"
        value={form.email}
        onChange={onChange("email")}
      />
      <input
        type="password"
        className="form-control"
        placeholder="Sua senha"
        value={form.passwd}
        onChange={onChange("passwd")}
      />
      <button
        className="btn btn-primary"
        onClick={() => {
          auth.createUser.createUser(form.email, form.passwd);
        }}
      >
        Criar
      </button>
    </>
  ); */
}
