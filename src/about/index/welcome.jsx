var React = require('react');
var Index = React.createClass({
    render: function () {
        return (
			<div className="banner">
				<div className="fixed-image section dark-translucent-bg" style={{backgroundImage: 'url(\'dist/images/美登办公室一览.jpg\')'}}>
					<div className="container">
					<div className="space-top"></div>
					<h1>关于我们</h1>
					<div className="separator-2"></div>
					<p className="lead">了解美登，走进美登</p>
					</div>
				</div>
			</div>
        );
    }
});
module.exports = Index;
