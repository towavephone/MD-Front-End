var React = require('react');
var Index = React.createClass({
    render: function () {
        return (
			<div className="page-intro">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<ol className="breadcrumb">
								<li><i className="fa fa-home pr-10"></i><a href="#app/index">首页</a></li>
								<li className="active">产品展示</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
        );
    }
});
module.exports = Index;
