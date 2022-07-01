import "./Login.css"

export default function Login() {
  return (
      <div className="container">
            <div className= "greet">
              <h1 className="welcome">Welcome to DEV Community</h1>
              <p>  <a href="https://dev.to/">DEV Community </a> is a community of 870,143 amazing developers </p>

            </div>
        <div className="botones">
        <button className= "btn-apple">   Continue with Apple </button>
        <button className= "btn-forem"> <img src="https://account.forem.com/assets/smiley-8750f55ac3131b76c24bab0d8a76c0ca4384a76efa121519b8c3164ba34a8e53.png" alt="Trulli" width="20" height="20"></img> Continue with Forem </button>
        <button className= "btn-github"> <img src="https://img.icons8.com/fluency/344/github.png" alt="Trulli" width="20" height="20"></img> Continue with GitHub </button>
        <button className= "btn-twitter"> <img src="https://img.icons8.com/android/344/twitter.png" alt="Trulli" width="20" height="20"></img> Continue with Twitter </button>
      </div>
          <p className= "password-title">---------Have a password? Continue with your email address---------</p>
          <p>Email</p>
          <input className="inputs" type="email" />
          <p>Password</p>
          <input type="password" />
          
      <div>

        <div>
        <input className="btn-continue" value="Continue" type="submit"></input> <br />
        <p><a href="url">I forgot my password </a></p>
        </div>

      </div>
   </div>
)
}