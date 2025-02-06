import React from "react";
import './Signup.css'
const Signup = () => {

  const divs = 'form-control w-full max-w-xs';
  const spans = 'label-text'
  const inputs = 'input input-bordered w-full max-w-xs'

  return (
    <div className='bod'>
      <form action="" method="post" id="form">
        <div className={divs}>
          <label className="label">
            <span className={spans}>Name</span>
          </label>
          <input
            type="text"
            placeholder="Full Name"
            className={inputs}
          />
        </div>
        <div className={divs}>
          <label className="label">
            <span className={spans}>E-mail</span>
          </label>
          <input
            type="text"
            placeholder="E-mail"
            className={inputs}
          />
        </div>
        <div className={divs}>
          <label className="label">
            <span className={spans}>Phone</span>
          </label>
          <input
            type="text"
            placeholder="Phone Number"
            className={inputs}
          />
        </div>
        <button className="btn btn-outline btn-primary" type="submit" value="submit" id="sub">Submit</button>
      </form>
    </div>
  );
}

export default Signup;