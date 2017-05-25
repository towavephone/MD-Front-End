var React = require('react');
var Index = React.createClass({
    render: function () {
        return (
			<div className="section clearfix object-non-visible" data-animation-effect="fadeInUpSmall" data-effect-delay="300">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h1 className="text-center">美登 & 产品</h1>
							<div className="separator"></div>
							<p className="lead text-center">美登芯体引领行业潮流</p>
							<div className="filters">
								<ul className="nav nav-pills">
									<li className="active"><a href="#" data-filter="*">All</a></li>
									<li><a href="#" data-filter=".web-design">Web design</a></li>
									<li><a href="#" data-filter=".app-development">App development</a></li>
									<li><a href="#" data-filter=".site-building">Site building</a></li>
								</ul>
							</div>
							<div className="isotope-container row grid-space-20">
								<div className="col-sm-6 col-md-4 isotope-item web-design">
									<div className="image-box">
										<div className="overlay-container">
											<img src="../../dist/images/portfolio-1.jpg" alt=""/>
											<div className="overlay">
												<div className="overlay-links">
													<a href="portfolio-item.html"><i className="fa fa-link"></i></a>
													<a href="../../dist/images/portfolio-1.jpg" className="popup-img"><i className="fa fa-search-plus"></i></a>
												</div>
											</div>
										</div>
										<a href="portfolio-item.html" className="btn btn-light-gray btn-lg btn-block">Project Title</a>
									</div>
								</div>
								<div className="col-sm-6 col-md-4 isotope-item app-development">
									<div className="image-box">
										<div className="overlay-container">
											<img src="../../dist/images/portfolio-2.jpg" alt=""/>
											<div className="overlay">
												<div className="overlay-links">
													<a href="portfolio-item.html"><i className="fa fa-link"></i></a>
													<a href="../../dist/images/portfolio-2.jpg" className="popup-img"><i className="fa fa-search-plus"></i></a>
												</div>
											</div>
										</div>
										<a href="portfolio-item.html" className="btn btn-light-gray btn-lg btn-block">Project Title</a>
									</div>
								</div>
								<div className="col-sm-6 col-md-4 isotope-item web-design">
									<div className="image-box">
										<div className="overlay-container">
											<img src="../../dist/images/portfolio-3.jpg" alt=""/>
											<div className="overlay">
												<div className="overlay-links">
													<a href="portfolio-item.html"><i className="fa fa-link"></i></a>
													<a href="../../dist/images/portfolio-3.jpg" className="popup-img"><i className="fa fa-search-plus"></i></a>
												</div>
											</div>
										</div>
										<a href="portfolio-item.html" className="btn btn-light-gray btn-lg btn-block">Project Title</a>
									</div>
								</div>
								<div className="col-sm-6 col-md-4 isotope-item site-building">
									<div className="image-box">
										<div className="overlay-container">
											<img src="../../dist/images/portfolio-4.jpg" alt=""/>
											<div className="overlay">
												<div className="overlay-links">
													<a href="portfolio-item.html"><i className="fa fa-link"></i></a>
													<a href="../../dist/images/portfolio-4.jpg" className="popup-img"><i className="fa fa-search-plus"></i></a>
												</div>
											</div>
										</div>
										<a href="portfolio-item.html" className="btn btn-light-gray btn-lg btn-block">Project Title</a>
									</div>
								</div>
								<div className="col-sm-6 col-md-4 isotope-item app-development">
									<div className="image-box">
										<div className="overlay-container">
											<img src="../../dist/images/portfolio-5.jpg" alt=""/>
											<div className="overlay">
												<div className="overlay-links">
													<a href="portfolio-item.html"><i className="fa fa-link"></i></a>
													<a href="../../dist/images/portfolio-5.jpg" className="popup-img"><i className="fa fa-search-plus"></i></a>
												</div>
											</div>
										</div>
										<a href="portfolio-item.html" className="btn btn-light-gray btn-lg btn-block">Project Title</a>
									</div>
								</div>
								<div className="col-sm-6 col-md-4 isotope-item web-design">
									<div className="image-box">
										<div className="overlay-container">
											<img src="../../dist/images/portfolio-6.jpg" alt=""/>
											<div className="overlay">
												<div className="overlay-links">
													<a href="portfolio-item.html"><i className="fa fa-link"></i></a>
													<a href="../../dist/images/portfolio-6.jpg" className="popup-img"><i className="fa fa-search-plus"></i></a>
												</div>
											</div>
										</div>
										<a href="portfolio-item.html" className="btn btn-light-gray btn-lg btn-block">Project Title</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
        );
    }
});
module.exports = Index;
