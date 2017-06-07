var React = require('react');
var Index = React.createClass({
    render: function () {
        return (
			<div className="section gray-bg text-muted footer-top clearfix">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="owl-carousel clients" style={{padding: '30px'}}>
								<div className="client" style={{paddingTop: '10px'}}>
									<a href="http://www.hengan.com/" target="_blank"><img src="../../dist/images/恒安集团.png" alt=""/></a>
								</div>
								<div className="client">
									<a href="http://www.unicharm.com.cn/index.html" target="_blank"><img src="../../dist/images/尤妮佳.png" alt=""/></a>
								</div>
								<div className="client" style={{paddingTop: '25px'}}>
									<a href="http://www.kimberly-clark.com.cn/" target="_blank"><img src="../../dist/images/金佰利.jpg" alt=""/></a>
								</div>
								<div className="client" style={{paddingTop: '25px'}}>
									<a href="http://www.pg.com.cn/" target="_blank"><img src="../../dist/images/宝洁.png" alt=""/></a>
								</div>
								<div className="client" style={{paddingTop: '13px'}}>
									<a href="http://www.kao.com/cn/" target="_blank"><img src="../../dist/images/花王.png" alt=""/></a>
								</div>
								<div className="client" style={{paddingTop: '30px'}}>
									<a href="http://www.kabuguoji.com/" target="_blank"><img src="../../dist/images/卡布.png" alt=""/></a>
								</div>
								<div className="client" style={{paddingTop: '25px'}}>
									<a href="https://www.basf.com/cn/zh.html" target="_blank"><img src="../../dist/images/巴斯夫.png" alt=""/></a>
								</div>
								<div className="client" style={{paddingTop: '42px'}}>
									<a href="http://www.sumitomo-chem.co.jp/" target="_blank"><img src="../../dist/images/住友.png" alt=""/></a>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<blockquote className="inline">
								<p className="margin-clear">2002年开始，美登人一直专注于吸收性芯材的开发与应用。坚持同样的事情重复做，日复一日、年复一年。坚毅、认真、耐心、细致、坚持每天学习一点，每天持续改善一点，积以时日，我们终将汇聚涓流。</p>
								<footer><cite title="Source Title">李敬 </cite></footer>
							</blockquote>
						</div>
					</div>
				</div>
			</div>
        );
    }
});
module.exports = Index;
