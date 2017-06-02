var React = require('react');
var Index = React.createClass({
    render: function () {
        return (
			<div className="parallax parallax-bg-md dark-translucent-bg object-non-visible" data-animation-effect="fadeIn" data-effect-delay="300">
				<div className="container">
					<div className="stats row grid-space-10">
						<div className="col-md-3 col-sm-6">
							<div className="box-style-1">
								<h2 className="title">年产量（吨）</h2>
								<i className="fa fa-bar-chart"></i>
								<span className="stat-num" data-to="100000" data-speed="3000">0</span>
							</div>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="box-style-1">
								<h2 className="title">客户（位）</h2>
								<i className="fa fa-users"></i>
								<span className="stat-num" data-to="360" data-speed="3000">0</span>
							</div>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="box-style-1">
								<h2 className="title">产品（种）</h2>
								<i className="fa fa-shopping-cart"></i>
								<span className="stat-num" data-to="1836" data-speed="3000">0</span>
							</div>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="box-style-1">
								<h2 className="title">荣誉（项）</h2>
								<i className="fa fa-thumbs-o-up"></i>
								<span className="stat-num" data-to="2687" data-speed="3000">0</span>
							</div>
						</div>
					</div>
				</div>
			</div>
        );
    }
});
module.exports = Index;
