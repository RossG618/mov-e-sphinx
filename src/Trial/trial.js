const Trial = () => {
    return ( <div className="trial z-23">
    <div className="container block-to-line align-items-center justify-content-around py-2">
      <div>
        <h2 className="text-uppercase fw-bold">
          start trial first{" "}
          <span className=" text-decoration-underline">30 days.</span>
        </h2>
        <p className="fw-bold ls-1px">
          Enter email to create or restart your membership.
        </p>
      </div>
      <div className="d-inline-flex">
        <input
          className="border-dark px-2 "
          type="email"
          placeholder="Email Address"
        />
        <button className="btn btn-dark px-4 rounded-0 shadow">
          Submit
        </button>
      </div>
    </div>
  </div>);
}
 
export default Trial;