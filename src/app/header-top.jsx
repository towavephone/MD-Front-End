var React = require('react');
var Index = React.createClass({
    render: function () {
        return (
			<div className="header-top">
				<div className="container">
					<div className="row">
						<div className="col-xs-3 col-sm-6">
							<div className="header-top-first clearfix">
								<ul className="social-links clearfix hidden-xs">
									<li className="twitter"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-twitter"></i></a></li>
									<li className="skype"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-skype"></i></a></li>
									<li className="linkedin"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-linkedin"></i></a></li>
									<li className="googleplus"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-google-plus"></i></a></li>
									<li className="youtube"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-youtube-play"></i></a></li>
									<li className="flickr"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-flickr"></i></a></li>
									<li className="facebook"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-facebook"></i></a></li>
									<li className="pinterest"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-pinterest"></i></a></li>
								</ul>
								<div className="social-links hidden-lg hidden-md hidden-sm">
									<div className="btn-group dropdown">
										<button type="button" className="btn dropdown-toggle" data-toggle="dropdown"><i className="fa fa-share-alt"></i></button>
										<ul className="dropdown-menu dropdown-animation">
											<li className="twitter"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-twitter"></i></a></li>
											<li className="skype"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-skype"></i></a></li>
											<li className="linkedin"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-linkedin"></i></a></li>
											<li className="googleplus"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-google-plus"></i></a></li>
											<li className="youtube"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-youtube-play"></i></a></li>
											<li className="flickr"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-flickr"></i></a></li>
											<li className="facebook"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-facebook"></i></a></li>
											<li className="pinterest"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-pinterest"></i></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xs-9 col-sm-6">
							<div id="header-top-second" className="clearfix">
								<div className="header-top-dropdown">
									<div className="btn-group dropdown">
										<button type="button" className="btn dropdown-toggle" data-toggle="dropdown"><i className="fa fa-search"></i> Search</button>
										<ul className="dropdown-menu dropdown-menu-right dropdown-animation">
											<li>
												<form role="search" className="search-box">
													<div className="form-group has-feedback">
														<input type="text" className="form-control" placeholder="Search"/>
														<i className="fa fa-search form-control-feedback"></i>
													</div>
												</form>
											</li>
										</ul>
									</div>
									<div className="btn-group dropdown">
										<button type="button" className="btn dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user"></i> Login</button>
										<ul className="dropdown-menu dropdown-menu-right dropdown-animation">
											<li>
												<form className="login-form">
													<div className="form-group has-feedback">
														<label className="control-label">Username</label>
														<input type="text" className="form-control" placeholder=""/>
														<i className="fa fa-user form-control-feedback"></i>
													</div>
													<div className="form-group has-feedback">
														<label className="control-label">Password</label>
														<input type="password" className="form-control" placeholder=""/>
														<i className="fa fa-lock form-control-feedback"></i>
													</div>
													<button type="submit" className="btn btn-group btn-dark btn-sm">Log In</button>
													<span>or</span>
													<button type="submit" className="btn btn-group btn-default btn-sm">Sing Up</button>
													<ul>
														<li><a href="#">Forgot your password?</a></li>
													</ul>
													<div className="divider"></div>
													<span className="text-center">Login with</span>
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
										<button type="button" className="btn dropdown-toggle" data-toggle="dropdown"><i className="fa fa-shopping-cart"></i> Cart (8)</button>
										<ul className="dropdown-menu dropdown-menu-right dropdown-animation cart">
											<li>
												<table className="table table-hover">
													<thead>
														<tr>
															<th className="quantity">QTY</th>
															<th className="product">Product</th>
															<th className="amount">Subtotal</th>
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
															<td className="total-quantity" colSpan="2">Total 8 Items</td>
															<td className="total-amount">$1997.00</td>
														</tr>
													</tbody>
												</table>
												<div className="panel-body text-right">
												<a href="shop-cart.html" className="btn btn-group btn-default btn-sm">View Cart</a>
												<a href="shop-checkout.html" className="btn btn-group btn-default btn-sm">Checkout</a>
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
