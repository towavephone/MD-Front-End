var React = require('react');
var Index = React.createClass({
    getDefaultProps: function () {
        return {
            colors: {
                'red': '#e84c3d',
                'blue': '#3d78d8',
                'green': '#0d8609',
                'orange': '#ffa500',
                'pink': '#db7093',
                'purple': '#954db3',
                'yellow': '#d3b61c',
                'brown': '#7a5230'
            }
        };
    },
    getInitialState: function () {
        return {color: 'red'};
    },
    componentDidMount: function () {
        var color = localStorage.getItem('color');
        this.changeColor(color ? color : 'red');
    },
    changeColor: function (color) {
        if ($('#color').length > 0 && this.isMounted()) {
            $('#color')[0].href = 'dist/css/skins/' + color + '.css';
            this.setState({activeColor: color});
            localStorage.setItem('color', color);
        }
        return false;
    },
    render: function () {
        var colors = [];
        for (var i in this.props.colors) {
            var item = this.props.colors[i];
            var isChecked = this.state.activeColor == i ? <i className="fa fa-check"></i> : null;
            colors.push(<li className="twitter" key={i}><a href="javascript:void(0)" onClick={this.changeColor.bind(this, i)} style={{backgroundColor: item, width: '25px', height: '25px', borderRadius: '50px'}}>{isChecked}</a></li>);
        }
        return (
			<div className="header-top">
				<div className="container">
					<div className="row">
						<div className="col-xs-3 col-sm-6">
							<div className="header-top-first clearfix">
								<ul className="social-links clearfix hidden-xs">
									{colors}
								</ul>
								<div className="social-links hidden-lg hidden-md hidden-sm">
									<div className="btn-group dropdown">
										<button type="button" className="btn dropdown-toggle" data-toggle="dropdown"><i className="fa fa-share-alt"></i></button>
										<ul className="dropdown-menu dropdown-animation">
											{colors}
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xs-9 col-sm-6">
							<div id="header-top-second" className="clearfix">
								<div className="header-top-dropdown">
									<div className="btn-group dropdown">
										<button type="button" className="btn dropdown-toggle" data-toggle="dropdown"><i className="fa fa-search"></i> 搜索</button>
										<ul className="dropdown-menu dropdown-menu-right dropdown-animation">
											<li>
												<form role="search" className="search-box">
													<div className="form-group has-feedback">
														<input type="text" className="form-control" placeholder="请输入关键字"/>
														<i className="fa fa-search form-control-feedback"></i>
													</div>
												</form>
											</li>
										</ul>
									</div>
									<div className="btn-group dropdown">
										<button type="button" className="btn dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user"></i> 登录</button>
										<ul className="dropdown-menu dropdown-menu-right dropdown-animation">
											<li>
												<form className="login-form">
													<div className="form-group has-feedback">
														<label className="control-label">用户名</label>
														<input type="text" className="form-control" placeholder=""/>
														<i className="fa fa-user form-control-feedback"></i>
													</div>
													<div className="form-group has-feedback">
														<label className="control-label">密码</label>
														<input type="password" className="form-control" placeholder=""/>
														<i className="fa fa-lock form-control-feedback"></i>
													</div>
													<button type="submit" className="btn btn-group btn-dark btn-sm">登录</button>
													<span>or</span>
													<button type="submit" className="btn btn-group btn-default btn-sm">注册</button>
													<ul>
														<li><a href="#">忘记密码？</a></li>
													</ul>
													<div className="divider"></div>
													<span className="text-center">更换登录方式</span>
													<ul className="social-links clearfix">
														<li className="facebook"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-facebook"></i></a></li>
														<li className="twitter"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-twitter"></i></a></li>
														<li className="googleplus"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-google-plus"></i></a></li>
													</ul>
												</form>
											</li>
										</ul>
									</div>
									<div className="btn-group dropdown">
										<button type="button" className="btn dropdown-toggle" data-toggle="dropdown"><i className="fa fa-shopping-cart"></i> 购物车 (8)</button>
										<ul className="dropdown-menu dropdown-menu-right dropdown-animation cart">
											<li>
												<table className="table table-hover">
													<thead>
														<tr>
															<th className="quantity">数量</th>
															<th className="product">产品</th>
															<th className="amount">单价</th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td className="quantity">2 x</td>
															<td className="product"><a href="shop-product.html">Android 4.4 Smartphone</a><span className="small">4.7" Dual Core 1GB</span></td>
															<td className="amount">$199.00</td>
														</tr>
														<tr>
															<td className="quantity">3 x</td>
															<td className="product"><a href="shop-product.html">Android 4.2 Tablet</a><span className="small">7.3" Quad Core 2GB</span></td>
															<td className="amount">$299.00</td>
														</tr>
														<tr>
															<td className="quantity">3 x</td>
															<td className="product"><a href="shop-product.html">Desktop PC</a><span className="small">Quad Core 3.2MHz, 8GB RAM, 1TB Hard Disk</span></td>
															<td className="amount">$1499.00</td>
														</tr>
														<tr>
															<td className="total-quantity" colSpan="2">总共 8 个</td>
															<td className="total-amount">$1997.00</td>
														</tr>
													</tbody>
												</table>
												<div className="panel-body text-right">
												<a href="shop-cart.html" className="btn btn-group btn-default btn-sm">查看购物车</a>
												<a href="shop-checkout.html" className="btn btn-group btn-default btn-sm">支付</a>
												</div>
											</li>
										</ul>
									</div>
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
