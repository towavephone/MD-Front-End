var React = require('react');
var Index = React.createClass({
    render: function () {
        return (
			<div className="page-intro">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<ol className="breadcrumb">
								<li><i className="fa fa-home pr-10"></i><a href="index.html">Home</a></li>
								<li className="active">About Us</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
        );
    }
});
module.exports = Index;
