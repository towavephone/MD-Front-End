var React = require('react');
var Index = React.createClass({
    render: function () {
        return (
			<div className="section clearfix">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h1 className="text-center">About Us</h1>
							<div className="separator"></div>
							<p className="lead text-center">Lorem ipsum dolor sit amet laudantium molestias similique.<br/> Quisquam incidunt ut laboriosam.</p>
							<br/>
							<div className="row">
								<div className="col-md-6">
									<h2 className="title">iDea - Responsive Website Theme</h2>
									<div className="row">
										<div className="col-md-6">
											<img src="../../dist/images/section-image-1.png" alt=""/>
										</div>
										<div className="col-md-6">
											<p>Quo soluta provident, quod reiciendis. Dolores nam totam aut illum ex ratione harum molestias maxime minima tempore, possimus, laudantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
										</div>
									</div>
									<p>Esse sequi veniam, assumenda voluptate necessitatibus ipsa dicta vero, minima natus cum cupiditate magnam et placeat quo adipisci.</p>
									<a href="page-about.html" className="btn btn-white">Learn More</a>
									<div className="space hidden-md hidden-lg"></div>
								</div>
								<div className="col-md-6">
									<div className="panel-group panel-dark" id="accordion">
										<div className="panel panel-default">
											<div className="panel-heading">
												<h4 className="panel-title">
													<a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
														<i className="fa fa-bold"></i>Bootstrap Based
													</a>
												</h4>
											</div>
											<div id="collapseOne" className="panel-collapse collapse in">
												<div className="panel-body">
													Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
												</div>
											</div>
										</div>
										<div className="panel panel-default">
											<div className="panel-heading">
												<h4 className="panel-title">
													<a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" className="collapsed">
														<i className="fa fa-leaf"></i>Clean &amp; powerful code
													</a>
												</h4>
											</div>
											<div id="collapseTwo" className="panel-collapse collapse">
												<div className="panel-body">
													Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
												</div>
											</div>
										</div>
										<div className="panel panel-default">
											<div className="panel-heading">
												<h4 className="panel-title">
													<a data-toggle="collapse" data-parent="#accordion" href="#collapseThree" className="collapsed">
														<i className="fa fa-html5"></i>HTML5/CSS3
													</a>
												</h4>
											</div>
											<div id="collapseThree" className="panel-collapse collapse">
												<div className="panel-body">
													Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<br/>
						</div>
					</div>
				</div>
			</div>
        );
    }
});
module.exports = Index;
