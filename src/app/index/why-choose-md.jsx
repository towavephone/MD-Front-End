var React = require('react');
var Index = React.createClass({
    render: function () {
        return (
			<div className="section clearfix">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h1 className="text-center">Why Choose iDea</h1>
							<div className="separator"></div>
							<p className="lead text-center">Lorem ipsum dolor sit amet. Maiores, odio ut deleniti doloremque ad at praesentium<br/> laudantium molestias similique. Quisquam incidunt ut laboriosam.</p>
							<div className="vertical hc-tabs">
								<div className="hc-tabs-top">
									<img data-tab="#tab1" src="../../dist/images/section-image-1.png" alt="iDea" data-tab-animation-effect="fadeInRightSmall"/>
									<img data-tab="#tab2" src="../../dist/images/section-image-2.png" alt="iDea" data-tab-animation-effect="fadeInRightSmall"/>
									<img data-tab="#tab3" src="../../dist/images/section-image-3.png" alt="iDea" data-tab-animation-effect="fadeInRightSmall"/>
									<img data-tab="#tab4" src="../../dist/images/section-image-4.png" alt="iDea" data-tab-animation-effect="fadeInRightSmall"/>
									<div className="space"></div>
								</div>
								<div className="arrow hidden-sm hidden-xs"><i className="fa fa-caret-up"></i></div>
								<ul className="nav nav-tabs" role="tablist">
									<li className="active"><a href="#tab1" role="tab" data-toggle="tab"><i className="fa fa-magic pr-10"></i> Very Flexible</a></li>
									<li><a href="#tab2" role="tab" data-toggle="tab"><i className="fa fa-life-saver pr-10"></i> Top Notch 24/7 Support</a></li>
									<li><a href="#tab3" role="tab" data-toggle="tab"><i className="fa fa-expand pr-10"></i> 100% Responsive</a></li>
									<li><a href="#tab4" role="tab" data-toggle="tab"><i className="fa fa-file-o pr-10"></i> Well Documented</a></li>
								</ul>
								<div className="tab-content">
									<div className="tab-pane fade in active" id="tab1">
										<h1 className="text-center title">Very Flexible</h1>
										<div className="space"></div>
										<div className="row">
											<div className="col-md-6">
												<ul className="list-icons">
													<li><i className="icon-check pr-10"></i> Lorem ipsum dolor sit amet maiores</li>
													<li><i className="icon-check pr-10"></i> Consectetur adipisicing elit</li>
													<li><i className="icon-check pr-10"></i> Aut earum numquam hic placeat</li>
													<li><i className="icon-check pr-10"></i> Fugiat rem consequatur neque</li>
													<li><i className="icon-check pr-10"></i> Vitae magnam commodi repellendus</li>
													<li><i className="icon-check pr-10"></i> Expedita placeat omnis pariatur</li>
													<li><i className="icon-check pr-10"></i> Fugiat rem consequatur neque</li>
												</ul>
											</div>
											<div className="col-md-6">
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere hic qui non placeat ad explicabo dignissimos amet iusto veniam!</p>
												<p>Quo expedita tempore modi minima at adipisci saepe excepturi alias consequuntur sunt asperiores enim ut assumenda hic vitae, odio deleniti illo, veniam quas!</p>
												<a href="page-services.html" className="btn btn-default">Read more</a>
											</div>
										</div>
									</div>
									<div className="tab-pane fade" id="tab2">
										<h1 className="text-center title">Top Notch 24/7 Support</h1>
										<div className="space"></div>
										<div className="row">
											<div className="col-md-6">
												<ul className="list-icons">
													<li><i className="icon-check pr-10"></i> Consectetur adipisicing elit</li>
													<li><i className="icon-check pr-10"></i> Aut earum numquam hic placeat</li>
													<li><i className="icon-check pr-10"></i> Fugiat rem consequatur neque</li>
													<li><i className="icon-check pr-10"></i> Vitae magnam commodi repellendus</li>
													<li><i className="icon-check pr-10"></i> Expedita placeat omnis pariatur</li>
													<li><i className="icon-check pr-10"></i> Fugiat rem consequatur neque</li>
													<li><i className="icon-check pr-10"></i> Lorem ipsum dolor sit amet maiores</li>
												</ul>
											</div>
											<div className="col-md-6">
												<p>Dolor sit amet, consectetur adipisicing elit. Facere hic qui non placeat ad explicabo dignissimos amet iusto veniam!</p>
												<p>Expedita tempore modi minima at adipisci saepe excepturi alias consequuntur sunt asperiores enim ut assumenda hic vitae, odio deleniti illo, veniam quas!</p>
												<a href="page-services.html" className="btn btn-default">Read more</a>
											</div>
										</div>
									</div>
									<div className="tab-pane fade" id="tab3">
										<h1 className="text-center title">100% Responsive</h1>
										<div className="space"></div>
										<div className="row">
											<div className="col-md-6">
												<ul className="list-icons">
													<li><i className="icon-check pr-10"></i> Aut earum numquam hic placeat</li>
													<li><i className="icon-check pr-10"></i> Fugiat rem consequatur neque</li>
													<li><i className="icon-check pr-10"></i> Vitae magnam commodi repellendus</li>
													<li><i className="icon-check pr-10"></i> Expedita placeat omnis pariatur</li>
													<li><i className="icon-check pr-10"></i> Fugiat rem consequatur neque</li>
													<li><i className="icon-check pr-10"></i> Lorem ipsum dolor sit amet maiores</li>
													<li><i className="icon-check pr-10"></i> Consectetur adipisicing elit</li>
												</ul>
											</div>
											<div className="col-md-6">
												<p>Ipsum dolor sit amet, consectetur adipisicing elit. Facere hic qui non placeat ad explicabo dignissimos amet iusto veniam!</p>
												<p>Tempore modi minima at adipisci saepe excepturi alias consequuntur sunt asperiores enim ut assumenda hic vitae, odio deleniti illo, veniam quas!</p>
												<a href="page-services.html" className="btn btn-default">Read more</a>
											</div>
										</div>
									</div>
									<div className="tab-pane fade" id="tab4">
										<h1 className="text-center title">Well Documented</h1>
										<div className="space"></div>
										<div className="row">
											<div className="col-md-6">
												<ul className="list-icons">
													<li><i className="icon-check pr-10"></i> Fugiat rem consequatur neque</li>
													<li><i className="icon-check pr-10"></i> Vitae magnam commodi repellendus</li>
													<li><i className="icon-check pr-10"></i> Expedita placeat omnis pariatur</li>
													<li><i className="icon-check pr-10"></i> Fugiat rem consequatur neque</li>
													<li><i className="icon-check pr-10"></i> Lorem ipsum dolor sit amet maiores</li>
													<li><i className="icon-check pr-10"></i> Consectetur adipisicing elit</li>
													<li><i className="icon-check pr-10"></i> Aut earum numquam hic placeat</li>
												</ul>
											</div>
											<div className="col-md-6">
												<p>Sit amet, consectetur adipisicing elit. Facere hic qui non placeat ad explicabo dignissimos amet iusto veniam!</p>
												<p>Modi minima at adipisci saepe excepturi alias consequuntur sunt asperiores enim ut assumenda hic vitae, odio deleniti illo, veniam quas!</p>
												<a href="page-services.html" className="btn btn-default">Read more</a>
											</div>
										</div>
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
