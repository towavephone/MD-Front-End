var React = require('react');
var xhr = require('../../toolers/xhr');
var helpers = require('../../toolers/helpers');
var Select = require('react-select');
import 'react-select/dist/react-select.css';
var validator = helpers.validator;
var Input = React.createClass({
    render: function () {
        if (this.props.error === null) {
            return <div className="form-group">
                {this.props.children}
            </div>;
        }
        if (this.props.error === undefined || this.props.error.length === 0) {
            if (this.props.onlyShowMessage) {
                return <div className="form-group">
                    {this.props.children}
                </div>;
            }
            return <div className="form-group has-success has-feedback">
                {this.props.children}
            </div>;
        }
        return <div className="form-group has-error has-feedback">
            {this.props.children}
            {this.props.onlyShowMessage ? null : <span className="glyphicon glyphicon-remove form-control-feedback"></span>}
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
            errors: {name: null, email: null, subject: null, message: null},
            typeId: '',
            types: [],
            msg: [],
            number: []
        };
    },
    getDefaultProps: function () {
        return {};
    },
    componentDidMount: function () {
        validator.config = {
            typeId: {
                types: ['isNonEmpty'],
                name: '类别'
            },
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
        this.getSelectData();
        this.switchType(this.props.id);
        this.getNumber();
    },
    setValue: function (e) {
        var data = helpers.setValue(e);
        // 去掉输入时的校验功能，焦点的变化影响输入
        // var id = e.target.id;
        // this.state[id] = e.target.value;
        // var params = helpers.getParams(this.state);
        // console.log(params);
        // validator.validate(params);
        // this.state.errors[id] = validator.messages[id];
        // data.errors = this.state.errors;
        this.setState(data);
    },
    onChange: function (a, b, c) {
        var data = helpers.onChange(a, b, c);
        this.setState(data);
    },
    submit: function () {
        var params = helpers.getParams(this.state, ['errors', 'types']);
        console.log(params);
        validator.validate(params);
        this.setState({errors: validator.messages});
        console.log(validator.messages);
        if (validator.hasErrors()) {
            helpers.alert('请按要求填写相关内容');
            return;
        }
        // if (validator.hasErrors()) {
        //     helpers.alert('请按要求填写相关内容');
        //     return;
        // }
        this.postData(params);
    },
    getSelectData: async function () {
        var ret = await xhr.get('/msg/type', null);
        console.log(ret);
        if (ret.result === false) {
            helpers.alert(ret[1].error_msg);
            return;
        }
        this.setState({types: ret.data});
    },
    postData: async function (params) {
        var ret = await xhr.post('/msg/add', params);
        // let results = await Promise.all([xhr.get('/msg', null),xhr.get('/msg', null)]);
        console.log(ret);
        if (ret.result === false) {
            helpers.alert(ret.error_msg);
            return;
        }
        helpers.alert('评论成功，感谢你的建议！');
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
            errors: {name: null, email: null, subject: null, message: null}
        });
        this.getSelectData();
        this.switchType(this.props.id);
        this.getNumber();
    },
    getNumber: async function () {
        var ret = await xhr.get('/msg/number', null);
        console.log(ret);
        if (ret.result === false) {
            helpers.alert(ret.error_msg);
            return;
        }
        this.setState({number: ret.data});
    },
    switchType: async function (id) {
        var ret = await xhr.get('/msg', {id: id == 0 || id === undefined ? '' : id});
        console.log(ret);
        if (ret.result === false) {
            helpers.alert(ret.error_msg);
            return;
        }
        this.setState({msg: ret.data});
    },
    render: function () {
        var number = {};
        var sum = 0;
        for (var i in this.state.number) {
            var item = this.state.number[i];
            number[item.typeId] = item.count;
            sum += parseInt(item.count);
        }
        var tablist = [{type: '所有', num: sum, id: 0}];
        for (i in this.state.types) {
            item = this.state.types[i];
            if (number[item.value] === undefined) {
                continue;
            }
            tablist.push({type: item.label, num: number[item.value], id: item.value});
        }
        return (
            <div>
                <div className="main col-md-3">
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
                        <Input error={this.state.errors.typeId} onlyShowMessage={true}>
                            <label htmlFor="subject" className="control-label">类别</label>
                            <Select value={this.state.typeId} placeholder="请选择..." options={this.state.types} onChange={this.onChange.bind(this, 'typeId')}/>
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
                <div className="main col-md-9">
                    <h1 className="page-title">热门留言</h1>
                    <p>感谢留下宝贵意见的所有人！</p>
                    <div className="tabs-style-2">
                        <ul className="nav nav-tabs" role="tablist">
                            {
                                tablist.map(function (data, index) {
                                    return <li key={index} className={this.props.id == data.id ? 'active' : ''}><a href={'index.html#contact/index?id=' + data.id} onClick={this.switchType.bind(this, data.id)}><i className="fa fa-user pr-10"></i>{data.type}({data.num})</a></li>;
                                }.bind(this))
                            }
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane fade in active">
                                <div className="panel-group">
                                    {
                                        this.state.msg.map(function (data, index) {
                                            return <div key={data.typeId + ':' + index} className="panel panel-default">
                                                <div className="panel-heading">
                                                    <h4 className="panel-title">
                                                        <a data-toggle="collapse" data-parent="#accordion-faq" href={'#collapse' + index} className="collapsed">
                                                            <i className="fa fa-question-circle pr-10"></i> {data.subject}
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id={'collapse' + index} className="panel-collapse collapse">
                                                    <div className="panel-body">
                                                        {data.message}
                                                        <div className="testimonial-info-1">姓名：{data.name}</div>
                                                        <div className="testimonial-info-2">邮箱: {data.email}</div>
                                                    </div>
                                                </div>
                                            </div>;
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = Index;
