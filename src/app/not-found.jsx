var React = require('react');
var Index = React.createClass({
    render: function () {
        return (
			<div>
				<div className="page-intro">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<ol className="breadcrumb">
									<li><i className="fa fa-home pr-10"></i><a href="#app/index">首页</a></li>
									<li className="active">页面未找到</li>
								</ol>
							</div>
						</div>
					</div>
				</div>
				<section className="main-container">
					<div className="container">
						<div className="row">
							<div className="main col-md-6 col-md-offset-3">
								<h1 className="title">对不起，您访问的页面不存在</h1>
								<br/>
								<p>服务器端未找到该页面，请返回<a href="#app/index">首页</a>。</p>
								<form role="search">
									<div className="form-group has-feedback">
										<input type="text" className="form-control" placeholder="搜索"/>
										<i className="fa fa-search form-control-feedback"></i>
									</div>
								</form>
							</div>
						</div>
					</div>
				</section>
			</div>
        );
    }
});
module.exports = Index;
