var React = require('react');
var Index = React.createClass({
    render: function () {
        return (
			<div className="section clearfix">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<h1 className="text-center">美登 & 印象</h1>
							<div className="separator"></div>
							<p className="lead text-center">初遇美登，爱上美登</p>
							<div className="vertical hc-tabs">
								<div className="hc-tabs-top" style={{display: 'table', margin: '0 auto'}}>
									<img className="lazyload" src="../../dist/images/unloaded.jpg" data-tab="#tab1" data-src="../../dist/images/美登形象一览.jpg" alt="iDea" data-tab-animation-effect="fadeInRightSmall"/>
									<img className="lazyload" src="../../dist/images/unloaded.jpg" data-tab="#tab2" data-src="../../dist/images/美登奖杯.jpg" alt="iDea" data-tab-animation-effect="fadeInRightSmall"/>
									<img className="lazyload" src="../../dist/images/unloaded.jpg" data-tab="#tab3" data-src="../../dist/images/美登发展.jpg" alt="iDea" data-tab-animation-effect="fadeInRightSmall"/>
									<div className="space"></div>
								</div>
								<div className="arrow hidden-sm hidden-xs"><i className="fa fa-caret-up"></i></div>
								<ul className="nav nav-tabs" role="tablist">
									<li className="active"><a href="#tab1" role="tab" data-toggle="tab"><i className="fa fa-magic pr-10"></i> 脚踏实地 &bull; 专心致志</a></li>
									<li><a href="#tab2" role="tab" data-toggle="tab"><i className="fa fa-life-saver pr-10"></i> 筑建文化 &bull; 创新美登</a></li>
									<li><a href="#tab3" role="tab" data-toggle="tab"><i className="fa fa-expand pr-10"></i> 品质 &bull; 产能 &bull; 市场</a></li>
								</ul>
								<div className="tab-content">
									<div className="tab-pane fade in active" id="tab1">
										<h1 className="text-center title">美登 &bull; 日常</h1>
										<div className="space"></div>
										<div className="row">
											<div className="col-md-6">
												<ul className="list-icons">
													<li><i className="icon-check pr-10"></i> 最上图为李敬董事长在阅读书籍</li>
													<li><i className="icon-check pr-10"></i> 第二行第一列是美登全体管理的合影</li>
													<li><i className="icon-check pr-10"></i> 第二行第二列是美登日常会议</li>
													<li><i className="icon-check pr-10"></i> 第三行第一列是员工的日常工作环境</li>
													<li><i className="icon-check pr-10"></i> 第三行第二列是任红英总经理在指导工作</li>
												</ul>
											</div>
											<div className="col-md-6">
												<p>2002年开始，美登人一直专注于吸收性芯材的开发与应用。坚持同样的事情重复做，日复一日、年复一年。坚毅、认真、耐心、细致、坚持每天学习一点，每天持续改善一点，积以时日，我们终将汇聚涓流。</p>
												<a href="#join/index" className="btn btn-default">了解更多</a>
											</div>
										</div>
									</div>
									<div className="tab-pane fade" id="tab2">
										<h1 className="text-center title">美登 &bull; 理念</h1>
										<div className="space"></div>
										<div className="row">
											<div className="col-md-6">
												<h4 className="title">愿景</h4>
												<div className="separator-2"></div>
												<ul className="list-icons">
													<li><i className="icon-check"></i> 为卫生、医疗、保健、运动等行业提供高附加值动能材料，引导上述行业的消费需求，为完成业界领头羊的目标努力</li>
													<li><i className="icon-check"></i> 为客户创造价值并成为材料行业的领导者</li>
												</ul>
												<h4 className="title">核心价值观</h4>
												<div className="separator-2"></div>
												<ul className="list-icons">
													<li><i className="icon-check"></i> 自强、公平、竞争、奉献、创造</li>
												</ul>
											</div>
											<div className="col-md-6">
												<h4 className="title">经营理念</h4>
												<div className="separator-2"></div>
												<ul className="list-icons">
													<li><i className="icon-check"></i> 以人为本，诚信经营</li>
													<li><i className="icon-check"></i> 团队协作，开拓创新</li>
												</ul>
												<h4 className="title">质量方针</h4>
												<div className="separator-2"></div>
												<ul className="list-icons">
													<li><i className="icon-check"></i> 持续改进，追求完美</li>
												</ul>
												<a href="#about/index" className="btn btn-default">了解更多</a>
											</div>
										</div>
									</div>
									<div className="tab-pane fade" id="tab3">
										<h1 className="text-center title">美登 &bull; 产品</h1>
										<div className="space"></div>
										<div className="row">
											<div className="col-md-6">
												<h4 className="title">性能优先</h4>
												<div className="separator-2"></div>
												<ul className="list-icons">
													<li><i className="icon-check"></i> 进入全新的美登芯体时代，真正实效解决复合芯体时期存在的问题，大大提升产品性能</li>
												</ul>
												<h4 className="title">销量优先</h4>
												<div className="separator-2"></div>
												<ul className="list-icons">
													<li><i className="icon-check"></i> 年销量达到10万吨的市场份额，在国内同行业处于遥遥领先的地位</li>
												</ul>
											</div>
											<div className="col-md-6">
												<h4 className="title">口碑优先</h4>
												<div className="separator-2"></div>
												<ul className="list-icons">
													<li><i className="icon-check"></i> 产品性能得到国内外高端纸尿裤大企业大品牌的高度认可</li>
												</ul>
												<a href="#product/index" className="btn btn-default">了解更多</a>
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
