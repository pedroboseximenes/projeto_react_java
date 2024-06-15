const LoginPage = () => {
    return (
      <section className="vh-100">
        <div className="container-fluid">
          <div className="row d-flex  align-items-center ">
            <div className="col-lg-4">
              <img src="assets/images/wepik-linear-modern-plane-fly-trip-logo-202310020118316pLd.png"
                className="img-fluid" alt="Sample image" />
            </div>
            <div className="col-lg-8">
              <form>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="text-2 fw-normal mb-0 me-3">Login</p>

                </div>
                <br /><hr />

                <div className="form-outline mb-4"><label className="form-label" htmlFor="form3Example3">Email</label>
                  <input type="email" id="form3Example3" className="form-control form-control-lg"
                    placeholder="Insira um email válido" />
                  
                </div>

                <div className="form-outline mb-3">
                <label className="form-label" htmlFor="form3Example4">Senha</label>
                  <input type="password" id="form3Example4" className="form-control form-control-lg"
                    placeholder="Insira senha" />
                
                </div>

                <div className="d-flex justify-content-between align-items-center">

                  <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Lembrar de mim
                    </label>
                  </div>
                </div>

                <div className="text-center mt-4 pt-2">
                  <button type="button" className="btn btn-info btn-lg"
                  >Login</button>

                </div>


              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
  export default LoginPage