var React = require('react');
var Index = React.createClass({
    render: function () {
        return (
			<div className="page-top">
				<div className="container">
					<div className="row">
						<div className="col-md-8 col-md-offset-2">
							<div className="call-to-action">
								<h1 className="title">广东美登纸业有限公司</h1>
								<p>一家为卫生、医疗、保健、运动等行业提供高附加值动能材料，引导卫生行业消费需求的公司</p>
								<a className="btn btn-white more" data-toggle="modal" data-target="#myModal">
								快速了解 <i className="pl-10 fa fa-info"></i>
								</a>
								<div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
									<div className="modal-dialog">
										<div className="modal-content">
											<div className="modal-header">
												<button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
												<h4 className="modal-title" id="myModalLabel">美登简介</h4>
											</div>
											<div className="modal-body">
												<h4 className="title">美登实力</h4>
												<div className="separator"></div>
												<ul className="list-icons">
													<li><i className="icon-check"></i> 研发、设计、生产、销售卫生复合纸、膨化复合纸、湿强纸及高分子</li>
													<li><i className="icon-check"></i> 下设分公司佛山华亨卫生材料有限公司</li>
													<li><i className="icon-check"></i> 占地35亩，厂房2万平方米，生产设备16条，生产能力10万吨/年</li>
												</ul>
												<h4 className="title">美登产品</h4>
												<div className="separator"></div>
												<ul className="list-icons">
													<li><i className="icon-check"></i> 纸尿裤超薄材料</li>
													<li><i className="icon-check"></i> 卫生巾超薄吸水材料</li>
													<li><i className="icon-check"></i> 木浆复合材料</li>
													<li><i className="icon-check"></i> 膨化复合吸水材料</li>
													<li><i className="icon-check"></i> 无纺布复合吸水纸</li>
													<li><i className="icon-check"></i> 其他材料复合产品</li>
												</ul>
											</div>
											<div className="modal-footer">
												<button type="button" className="btn btn-sm btn-default" data-dismiss="modal"><i className="icon-check"></i> 了解</button>
											</div>
										</div>
									</div>
								</div>
								或
								<a href="#contact/index" className="btn btn-default contact">联系我们<i className="pl-10 fa fa-phone"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
        );
    }
});
module.exports = Index;
