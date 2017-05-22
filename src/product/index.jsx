var React = require('react');
var xhr = require('../toolers/xhr');
var helpers = require('../toolers/helpers');
var template = require('../toolers/template');
var Welcome = require('./index/welcome');
var Breadcrumb = require('./index/breadcrumb');
var AllProduct = require('./index/all-product');
var Index = React.createClass({
    getInitialState: function () {
        return {products: []};
    },
    getDefaultProps: function () {
        return {
            images: [
                'dist/images/产品介绍.png',
                'dist/images/产品介绍2.png'
            ]
        };
    },
    componentDidMount: function () {
        helpers.imgLoaded('.overlay-container img', function () {
            template.allRun();
        });
        // template.allRun();
        // this.getData();
    },
    getData: async function () {
        var ret = await xhr.get('/product', null);
        // let results = await Promise.all([xhr.get('/msg', null),xhr.get('/msg', null)]);
        console.log(ret);
        if (ret.result === false) {
            helpers.alert(ret.error_msg);
            return;
        }
        this.setState({products: ret.data}, function () {
            // animate.allRun();
        });
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
                            <AllProduct/>
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
