var React = require('react');
var Index = React.createClass({
    render: function () {
        return (
			<div className="section clearfix">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h1 className="text-center">美登 & 文化</h1>
							<div className="separator"></div>
							<p className="lead text-center">智研、智选、智盟、智见、智创</p>
							<br/>
							<div className="row">
								<div className="col-md-6">
									<h2 className="title">美登 - 做最受国际尊敬企业</h2>
									<div className="row">
										<div className="col-md-6">
											<img src="../../dist/images/美登招牌.jpg" alt=""/>
										</div>
										<div className="col-md-6">
											<p>广东美登纸业有限公司是一家集研发、设计、生产、销售卫生复合纸、膨化复合纸、湿强纸及高分子等为一体的现代化专业纸品生产企业。广东美登企业旗下设分公司佛山华亨卫生材料有限公司！公司自创立以来就面对市场日益激烈的竞争，凭着以质求存的服务取得了国内外广大消费者的一致信任与支持。</p>
										</div>
									</div>
									<p>目前，公司占地35亩，厂房20000平方米，拥有国内先进生产设备16条，生产能力达每年10万吨，公司采用先进科学的生产及质量检测方法，对生产现场、制作流程等各个环节均进行严格的控制管理，使生产的每一件产品都有过硬的质量保证。目前，产品有纸尿裤超薄材料、卫生巾超薄吸水材料、木浆复合材料、膨化复合吸水材料、无纺布复合吸水纸及其他材料复合产品。本公司技术雄厚，生产设备先进，质保体系完善，服务质量优秀，产品规格齐全，质优价平，档次各异，尽心追求完美，与时俱进，精益求精，产品的质量和良好的服务领先市场，博得新老客户的厚爱……</p>
									<a href="#about/index" className="btn btn-white">了解更多</a>
									<div className="space hidden-md hidden-lg"></div>
								</div>
								<div className="col-md-6">
									<div className="panel-group" id="accordion">
										<div className="panel panel-default">
											<div className="panel-heading">
												<h4 className="panel-title">
													<a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
														<i className="icon-list"></i>以智见质 &bull; 质造未来
													</a>
												</h4>
											</div>
											<div id="collapseOne" className="panel-collapse collapse in">
												<div className="panel-body">
													<ul className="list-icons">
														<li><i className="icon-check"></i> 依托强有力的自主研发团队，对原材料的研发以及应用研发</li>
														<li><i className="icon-check"></i> 先后开发多项专利产品并取得专利技术资格，形成对产品的梯级开发</li>
														<li><i className="icon-check"></i> 不定期与供应商和行业领先客户进行技术交流</li>
														<li><i className="icon-check"></i> 持续进行新技术应用的开展投入和设备改进，提升产品品质</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="panel panel-default">
											<div className="panel-heading">
												<h4 className="panel-title">
													<a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" className="collapsed">
														<i className="icon-list"></i>智选科技 &bull; 媲美国际
													</a>
												</h4>
											</div>
											<div id="collapseTwo" className="panel-collapse collapse">
												<div className="panel-body">
													<ul className="list-icons">
														<li><i className="icon-check"></i> 引进德国最先进机械设备</li>
														<li><i className="icon-check"></i> 与上游技术，原材料接轨，让新老设备始终发挥最好的性能</li>
														<li><i className="icon-check"></i> 形成上游材料与芯体的一体化发展！</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="panel panel-default">
											<div className="panel-heading">
												<h4 className="panel-title">
													<a data-toggle="collapse" data-parent="#accordion" href="#collapseThree" className="collapsed">
														<i className="icon-list"></i>联盟全球 &bull; 供应全球
													</a>
												</h4>
											</div>
											<div id="collapseThree" className="panel-collapse collapse">
												<div className="panel-body">
													<h4 className="title">产能保障</h4>
													<div className="separator-2"></div>
													<ul className="list-icons">
														<li><i className="icon-check"></i> 2017年10万吨产能</li>
													</ul>
													<h4 className="title">供应链保障</h4>
													<div className="separator-2"></div>
													<ul className="list-icons">
														<li><i className="icon-check"></i> 华亨卫生材料 + 战略高分子供应商 + 战略无纺布供应商 = 上下游集成形成产业优化</li>
														<li><i className="icon-check"></i> 确保品质、新材料、新技术的配套开发</li>
													</ul>
													<h4 className="title">全球采购</h4>
													<div className="separator-2"></div>
													<ul className="list-icons">
														<li><i className="icon-check"></i> 全球视野 + 战略采购</li>
														<li><i className="icon-check"></i> 期货 + 现货确保原材料的成本与供应</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="panel panel-default">
											<div className="panel-heading">
												<h4 className="panel-title">
													<a data-toggle="collapse" data-parent="#accordion" href="#collapseFour" className="collapsed">
														<i className="icon-list"></i>智察趋势 &bull; 先行一步
													</a>
												</h4>
											</div>
											<div id="collapseFour" className="panel-collapse collapse">
												<div className="panel-body">
													<h4 className="title">一体化</h4>
													<div className="separator-2"></div>
													<ul className="list-icons">
														<li><i className="icon-check"></i> 成功引进德国最先进机械设备，让新设备发挥最好的性能</li>
														<li><i className="icon-check"></i> 形成上游材料与芯体的一体化发展！</li>
													</ul>
													<h4 className="title">国际化</h4>
													<div className="separator-2"></div>
													<ul className="list-icons">
														<li><i className="icon-check"></i> 以中国市场为起点，践行国家一带一路的战略</li>
														<li><i className="icon-check"></i> 与国际著名的流通商、优秀客户合作</li>
														<li><i className="icon-check"></i> 全球推广美登芯体产品与解决方案</li>
													</ul>
												</div>
											</div>
										</div>
										<div className="panel panel-default">
											<div className="panel-heading">
												<h4 className="panel-title">
													<a data-toggle="collapse" data-parent="#accordion" href="#collapseFive" className="collapsed">
														<i className="icon-list"></i>智芯时代 &bull; 开创先驱
													</a>
												</h4>
											</div>
											<div id="collapseFive" className="panel-collapse collapse">
												<div className="panel-body">
													<h4 className="title">木浆 + 高分子</h4>
													<div className="separator-2"></div>
													<ul className="list-icons">
														<li><i className="icon-check"></i> 缺点：断层，起坨，移位</li>
													</ul>
													<h4 className="title">复合芯体</h4>
													<div className="separator-2"></div>
													<ul className="list-icons">
														<li><i className="icon-check"></i> 解决木浆 + 高分子断层、起坨、移位的缺点</li>
														<li><i className="icon-check"></i> 存在吸收速度慢、扩散短、反渗大的缺点</li>
														<li><i className="icon-check"></i> 产品利用率低</li>
													</ul>
													<h4 className="title">美登芯体</h4>
													<div className="separator-2"></div>
													<ul className="list-icons">
														<li><i className="icon-check"></i> 成功解决了以上问题</li>
														<li><i className="icon-check"></i> 定点、定位、定量、精确施加高分子</li>
														<li><i className="icon-check"></i> 精确控制并引导液体的流动流向</li>
														<li><i className="icon-check"></i> 优点：吸收速度快，加大加强扩散，反渗降低，提高芯体利用率</li>
													</ul>
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
