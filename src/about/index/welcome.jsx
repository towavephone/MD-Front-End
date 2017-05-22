var React = require('react');
var Index = React.createClass({
    render: function () {
        return (
			<div className="banner">
				<div className="fixed-image section dark-translucent-bg" style={{backgroundImage: 'url(\'dist/images/page-about-banner-1.jpg\')'}}>
					<div className="container">
					<div className="space-top"></div>
					<h1>Welcome to iDea</h1>
					<div className="separator-2"></div>
					<p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae sit excepturi, <br className="hidden-xs hidden-sm"/> hic officiis illo dolore sunt assumenda saepe id commodi sint praesentium <br className="hidden-xs hidden-sm"/> natus laborum quas cumque facilis, suscipit aliquam dolorum.</p>
					</div>
				</div>
			</div>
        );
    }
});
module.exports = Index;
