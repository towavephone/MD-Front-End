var React = require('react');
var Index = React.createClass({
    render: function () {
        return (
			<div className="banner">
				<div className="fixed-image section dark-translucent-bg" style={{backgroundImage: 'url(\'dist/images/美登产品一览.jpg\')'}}>
					<div className="container">
					<div className="space-top"></div>
					<h1>产品展示</h1>
					<div className="separator-2"></div>
					<p className="lead">美登产品，新一代的复合芯体</p>
					</div>
				</div>
			</div>
        );
    }
});
module.exports = Index;
