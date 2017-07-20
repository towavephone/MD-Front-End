var React = require('react');
var template = require('../toolers/template');
var Breadcrumb = require('./index/breadcrumb');
var Index = React.createClass({
    getDefaultProps: function () {
        return {
            siteMap: [
                {
                    title: '首页',
                    content: [
                        {
                            name: '快速了解',
                            link: '#app/index'
                        },
                        {
                            name: '美登愿景',
                            link: '#app/index'
                        },
                        {
                            name: '美登文化',
                            link: '#app/index'
                        },
                        {
                            name: '美登数据',
                            link: '#app/index'
                        },
                        {
                            name: '美登印象',
                            link: '#app/index'
                        },
                        {
                            name: '美登客户',
                            link: '#app/index'
                        },
                        {
                            name: '美登产品',
                            link: '#app/index'
                        },
                        {
                            name: '美登供应商',
                            link: '#app/index'
                        },
                        {
                            name: '联系我们',
                            link: '#app/index'
                        }
                    ]
                },
                {
                    title: '关于美登',
                    content: [
                        {
                            name: '公司介绍',
                            link: '#about/index'
                        },
                        {
                            name: '领导团队',
                            link: '#about/index'
                        },
                        {
                            name: '资质荣誉',
                            link: '#about/index'
                        },
                        {
                            name: '发展历程',
                            link: '#about/timeline'
                        }
                    ]
                },
                {
                    title: '产品展示',
                    content: [
                        {
                            name: '三层复合纸',
                            link: '#product/index'
                        },
                        {
                            name: '五层复合纸',
                            link: '#product/index'
                        },
                        {
                            name: '七层复合纸',
                            link: '#product/index'
                        }
                    ]
                },
                {
                    title: '新闻中心',
                    content: [
                        {
                            name: '公司新闻',
                            link: '#news/index?type=company'
                        },
                        {
                            name: '行业新闻',
                            link: '#news/index?type=industry'
                        }
                    ]
                },
                {
                    title: '加入美登',
                    content: [
                        {
                            name: '员工风采',
                            link: '#join/staff'
                        }
                    ]
                },
                {
                    title: '联系我们',
                    content: [
                        {
                            name: '百度地图',
                            link: '#contact/index'
                        },
                        {
                            name: '给我留言',
                            link: '#contact/index'
                        }
                    ]
                }
            ]
        };
    },
    componentDidMount: function () {
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
                            <h1 className="page-title">网站地图</h1>
                            <hr/>
                            <div className="row">
                                {
                                    this.props.siteMap.map(function (data, index) {
                                        var li = data.content.map(function (data, index) {
                                            return <li key={index}><a href={data.link}><i className="icon-right-open"></i>{data.name}</a></li>;
                                        });
                                        return <div key={index} className="col-md-3 col-sm-4">
                                            <h2>{data.title}</h2>
                                            <ul className="list">
                                                {li}
                                            </ul>
                                        </div>;
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        );
    }
});
module.exports = Index;
