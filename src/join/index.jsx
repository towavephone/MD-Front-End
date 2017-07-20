var React = require('react');
var helpers = require('../toolers/helpers');
var xhr = require('../toolers/xhr');
var Breadcrumb = require('./breadcrumb');
var template = require('../toolers/template');
var Index = React.createClass({
    componentDidMount: function () {
        // mapJs.loadJScript();
        template.allRun();
    },
    render: function () {
        return (
            <div>
                <Breadcrumb/>
                <section className="main-container">
                    <div className="container">
                        <div className="row">
                            <div className="main col-md-12">
                                <div className="space-bottom"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
});
module.exports = Index;
