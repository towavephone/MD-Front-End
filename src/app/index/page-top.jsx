var React = require('react');
var Index = React.createClass({
    render: function () {
        return (
			<div className="page-top">
				<div className="container">
					<div className="row">
						<div className="col-md-8 col-md-offset-2">
							<div className="call-to-action">
								<h1 className="title">iDea Clean and Unique Design</h1>
								<p>Sed ut Perspiciatis Unde Omnis Iste Sed ut perspiciatis unde omnis iste natu error sit  voluptatem accusan tium </p>
								<a className="btn btn-white more" data-toggle="modal" data-target="#myModal">
								Read more <i className="pl-10 fa fa-info"></i>
								</a>
								<div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
									<div className="modal-dialog">
										<div className="modal-content">
											<div className="modal-header">
												<button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
												<h4 className="modal-title" id="myModalLabel">iDea Clean and Unique Design</h4>
											</div>
											<div className="modal-body">
												<p>Consectetur adipisicing elit. Nemo architecto debitis dolorum ullam in ut sint, odit maiores eaque explicabo, repellendus minima soluta sunt! Nisi minima blanditiis voluptate, ut atque.</p>
												<ul className="list-icons">
													<li><i className="icon-check"></i> Nisi minima blanditiis voluptate</li>
													<li><i className="icon-check"></i> Officiis nisi nam doloribus explicabo</li>
													<li><i className="icon-check"></i> Debitis delectus corporis aspernatur</li>
													<li><i className="icon-check"></i> Dolore temporibus odio distinctio</li>
													<li><i className="icon-check"></i> Reprehenderit optio unde accusantium quia</li>
												</ul>
												<p>Culpa expedita! Quisquam, itaque officiis nisi nam doloribus explicabo possimus, dolorum alias provident maxime temporibus, enim voluptatibus! Molestias, accusantium cum impedit sint velit exercitationem deserunt, corporis magni provident earum, ullam iusto voluptatem iste animi inventore ab cupiditate quod laborum quasi libero doloremque obcaecati eius. Ut, reprehenderit optio unde accusantium quia qui! Debitis delectus corporis aspernatur nemo aut, odio harum ea repellendus quidem, saepe, incidunt? Assumenda deserunt unde minima aspernatur ducimus velit molestiae, minus eius inventore, dolore temporibus odio distinctio optio.</p>
											</div>
											<div className="modal-footer">
												<button type="button" className="btn btn-sm btn-default" data-dismiss="modal"><i className="icon-check"></i> Accept</button>
											</div>
										</div>
									</div>
								</div>
								or
								<a href="page-contact.html" className="btn btn-default contact">Contact us <i className="pl-10 fa fa-phone"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
        );
    }
});
module.exports = Index;
