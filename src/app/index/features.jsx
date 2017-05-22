var React = require('react');
var Index = React.createClass({
    render: function () {
        return (
			<section className="main-container gray-bg">
				<div className="main">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<h1 className="text-center title">Features</h1>
								<div className="separator"></div>
								<p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								<div className="row">
									<div className="col-sm-4">
										<div className="box-style-1 white-bg object-non-visible" data-animation-effect="fadeInUpSmall" data-effect-delay="0">
											<i className="fa fa-leaf"></i>
											<h2>Clean Design and Code</h2>
											<p>Voluptatem ad provident non <a href="#">repudiandae</a> veritatis beatae cupiditate amet reiciendis.</p>
											<a href="page-services.html" className="btn-default btn">Read More</a>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="box-style-1 white-bg object-non-visible" data-animation-effect="fadeInUpSmall" data-effect-delay="200">
											<i className="fa fa-laptop"></i>
											<h2>Very Flexible</h2>
											<p>Iure sequi unde hic. Sapiente quaerat labore sequi inventore veritatis cumque.</p>
											<a href="page-services.html" className="btn-default btn">Read More</a>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="box-style-1 white-bg object-non-visible" data-animation-effect="fadeInUpSmall" data-effect-delay="400">
											<i className="fa fa-sitemap"></i>
											<h2>Latest Technologies</h2>
											<p>Inventore dolores aut laboriosam cum consequuntur delectus sequi! Eum est.</p>
											<a href="page-services.html" className="btn-default btn">Read More</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
        );
    }
});
module.exports = Index;
