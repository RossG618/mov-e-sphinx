export function Register() {
return(
    <form className="signin-form container p-3 shadow bg-light border border-4 border-warning login-form" onSubmit={handleSubmit}>
    <a href="/" >
      <h1 className="colgrad-title text-center text rog-font text-uppercase">sphinx</h1>
        {/* <h1 className="text-primary rog-font" >T<span className="text-warning text-decoration-none rog-font" >/M</span></h1> */}
      </a>
<h1 className="h3 mt-3 fw-normal text-dark">Please sign in</h1>
<p className="text-center text-dark mb-3">Enter login details </p>
<p className="mb-0" style={{color: "red"}}>
    {error}
</p>
<div className="form-floating w-75 mb-5 mx-auto">
  <input
  id="username floatingInput"
  name="username"
  onChange={e => setDetails( {...details, username: e.target.value})}
  value={details.username}
  type="username" className="form-control rounded-0 "  placeholder="name@example.com"/>
  <label for="floatingInput">Username</label>
</div>
<div className="form-floating w-75 input-group mx-auto">
  <input
  id="password floatingPassword"
  name="password"
  onChange={e => setDetails( {...details, password: e.target.value})}
  value={details.password}
  type={passReveal ? 'text' : 'password'}
  className="form-control pass-bar rounded-0 " placeholder="Password"/>
  <div className="input-group-append">

  <span className="input-group-text reveal-icon h-100 rounded-0 rounded-end" onClick={() => setPassReveal(!passReveal)}>
    {passReveal ? 
    <FontAwesomeIcon type="button" size="sm" icon={faEye} /> :
    <FontAwesomeIcon type="button" size="sm" icon={faEyeSlash}/>
    }
  </span>
  </div>
  <label for="floatingPassword p-0">Password</label>
</div>
<button type="submit" className="border-0 bg-sky w-75 btn text-light mt-3 py-2">Submit</button>

<p className="mt-5 mb-1 text-muted">© 1991-2022 Travel Mania&trade;</p>
</form>
)
}