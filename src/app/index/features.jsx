var React = require('react');
var Index = React.createClass({
    render: function () {
        return (
			<section className="main-container gray-bg">
				<div className="main">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<h1 className="text-center title">美登 & 愿景</h1>
								<div className="separator"></div>
								<p className="text-center">企业愿景成就美登全球化</p>
								<div className="row">
									<div className="col-sm-4">
										<div className="box-style-1 white-bg object-non-visible" data-animation-effect="fadeInUpSmall" data-effect-delay="0">
											<i className="fa fa-globe"></i>
											<h2>全球视界</h2>
											<p>市场战略全球化，产品规格全球化，技术输出全球化，产能输出全球化。</p>
											<a href="page-services.html" className="btn-default btn">了解更多</a>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="box-style-1 white-bg object-non-visible" data-animation-effect="fadeInUpSmall" data-effect-delay="200">
											<i className="fa fa-line-chart"></i>
											<h2>共同成长</h2>
											<p>全球客户共同研发，共同发展，成功打造美登领导工业品牌。</p>
											<a href="page-services.html" className="btn-default btn">了解更多</a>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="box-style-1 white-bg object-non-visible" data-animation-effect="fadeInUpSmall" data-effect-delay="400">
											<i className="fa fa-share-alt"></i>
											<h2>共同分享</h2>
											<p>分享美登研发成果，提供定制解决方案，助力客户打造消费品牌，形成上下游产业共赢！</p>
											<a href="page-services.html" className="btn-default btn">了解更多</a>
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
