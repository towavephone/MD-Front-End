var React = require('react');
var Banner = require('./index/banner');
var KnowMD = require('./index/know-md');
var MDWishes = require('./index/md-wishes');
var MDCulture = require('./index/md-culture');
var Counter = require('./index/counter');
var MDImpression = require('./index/md-impression');
var Customer = require('./index/customer');
var MDProduct = require('./index/md-product');
var Company = require('./index/company');
var xhr = require('../toolers/xhr');
var helpers = require('../toolers/helpers');
var template = require('../toolers/template');
var Index = React.createClass({
    getInitialState: function () {
        return {products: []};
    },
    componentDidMount: function () {
        helpers.imgLoaded('.overlay-container img', function () {
            template.allRun();
        });
        // template.allRun();
        // this.getData();
    },
    getData: async function () {
        var ret = await xhr.get('/product', {is_home: 1});
        let results = await Promise.all([xhr.get('/msg', null), xhr.get('/msg', null)]);
        console.log(ret);
        if (ret.result === false) {
            helpers.alert(ret.error_msg);
            return;
        }
        this.setState({products: ret.data}, function () {
        });
    },
    render: function () {
        return (
            <div>
                <Banner/>
                <KnowMD/>
                <MDWishes/>
                <MDCulture/>
                <Counter/>
                <MDImpression/>
                <Customer/>
                <MDProduct/>
                <Company/>
            </div>
        );
    }
});
module.exports = Index;
