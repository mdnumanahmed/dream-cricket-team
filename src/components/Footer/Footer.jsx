const Footer = () => {
  return (
    <div className="bg-[#06091A]">
      <div className="container mx-auto  text-white pt-60">
        <footer className="footer footer-center p-10">
          <aside>
            <img src="../../../assets/logo-footer.png" alt="" />
          </aside>
        </footer>
        <footer className="footer  p-10">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <form>
            <h6 className="footer-title">Newsletter</h6>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item"
                />
                <button className="btn btn-primary join-item">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </footer>
        <footer className="footer footer-center p-4">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by NS
              IT Center Ltd
            </p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
