export function Pricing() {
  return (
    <div className="h-100">
      <div className="bg-pic-wn-bloodgirl py-5  "></div>
      {/* <div className="bg-pic-wn-dragon  py-5 "></div> */}
      <div className=" pt-5 justify-content-center z-23">
        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 pt-5 mx-auto text-light  text-center">
          <h1 class="display-4">Pricing</h1>
          <p class="lead col-5 mx-auto">
            Quickly build an effective pricing table for your potential
            customers with this Bootstrap example. It's built with default
            Bootstrap components and utilities with little customization.
          </p>
        </div>
        <div class="card-deck mb-3 text-center row row-col-1 row-cols-md-2  row-cols-lg-3  row-cols-xl-4  justify-content-center container mx-auto">
          <div class="card m-2  box-shadow">
            <div class="card-header">
              <h4 class="my-0 font-weight-bold text-capitalize">movies</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">
                £9.99 <small class="text-muted">/ mo</small>
              </h1>
              <span className="fw-bold text-capitalize  mt-3 ">Included:</span>
              <ul class="list-unstyled mt-2 mb-4 text-start">
                <li>1000+ Movies</li>
                <li>2 users included</li>
                <li>Download and Whatch offline</li>

                <li>24/7 surpport</li>
                <li>7-days trial</li>
              </ul>
              <button
                type="button"
                class="btn btn-lg btn-block btn-outline-primary"
              >
                Sign up for free
              </button>
            </div>
          </div>
          <div class="card m-2  box-shadow">
            <div class="card-header">
              <h4 class="my-0 font-weight-bold text-capitalize">
                Full-package
              </h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">
                £15.99 <small class="text-muted">/ mo</small>
              </h1>
              <span className="fw-bold text-capitalize  mt-3 ">Included:</span>
              <ul class="list-unstyled mt-2 mb-4 text-start">
                <li>1000+ Movies and 500+ TV Shows </li>
                <li>Download and Whatch offline</li>
                <li>5 users included</li>
                <li>24/7 support</li>
                <li>7-days trial</li>
              </ul>
              <button type="button" class="btn btn-lg btn-block btn-primary">
                Get started
              </button>
            </div>
          </div>
          <div class="card m-2  box-shadow">
            <div class="card-header">
              <h4 class="my-0 font-weight-bold text-capitalize">TV shows</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">
                £9.99 <small class="text-muted">/ mo</small>
              </h1>
              <span className="fw-bold text-capitalize mt-3 ">Included:</span>

              <ul class="list-unstyled mt-2 mb-4 text-start">
                <li>500+ TV Shows</li>
                <li>2 users included</li>
                <li>Download and Whatch offline</li>
                <li>24/7 surpport</li>
                <li>7-days trial</li>
              </ul>
              <button type="button" class="btn btn-lg btn-block btn-primary">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
