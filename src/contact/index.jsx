var React = require('react');
var helpers = require('../toolers/helpers');
var xhr = require('../toolers/xhr');
var BaiduMap = require('./index/baidu-map');
var Breadcrumb = require('./index/breadcrumb');
var template = require('../toolers/template');
var ContactUs = require('./index/contact-us');
var Index = React.createClass({
    componentDidMount: function () {
        // mapJs.loadJScript();
        template.allRun();
    },
    render: function () {
        return (
            <div>
                <BaiduMap/>
                <div className="clearfix"></div>
                <Breadcrumb/>
                <section className="main-container">
                    <div className="container">
                        <div className="row">
                            <ContactUs {...this.props}/>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
});
module.exports = Index;
