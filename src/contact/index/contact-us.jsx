var React = require('react');
var xhr = require('../../toolers/xhr');
var helpers = require('../../toolers/helpers');
var validator = helpers.validator;
var Input = React.createClass({
    render: function () {
        if (this.props.error === null) {
            return <div className="form-group">
                {this.props.children}
            </div>;
        }
        if (this.props.error === undefined || this.props.error.length === 0) {
            return <div className="form-group has-success has-feedback">
                {this.props.children}
                <span className="glyphicon glyphicon-ok form-control-feedback"></span>
            </div>;
        }
        return <div className="form-group has-error has-feedback">
            {this.props.children}
            <span className="glyphicon glyphicon-remove form-control-feedback"></span>
            {
                this.props.error.map(function (data, index) {
                    return <span key={index} id="helpBlock" className="help-block">{data}</span>;
                })
            }
        </div>;
    }
});
var Index = React.createClass({
    getInitialState: function () {
        return {
            name: '',
            email: '',
            subject: '',
            message: '',
            errors: {name: null, email: null, subject: null, message: null}
        };
    },
    getDefaultProps: function () {
        return {};
    },
    componentDidMount: function () {
        validator.config = {
            name: {
                types: ['isRightLength'],
                params: {isRightLength: {min: 2, max: 20}},
                name: '姓名'
            },
            email: {
                types: ['isRightLength', 'isEmail'],
                params: {isRightLength: {min: 5, max: 20}},
                name: '邮箱'
            },
            subject: {
                types: ['isRightLength'],
                params: {isRightLength: {min: 1, max: 30}},
                name: '主题'
            },
            message: {
                types: ['isNonEmpty'],
                name: '留言'
            }
        };
    },
    setValue: function (e) {
        var data = helpers.setValue(e);
        var id = e.target.id;
        this.state[id] = e.target.value;
        var params = helpers.getParams(this.state);
        console.log(params);
        validator.validate(params);
        this.state.errors[id] = validator.messages[id];
        data.errors = this.state.errors;
        this.setState(data);
    },
    submit: function () {
        var params = helpers.getParams(this.state, ['errors', 'isDisabled']);
        console.log(params);
        validator.validate(params);
        this.setState({errors: validator.messages});
        console.log(validator.messages);
        if (validator.hasErrors()) {
            helpers.alert('请按要求填写相关内容');
            return;
        }
        this.postData(params);
    },
    postData: async function (params) {
        var ret = await xhr.post('/msg/add', params);
        // let results = await Promise.all([xhr.get('/msg', null),xhr.get('/msg', null)]);
        console.log(ret);
        if (ret.result === false) {
            helpers.alert(ret.error_msg);
            return;
        }
        helpers.alert('插入成功');
    },
    render: function () {
        return (
            <div>
                <div className="main col-md-8">
                    <h1 className="page-title">留言</h1>
                    <p>请留下你们的宝贵意见或建议</p>
                    <div className="contact-form">
                        <Input error={this.state.errors.name}>
                            <label htmlFor="name" className="control-label">姓名</label>
                            <input className="form-control input-lg" type="text" id="name" value={this.state.name} placeholder="请输入你的姓名" onChange={this.setValue}/>
                        </Input>
                        <Input error={this.state.errors.email}>
                            <label htmlFor="email" className="control-label">邮箱</label>
                            <input type="text" className="form-control input-lg" id="email" value={this.state.email} placeholder="请输入你的邮箱" onChange={this.setValue}/>
                        </Input>
                        <Input error={this.state.errors.subject}>
                            <label htmlFor="subject" className="control-label">主题</label>
                            <input type="text" className="form-control input-lg" id="subject" value={this.state.subject} placeholder="请输入留言的主题" onChange={this.setValue}/>
                        </Input>
                        <Input error={this.state.errors.message}>
                            <label htmlFor="message" className="control-label">留言</label>
                            <textarea name="message" id="message" maxLength={500} value={this.state.message} cols="30" rows="10" className="form-control" placeholder="对我们说些悄悄话吧" onChange={this.setValue}></textarea>
                        </Input>
                        <button className="btn btn-default" onClick={this.submit}>发送</button>
                    </div>
                </div>
                <aside className="col-md-4">
                    <div className="sidebar">
                        <div className="side vertical-divider-left">
                            <h3 className="title">联系我们</h3>
                            <ul className="list">
                                <li><strong></strong></li>
                                <li><i className="fa fa-home pr-10"></i>地址：中国广东佛山市三水区<br/>乐平工业区齐力大道南9号</li>
                                <li><i className="fa fa-phone pr-10"></i><a href="tel:0757-87388816">电话：0757-87388816</a></li>
                                <li><i className="fa fa-mobile pr-10 pl-5"></i><a href="tel:13923287557">手机： 13923287557</a></li>
                                <li><i className="fa fa-qq pr-10"></i><a href="tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=651207923&website=www.oicqzone.com">QQ：651207923</a></li>
                                <li><i className="fa fa-envelope pr-10"></i>邮箱：ty27149@163.com</li>
                                <li><i className="fa fa-fax pr-10"></i>传真：0757-87388816</li>
                            </ul>
                            <ul className="social-links colored circle large">
                                <li className="facebook"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-qq"></i></a></li>
                                <li className="twitter"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-tencent-weibo"></i></a></li>
                                <li className="googleplus"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-weixin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </aside>
            </div>
        );
    }
});
module.exports = Index;
