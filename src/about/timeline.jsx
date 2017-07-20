var React = require('react');
var template = require('../toolers/template');
var Breadcrumb = require('./breadcrumb');
var Welcome = require('./index/welcome');
var Events = require('./timeline/events');
var Index = React.createClass({
    componentDidMount: function () {
        template.allRun();
    },
    render: function () {
        return (
            <div>
            <Welcome/>
            <Breadcrumb/>
            <section className="main-container">
				<div className="container">
					<div className="row">
						<div className="main col-md-12">
                            <Events/>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        );
    }
});
module.exports = Index;
