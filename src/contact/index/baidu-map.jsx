var React = require('react');
var mapJs = require('../../../dist/js/baidu_map.js');
var Index = React.createClass({
    componentDidMount: function () {
        mapJs.loadJScript();
    },
    render: function () {
        return (
            <div className="banner" >
				<div id="map" style={{height: '400px'}}></div>
			</div>
        );
    }
});
module.exports = Index;
