var React = require('react');
var Index = React.createClass({
    render: function () {
        return (
			<div className="parallax parallax-bg-3 dark-translucent-bg object-non-visible" data-animation-effect="fadeIn" data-effect-delay="300">
				<div className="container">
					<div className="stats row grid-space-10">
						<div className="col-md-3 col-sm-6">
							<div className="box-style-1">
								<h2 className="title">Projects</h2>
								<i className="fa fa-briefcase"></i>
								<span className="stat-num" data-to="1525" data-speed="3000">0</span>
							</div>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="box-style-1">
								<h2 className="title">Clients</h2>
								<i className="fa fa-users"></i>
								<span className="stat-num" data-to="1125" data-speed="3000">0</span>
							</div>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="box-style-1">
								<h2 className="title">Downloads</h2>
								<i className="fa fa-cloud-download"></i>
								<span className="stat-num" data-to="1836" data-speed="3000">0</span>
							</div>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="box-style-1">
								<h2 className="title">Likes</h2>
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
