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
									<h2 className="title"></h2>
									<div className="testimonial-image">
										<img src="../../dist/images/李敬.jpg" alt="Jane Doe" title="Jane Doe" className="img-circle"/>
									</div>
									<div className="testimonial-body">
										<p>2002年开始，美登人一直专注于吸收性芯材的开发与应用。坚持同样的事情重复做，日复一日、年复一年。坚毅、认真、耐心、细致、坚持每天学习一点，每天持续改善一点，积以时日，我们终将汇聚涓流。</p>
										<div className="testimonial-info-1">- 李敬</div>
										<div className="testimonial-info-2">By 广东美登纸业有限公司 董事长</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="testimonial">
						<div className="container">
							<div className="row">
								<div className="col-md-8 col-md-offset-2">
									<h2 className="title"></h2>
									<div className="testimonial-image">
										<img src="./../dist/images/唐燕.jpg" alt="Jane Doe" title="Jane Doe" className="img-circle"/>
									</div>
									<div className="testimonial-body">
										<p>青年时准备好材料，想造一座通向月亮的桥，或者在地上造二所宫殿或庙宇。活到中年，终于决定搭一个棚。</p>
										<div className="testimonial-info-1">- 唐燕</div>
										<div className="testimonial-info-2">By 广东美登纸业有限公司 财务总监</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="testimonial">
						<div className="container">
							<div className="row">
								<div className="col-md-8 col-md-offset-2">
									<h2 className="title"></h2>
									<div className="testimonial-image">
										<img src="./../dist/images/任红英.jpg" alt="Jane Doe" title="Jane Doe" className="img-circle"/>
									</div>
									<div className="testimonial-body">
										<p>让青春反抗老朽，长发反抗秃头，热情反抗陈腐，未来反抗往昔，这是多么自然！</p>
										<div className="testimonial-info-1">- 任红英</div>
										<div className="testimonial-info-2">By 广东美登纸业有限公司 总经理</div>
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
