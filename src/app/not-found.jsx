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
									<li><i className="fa fa-home pr-10"></i><a href="index.html">Home</a></li>
									<li className="active">Error 404</li>
								</ol>
							</div>
						</div>
					</div>
				</div>
				<section className="main-container">
					<div className="container">
						<div className="row">
							<div className="main col-md-6 col-md-offset-3">
								<h1 className="title">Ooops! Page Not Found - 404</h1>
								<br/>
								<p>The requested URL was not found on this server. Make sure that the Web site address displayed in the address bar of your browser is spelled and formatted correctly or <a href="index.html">return to Home page.</a></p>
								<form role="search">
									<div className="form-group has-feedback">
										<input type="text" className="form-control" placeholder="Search"/>
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
