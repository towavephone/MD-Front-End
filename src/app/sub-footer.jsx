var React = require('react');
var Index = React.createClass({
    render: function () {
        return (
				<div className="subfooter">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<p>版权 &copy; 2017.广东美登纸业有限公司，本公司保留一切版权 粤ICP备17011091号-1</p>
							</div>
							<div className="col-md-4">
								<nav className="navbar navbar-default" role="navigation">
									<div className="navbar-header">
										<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-2">
											<span className="sr-only">Toggle navigation</span>
											<span className="icon-bar"></span>
											<span className="icon-bar"></span>
											<span className="icon-bar"></span>
										</button>
									</div>
									<div className="collapse navbar-collapse" id="navbar-collapse-2">
										<ul className="nav navbar-nav">
											<li><a target="_blank" href="http://www.0757rc.com/ent/1718892.html">大佛山人才网</a></li>
											<li><a target="_blank" href="https://www.tianyancha.com/company/2944739527">天眼查</a></li>
											<li><a target="_blank" href="http://www.sszp.cn/jw/showent_1718892.aspx">三水招聘网</a></li>
											<li><a target="_blank" href="http://qy.58.com/987580360454/">58同城</a></li>
										</ul>
									</div>
								</nav>
							</div>
							<div className="col-md-2" id="google_translate_element"></div>
						</div>
					</div>
				</div>
        );
    }
});
module.exports = Index;
