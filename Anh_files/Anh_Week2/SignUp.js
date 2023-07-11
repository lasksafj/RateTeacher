import React from 'react';

const SignUpForm = () => {
  return (
    <div
      className="container"
      style={{
        width: '100%',
        height: '100vh',
        margin: 0,
        backgroundColor: 'white',
        color: 'black',
        fontFamily: 'Helvetica, Arial',
        fontSize: '16px',
      }}
    >
      <h1
        id="title"
        style={{
          margin: '1em auto',
          textAlign: 'center',
          fontWeight: 'lighter',
        }}
      >
        <span
          className="font-weight-bold"
          style={{ fontWeight: 'bold', fontFamily: 'Helvetica', fontSize: '32px' }}
        >
          Student
        </span>{' '}
        Sign Up
      </h1>
      <p style={{ margin: '1em auto', textAlign: 'center', fontWeight: 'lighter' }}>
        Are you a professor? <a href="/">Sign up here</a>
      </p>
      <p style={{ margin: '1em auto', textAlign: 'center', fontWeight: 'lighter' }}>
        Or sign up with email
      </p>

      <form
        style={{
          width: '60vw',
          maxWidth: '500px',
          minWidth: '300px',
          margin: '0 auto',
          paddingBottom: '2em',
        }}
      >
        <div style={{ display: 'block', margin: '0.5rem 0' }}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Email"
            required
            style={{
              margin: '10px 0 0 0',
              width: '100%',
              minHeight: '2em',
              backgroundColor: 'white',
              border: '1px solid black',
              borderRadius: '5px',
              padding: '5px',
              color: 'black',
            }}
          />
        </div>

        <div style={{ display: 'block', margin: '0.5rem 0' }}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Password"
            required
            style={{
              margin: '10px 0 0 0',
              width: '100%',
              minHeight: '2em',
              backgroundColor: 'white',
              border: '1px solid black',
              borderRadius: '5px',
              padding: '5px',
              color: 'black',
            }}
          />
        </div>

        <div style={{ display: 'block', margin: '0.5rem 0' }}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            className="form-control"
            placeholder="First name"
            required
            style={{
              margin: '10px 0 0 0',
              width: '100%',
              minHeight: '2em',
              backgroundColor: 'white',
              border: '1px solid black',
              borderRadius: '5px',
              padding: '5px',
              color: 'black',
            }}
          />
        </div>

        <div style={{ display: 'block', margin: '0.5rem 0' }}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            className="form-control"
            placeholder="Last name"
            required
            style={{
              margin: '10px 0 0 0',
              width: '100%',
              minHeight: '2em',
              backgroundColor: 'white',
              border: '1px solid black',
              borderRadius: '5px',
              padding: '5px',
              color: 'black',
            }}
          />
        </div>

        <div style={{ display: 'block', margin: '0.5rem 0' }}>
          <label htmlFor="school">School</label>
          <input
            type="text"
            id="school"
            className="form-control"
            placeholder="School"
            required
            style={{
              margin: '10px 0 0 0',
              width: '100%',
              minHeight: '2em',
              backgroundColor: 'white',
              border: '1px solid black',
              borderRadius: '5px',
              padding: '5px',
              color: 'black',
            }}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{
            display: 'block',
            textAlign: 'center',
            fontWeight: 'bold',
            width: '100%',
            margin: '2em 0 1em 0',
            height: '3em',
            fontSize: '15px',
            backgroundColor: 'black',
            borderColor: 'black',
            borderRadius: '40px',
            color: 'white',
            minWidth: '300px',
          }}
        >
          Continue
        </button>

        <p
          className="small"
          style={{ fontSize: '11px', margin: '0.5em auto', textAlign: 'center' }}
        >
          Rate My Professors is designed for and targeted to U.S. audiences and is governed by
          and operated in accordance with U.S. laws.
        </p>
        <p style={{ margin: '1em auto', textAlign: 'center', fontWeight: 'lighter' }}>
          Already have an account? <a href="/">Login</a>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
