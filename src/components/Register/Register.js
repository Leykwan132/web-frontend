import React from "react";
import axios from "axios";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: ""
    };
  }

  onNameChange = event => {
    this.setState({ name: event.target.value });
  };

  //detect the input of email
  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };
  //detect the password of email
  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  onSubmitRegister(e) {
    // prevent default is to prevent the page reload
    e.preventDefault();

    // fetch("https://fast-stream-45193.herokuapp.com/register", {
    //   method: "post",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     email: this.state.email,
    //     password: this.state.password,
    //     name: this.state.name
    //   })
    // })
    //   .then(response => {
    //     response.json();
    //     console.log(response);
    //   })
    //   .then(user => {
    //     console.log(user);
    //     // if (user.id) {
    //     //   this.props.loadUser(user);
    //     //   this.props.onRouteChange("home");
    //     // }
    //   });

    axios
      .post("https://fast-stream-45193.herokuapp.com/register", {
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
      .then(res => {
        /* res will return {id: something, name: something, etc...} */

        // passing in object back to loadUser
        this.props.loadUser(res.data);
        // redirect
        this.props.onRouteChange("home");
      })
      .catch(err => {
        console.log(err);
        if (err.response.data) {
          console.log(err.response.data);
        }
      });
  }

  render() {
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <form className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f3 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">
                  Name
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={e => this.onSubmitRegister(e)}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
              />
            </div>
          </form>
        </main>
      </article>
    );
  }
}

export default Register;
