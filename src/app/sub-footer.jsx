var React = require('react');
var HeadNav = require('../common/head-nav.jsx');
var Index = React.createClass({
    render: function () {
        return (
				<div className="subfooter">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<p>Copyright &copy; 2015.Company name All rights reserved.More Templates <a href="http://www.cssmoban.com/" target="_blank" title="模板之家">模板之家</a> - Collect from <a href="http://www.cssmoban.com/" title="网页模板" target="_blank">网页模板</a></p>
							</div>
							<div className="col-md-4">
								<nav className="navbar navbar-default" role="navigation">
									<div className="navbar-header">
										<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-2">
											<span className="sr-only">Toggle navigation</span>
											<span className="icon-bar"></span>
											<span className="icon-bar"></span>
											<span className="icon-bar"></span>
										</button>
									</div>
									<div className="collapse navbar-collapse" id="navbar-collapse-2">
										<ul className="nav navbar-nav">
											<li><a href="index.html">Home</a></li>
											<li><a href="page-about.html">About</a></li>
											<li><a href="blog-right-sidebar.html">Blog</a></li>
											<li><a href="portfolio-3col.html">Portfolio</a></li>
											<li><a href="page-contact.html">Contact</a></li>
										</ul>
									</div>
								</nav>
							</div>
							<div className="col-md-2" id="google_translate_element"></div>
						</div>
					</div>
				</div>
        );
    }
});
module.exports = Index;
