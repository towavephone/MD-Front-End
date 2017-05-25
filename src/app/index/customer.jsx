var React = require('react');
var Index = React.createClass({
    render: function () {
        return (
			<div className="section gray-bg clearfix">
				<div className="owl-carousel content-slider">
					<div className="testimonial">
						<div className="container">
							<div className="row">
								<div className="col-md-8 col-md-offset-2">
									<h2 className="title">性能优越!</h2>
									<div className="testimonial-image">
										<img src="../../dist/images/施文博.jpg" alt="Jane Doe" title="Jane Doe" className="img-circle"/>
									</div>
									<div className="testimonial-body">
										<p>美登公司的产品性能优越，做出的纸尿裤产品吸水性远超其他同类产品，同时质量非常稳定，相信美登品质。</p>
										<div className="testimonial-info-1">- 施文博</div>
										<div className="testimonial-info-2">By 福建恒安集团董事局主席</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="testimonial">
						<div className="container">
							<div className="row">
								<div className="col-md-8 col-md-offset-2">
									<h2 className="title">服务周到!</h2>
									<div className="testimonial-image">
										<img src="./../dist/images/高原豪久.jpg" alt="Jane Doe" title="Jane Doe" className="img-circle"/>
									</div>
									<div className="testimonial-body">
										<p>美登公司的服务周到，当天的订单基本上2,3天就完成，一旦有质量问题支持无条件退货。</p>
										<div className="testimonial-info-1">- 高原豪久</div>
										<div className="testimonial-info-2">By 尤妮佳株式会社 代表取缔役 社长执行役</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="testimonial">
						<div className="container">
							<div className="row">
								<div className="col-md-8 col-md-offset-2">
									<h2 className="title">性价比高!</h2>
									<div className="testimonial-image">
										<img src="./../dist/images/邵青峰.jpg" alt="Jane Doe" title="Jane Doe" className="img-circle"/>
									</div>
									<div className="testimonial-body">
										<p>美登产品虽然比其他同类产品要贵，但胜在质量稳定，用在本公司的产品上就是放心。</p>
										<div className="testimonial-info-1">- 邵青峰</div>
										<div className="testimonial-info-2">By 金佰利（中国）有限公司总裁</div>
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
