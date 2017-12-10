var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./app/header');
var HeaderTop = require('./app/header-top');
var Footer = require('./app/footer');
var SubFooter = require('./app/sub-footer');
var helpers = require('./toolers/helpers');
var template = require('./toolers/template');
require('../dist/bootstrap/css/bootstrap.css');
// 字体图标文件
require('../dist/fonts/font-awesome/css/font-awesome.css');
require('../dist/fonts/fontello/css/fontello.css');
// 首页响应动画滑动图片切换效果
require('../dist/plugins/rs-plugin/css/settings.css');
require('../dist/plugins/rs-plugin/css/extralayers.css');
// 查看图片
require('../dist/plugins/magnific-popup/magnific-popup.css');
// 缓慢加载动画效果
require('../dist/css/animations.css');
// 幻灯片效果
require('../dist/plugins/owl-carousel/owl.carousel.css');
// 自定义css
require('../dist/css/style.css');
var App = React.createClass({
    getDefaultProps: function () {
        return {pages: ['app', 'product', 'about', 'contact', 'news', 'link', 'join']};
    },
    getInitialState: function () {
        return {content: null};
    },
    componentDidMount: function () {
        this.initContent();
        // 一次性的绑定，不能多次绑定，否则会出现抖动问题
        template.runOnce();
        window.addEventListener('hashchange', function (e) {
            // animate.showLoader();
            this.initContent();
        }.bind(this));
        window.onerror = function (msg) {
            helpers.alert(msg.replace('Uncaught ', ''));
        };
    },
    alert: function (msg) {
        $.bootstrapGrowl(msg, {
            ele: 'body',
            type: 'info',
            offset: {from: 'top', amount: 20},
            align: 'left',
            width: 'auto',
            delay: 4000,
            allow_dismiss: true,
            stackup_spacing: 10
        });
    },
    jump: function (url, data, open_new) {
        var hash = url + '?';
        for (var key in data) {
            hash += (hash == url + '?' ? '' : '&') + key + '=' + data[key];
        }
        if (open_new) {
            window.open('#' + hash, '_blank');
        } else {
            this.setState(
                {url: url, data: data},
                function () {
                    this.initContent();
                    location.hash = hash;
                }.bind(this)
            );
        }
    },
    openModal: function (modal) {
        this.setState({modal: modal});
    },
    setCache: function (obj) {
        this.state.cache[Object.keys(obj)[0]] = obj[Object.keys(obj)[0]];
    },
    initContent: function () {
        var {url, data} = helpers.getHashInfo();
        var pages = this.props.pages;
        var flag = true;
        var is_home_page = false;
        if (location.hash === '' && (location.pathname === '/' || location.pathname === '/index.html')) {
            is_home_page = true;
            url = 'app/index';
        }
        for (var i in pages) {
            var page = pages[i];
            var length = page.length;
            if (is_home_page || url.slice(0, length) === page) {
                flag = false;
                require.ensure([], function (require) {
                    var content = require('./' + url);
                    this.setState({content: content, data: data, url: url});
                }.bind(this));
                break;
            }
        }
        if (flag) {
            require.ensure([], function (require) {
                var content = require('./app/not-found');
                this.alert('访问的网址不存在');
                this.setState({content: content, data: data, url: url});
            }.bind(this));
        }
    },
    render: function () {
        var content = null;
        if (this.state.content) {
            content = <div><this.state.content {...this.state.data}
                    jump={this.jump}
                    alert={this.alert}
                    setCache={this.setCache}
                    cache={this.state.cache}/><Footer/>
                <SubFooter/></div>;
        }
        return <div>
            <div className="scrollToTop"><i className="icon-up-open-big"></i></div>
            <div className="page-wrapper">
                <HeaderTop/>
                <Header jump={this.jump}/>
                {content}
            </div>
        </div>;
    }
});
ReactDOM.render(<App/>, document.getElementById('page'));
