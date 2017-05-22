var React = require('react');
var Index = React.createClass({
    render: function () {
        return (
			<div className="section gray-bg text-muted footer-top clearfix">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="owl-carousel clients">
								<div className="client">
									<a href="#"><img src="../../dist/images/client-1.png" alt=""/></a>
								</div>
								<div className="client">
									<a href="#"><img src="../../dist/images/client-2.png" alt=""/></a>
								</div>
								<div className="client">
									<a href="#"><img src="../../dist/images/client-3.png" alt=""/></a>
								</div>
								<div className="client">
									<a href="#"><img src="../../dist/images/client-4.png" alt=""/></a>
								</div>
								<div className="client">
									<a href="#"><img src="../../dist/images/client-5.png" alt=""/></a>
								</div>
								<div className="client">
									<a href="#"><img src="../../dist/images/client-6.png" alt=""/></a>
								</div>
								<div className="client">
									<a href="#"><img src="../../dist/images/client-7.png" alt=""/></a>
								</div>
								<div className="client">
									<a href="#"><img src="../../dist/images/client-8.png" alt=""/></a>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<blockquote className="inline">
								<p className="margin-clear">Design is not just what it looks like and feels like. Design is how it works.</p>
								<footer><cite title="Source Title">Steve Jobs </cite></footer>
							</blockquote>
						</div>
					</div>
				</div>
			</div>
        );
    }
});
module.exports = Index;
