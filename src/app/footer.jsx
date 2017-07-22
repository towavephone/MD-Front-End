var React = require('react');
var Index = React.createClass({
    render: function () {
        return (
			<footer id="footer">
				<div className="footer">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<div className="footer-content">
									<div className="logo-footer"><img className="lazyload" src="../../dist/images/unloaded.jpg" id="logo-footer" data-src="../dist/images/美登大logo.png" alt="" width="200"/></div>
									<div className="row">
										<div className="col-sm-6">
											<p>以智慧、品质、志气为一体</p>
											<p>集天时、地利、人和的趋势</p>
											<p>创高端、精品、领袖的品牌</p>
											<div className="space-bottom hidden-lg hidden-xs"></div>
											<ul className="social-links circle">
												<li className="facebook"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-weixin"></i></a></li>
												<li className="twitter"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-qq"></i></a></li>
												<li className="googleplus"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-google-plus"></i></a></li>
												<li className="skype"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-skype"></i></a></li>
												<li className="linkedin"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-linkedin"></i></a></li>
											</ul>
										</div>
										<div className="col-sm-6">
											<ul className="list-icons">
												<li><i className="fa fa-home pr-10"></i>地址：中国广东佛山市三水区<br/>乐平工业区齐力大道南9号</li>
												<li><i className="fa fa-phone pr-10"></i><a href="tel:0757-87388816">电话：0757-87388816</a></li>
												<li><i className="fa fa-mobile pr-10 pl-5"></i><a href="tel:13923287557">手机：13923287557</a></li>
												<li><i className="fa fa-qq pr-10"></i><a href="tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=651207923&website=www.oicqzone.com">QQ：651207923</a></li>
												<li><i className="fa fa-envelope pr-10"></i>邮箱：ty27149@163.com</li>
												<li><i className="fa fa-fax pr-10"></i>传真：0757-87388811</li>
											</ul>
										</div>
									</div>
									<a href="#about/index" className="link"><span>了解更多</span></a>
								</div>
							</div>
							<div className="col-sm-6 col-md-3 col-lg-2 col-lg-offset-1">
								<div className="footer-content">
									<h2>链接</h2>
									<nav>
										<ul className="nav nav-pills nav-stacked">
											<li><a href="#app/index">首页</a></li>
											<li><a href="#about/index">关于美登</a></li>
											<li><a href="#product/index">产品展示</a></li>
											<li><a href="#news/index">新闻中心</a></li>
											<li><a href="#join/index">加入美登</a></li>
											<li><a href="#contact/index">联系我们</a></li>
											<li><a href="#link/index">相关链接</a></li>
										</ul>
									</nav>
								</div>
							</div>
							<div className="col-sm-6 col-md-3 col-lg-3">
								<div className="footer-content">
									<h2>订阅</h2>
									<form className="margin-bottom-clear">
										<div className="form-group has-feedback">
											<label className="sr-only" htmlFor="subscribe">输入邮箱</label>
											<input type="email" className="form-control" id="subscribe" placeholder="请输入邮箱" name="subscribe" required/>
											<i className="fa fa-envelope form-control-feedback"></i>
											<button type="submit" className="btn btn-white btn-sm">订阅</button>
										</div>
									</form>
									<div className="box small"><i className="fa fa-cc-paypal"></i></div>
									<div className="box small"><i className="fa fa-cc-visa"></i></div>
									<div className="box small"><i className="fa fa-cc-mastercard"></i></div>
									<div className="box small"><i className="fa fa-cc-discover"></i></div>
								</div>
							</div>
						</div>
					</div>
				</div>
            </footer>
        );
    }
});
module.exports = Index;
