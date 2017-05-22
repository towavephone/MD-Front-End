var React = require('react');
var Index = React.createClass({
    render: function () {
        return (
			<footer id="footer">
				<div className="footer">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<div className="footer-content">
									<div className="logo-footer"><img id="logo-footer" src="../dist/images/logo_red_footer.png" alt=""/></div>
									<p>Veritatis officiis ullam libero quam aliquam, tenetur dolor incidunt praesentium dolorum laborum tempora suscipit quo sapiente.</p>
									<ul className="social-links colored circle">
										<li className="facebook"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-facebook"></i></a></li>
										<li className="twitter"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-twitter"></i></a></li>
										<li className="googleplus"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-google-plus"></i></a></li>
										<li className="skype"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-skype"></i></a></li>
										<li className="linkedin"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-linkedin"></i></a></li>
										<li className="youtube"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-youtube-play"></i></a></li>
										<li className="flickr"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-flickr"></i></a></li>
										<li className="pinterest"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-pinterest"></i></a></li>
									</ul>
									<a href="page-about.html" className="link"><span>Read More</span></a>
								</div>
							</div>
							<div className="col-sm-6 col-md-3 col-lg-2 col-lg-offset-1">
								<div className="footer-content">
									<h2>Links</h2>
									<nav>
										<ul className="nav nav-pills nav-stacked">
											<li><a href="index.html">Home</a></li>
											<li><a href="blog-right-sidebar.html">Blog</a></li>
											<li><a href="portfolio-3col.html">Portfolio</a></li>
											<li><a href="page-about.html">About</a></li>
											<li><a href="page-contact.html">Contact</a></li>
										</ul>
									</nav>
								</div>
							</div>
							<div className="col-sm-6 col-md-3 col-lg-3">
								<div className="footer-content">
									<h2>Subscribe</h2>
									<form className="margin-bottom-clear">
										<div className="form-group has-feedback">
											<label className="sr-only" htmlFor="subscribe">Email address</label>
											<input type="email" className="form-control" id="subscribe" placeholder="Enter email" name="subscribe" required/>
											<i className="fa fa-envelope form-control-feedback"></i>
											<button type="submit" className="btn btn-white btn-sm">Submit</button>
										</div>
									</form>
									<div className="box small"><i className="fa fa-cc-paypal"></i></div>
									<div className="box small"><i className="fa fa-cc-visa"></i></div>
									<div className="box small"><i className="fa fa-cc-mastercard"></i></div>
									<div className="box small"><i className="fa fa-cc-discover"></i></div>
								</div>
							</div>
						</div>
					</div>
				</div>
            </footer>
        );
    }
});
module.exports = Index;
