var React = require('react');
var HeadNav = require('../common/head-nav.jsx');
var Index = React.createClass({
    getDefaultProps: function () {
        return {
            tabs_url: [
                {
                    url: '#about/index',
                    name: '关于美登',
                    dropdown: [
                        {
                            url: '#about/index?type=introduce',
                            name: '公司介绍'
                        },
                        {
                            url: '#about/index?type=team',
                            name: '领导团队'
                        },
                        {
                            url: '#about/index?type=prize',
                            name: '资质荣誉'
                        },
                        {
                            url: '#about/timeline',
                            name: '发展历程'
                        }
                    ]
                },
                {
                    url: '#product/index',
                    name: '产品展示',
                    dropdown: [
                        {
                            url: '#product/index?type=3',
                            name: '三层复合纸'
                        },
                        {
                            url: '#product/index?type=5',
                            name: '五层复合纸'
                        },
                        {
                            url: '#product/index?type=7',
                            name: '七层复合纸'
                        }
                    ]
                },
                {
                    url: '#news/index',
                    name: '新闻中心',
                    dropdown: [
                        {
                            url: '#news/index?type=company',
                            name: '公司新闻'
                        },
                        {
                            url: '#news/index?type=industry',
                            name: '行业新闻'
                        }
                    ]
                },
                {
                    url: '#join/staff',
                    name: '加入美登',
                    dropdown: [
                        {
                            url: '#join/staff',
                            name: '员工风采'
                        }
                    ]
                },
                {
                    url: '#contact/index',
                    name: '联系我们',
                    dropdown: [
                        {
                            url: '#contact/index?type=baidumap',
                            name: '百度地图'
                        },
                        {
                            url: '#contact/index?type=message',
                            name: '给我留言'
                        },
                        {
                            url: '#contact/index?type=contact',
                            name: '联系我们'
                        }
                    ]
                },
                {
                    url: '#link/index',
                    name: '相关链接',
                    dropdown: [
                        {
                            url: '#link/index?type=webSiteMap',
                            name: '网站地图'
                        }
                    ]
                }
            ]
        };
    },
    render: function () {
        return (
			<header className="header fixed clearfix">
				<div className="container">
					<div className="row">
						<div className="col-md-2">
							<div className="header-left clearfix">
								<div className="logo">
									<a href="#app/index"><img id="logo" src="../dist/images/美登logo.png" alt="iDea"/></a>
								</div>
								<div className="site-slogan">
									广东美登纸业有限公司
								</div>
							</div>
						</div>
						<div className="col-md-9">
							<div className="header-right clearfix">
								<div className="main-navigation animated">
									<nav className="navbar navbar-default" role="navigation">
										<div className="container-fluid">
											<div className="navbar-header">
												<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-1">
													<span className="sr-only">Toggle navigation</span>
													<span className="icon-bar"></span>
													<span className="icon-bar"></span>
													<span className="icon-bar"></span>
												</button>
											</div>
											<div className="collapse navbar-collapse" id="navbar-collapse-1">
												<HeadNav tabs_url={this.props.tabs_url}/>
											</div>
										</div>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
        );
    }
});
module.exports = Index;
