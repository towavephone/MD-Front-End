var React = require('react');
var HeadNav = require('../common/head-nav.jsx');
var Index = React.createClass({
    getDefaultProps: function () {
        return {
            tabs_url: [
                {
                    url: '#about/index',
                    name: '关于我们',
                    dropdown: [
                        {
                            url: '#about/index',
                            name: '公司介绍'
                        }
                    ]
                },
                {
                    url: '#product/index',
                    name: '产品展示'
                },
                {
                    url: '#service/index',
                    name: '服务中心'
                },
                {
                    url: '#contact/index',
                    name: '联系我们',
                    dropdown: [
                        {
                            url: '#about/index',
                            name: '公司介绍'
                        },
                        {
                            url: '#about/index',
                            name: '公司介绍'
                        },
                        {
                            url: '#about/index',
                            name: '公司介绍'
                        },
                        {
                            url: '#about/index',
                            name: '公司介绍'
                        },
                        {
                            url: '#about/index',
                            name: '公司介绍'
                        }
                    ]
                }
            ]
        };
    },
    click: function () {
        this.props.jump('skus', null);
    },
    render: function () {
        return (
			<header className="header fixed clearfix">
				<div className="container">
					<div className="row">
						<div className="col-md-2">
							<div className="header-left clearfix">
								<div className="logo">
									<a href="#app/index"><img id="logo" src="../dist/images/美登标志.png" alt="iDea"/></a>
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
												<ul className="nav navbar-nav navbar-right">
													<li className="dropdown">
														<a href="#about/index" className="dropdown-toggle" data-toggle="dropdown">关于美登</a>
														<ul className="dropdown-menu">
															<li><a href="index.html">公司简介</a></li>
															<li><a href="index-2.html">领导团队</a></li>
															<li><a href="index-3.html">资质荣誉</a></li>
															<li><a href="index-4.html">企业文化</a></li>
															<li><a href="index-5.html">集团业务</a></li>
														</ul>
													</li>
													<li className="dropdown mega-menu">
														<a href="#product/index" className="dropdown-toggle" data-toggle="dropdown">产品展示</a>
														<ul className="dropdown-menu">
															<li>
																<div className="row">
																	<div className="col-lg-4 col-md-3 hidden-sm">
																		<h4>Premium HTML5 Template</h4>
																		<p>iDea is perfectly suitable for corporate, business and company webpages.</p>
																		<img src="../dist/images/section-image-3.png" alt="iDea"/>
																	</div>
																	<div className="col-lg-8 col-md-9">
																		<h4>Pages</h4>
																		<div className="row">
																			<div className="col-sm-4">
																				<div className="divider"></div>
																				<ul className="menu">
																					<li><a href="page-about.html"><i className="icon-right-open"></i>所有产品</a></li>
																					<li><a href="page-about-2.html"><i className="icon-right-open"></i>获奖产品</a></li>
																					<li><a href="page-about-3.html"><i className="icon-right-open"></i>经典产品</a></li>
																					<li><a href="page-about-me.html"><i className="icon-right-open"></i>About Me</a></li>
																					<li><a href="page-team.html"><i className="icon-right-open"></i>Our Team - Options</a></li>
																					<li><a href="page-services.html"><i className="icon-right-open"></i>Services</a></li>
																				</ul>
																			</div>
																			<div className="col-sm-4">
																				<div className="divider"></div>
																				<ul className="menu">
																					<li><a href="page-contact.html"><i className="icon-right-open"></i>Contact</a></li>
																					<li><a href="page-contact-2.html"><i className="icon-right-open"></i>Contact 2</a></li>
																					<li><a href="page-coming-soon.html"><i className="icon-right-open"></i>Coming Soon Page</a></li>
																					<li><a href="page-404.html"><i className="icon-right-open"></i>404 error</a></li>
																					<li><a href="page-faq.html"><i className="icon-right-open"></i>FAQ page</a></li>
																					<li><a href="page-affix-sidebar.html"><i className="icon-right-open"></i>Sidebar - Affix Menu</a></li>
																				</ul>
																			</div>
																			<div className="col-sm-4">
																				<div className="divider"></div>
																				<ul className="menu">
																					<li><a href="page-left-sidebar.html"><i className="icon-right-open"></i>Left Sidebar</a></li>
																					<li><a href="page-right-sidebar.html"><i className="icon-right-open"></i>Right Sidebar</a></li>
																					<li><a href="page-two-sidebars.html"><i className="icon-right-open"></i>Two Sidebars</a></li>
																					<li><a href="page-no-sidebar.html"><i className="icon-right-open"></i>No Sidebars</a></li>
																					<li><a href="page-sitemap.html"><i className="icon-right-open"></i>Sitemap</a></li>
																				</ul>
																			</div>
																		</div>
																	</div>
																</div>
															</li>
														</ul>
													</li>
													<li className="dropdown">
														<a href="#" className="dropdown-toggle" data-toggle="dropdown">新闻中心</a>
														<ul className="dropdown-menu">
															<li><a href="features-typography.html">Typography</a></li>
															<li className="dropdown">
																<a href="#" className="dropdown-toggle" data-toggle="dropdown">Pricing tables</a>
																<ul className="dropdown-menu">
																	<li><a href="features-pricing-tables-1.html">Pricing Tables 1</a></li>
																	<li><a href="features-pricing-tables-2.html">Pricing Tables 2</a></li>
																	<li><a href="features-pricing-tables-3.html">Pricing Tables 3</a></li>
																</ul>
															</li>
															<li><a href="features-backgrounds.html">Backgrounds</a></li>
															<li><a href="features-testimonials.html">Testimonials</a></li>
															<li className="dropdown">
																<a href="#" className="dropdown-toggle" data-toggle="dropdown">Icons</a>
																<ul className="dropdown-menu">
																	<li><a href="features-icons-fontawesome.html">Font Awesome Icons</a></li>
																	<li><a href="features-icons-fontello.html">Fontello Icons</a></li>
																	<li><a href="features-icons-glyphicons.html">Glyphicons Icons</a></li>
																</ul>
															</li>
															<li className="dropdown">
																<a href="#" className="dropdown-toggle" data-toggle="dropdown">Footer - Options</a>
																<ul className="dropdown-menu">
																	<li><a href="features-footer-1.html#footer">Footer 1 (Default)</a></li>
																	<li><a href="features-footer-2.html#footer">Footer 2</a></li>
																	<li><a href="features-footer-3.html#footer">Footer 3</a></li>
																	<li><a href="features-footer-4.html#footer">Footer 4</a></li>
																</ul>
															</li>
															<li className="dropdown">
																<a href="#" className="dropdown-toggle" data-toggle="dropdown">Header - Options</a>
																<ul className="dropdown-menu">
																	<li><a href="features-header-1.html">Header - Layout 1 (Default)</a></li>
																	<li><a href="features-header-2.html">Header - Layout 2</a></li>
																	<li><a href="features-header-3.html">Header - Layout 3</a></li>
																</ul>
															</li>
															<li><a href="features-grid.html">Grid System</a></li>
														</ul>
													</li>
													<li className="dropdown mega-menu">
														<a href="#" className="dropdown-toggle" data-toggle="dropdown">加入美登</a>
														<ul className="dropdown-menu">
															<li>
																<div className="row">
																	<div className="col-sm-4 col-md-6">
																		<h4>iDea - Powerful Bootstrap Theme</h4>
																		<p>iDea is a Clean and Super Flexible Bootstrap Theme with many Features and Unlimited options.</p>
																		<img src="../dist/images/section-image-1.png" alt="image-1"/>
																	</div>
																	<div className="col-sm-8 col-md-6">
																		<h4>Components</h4>
																		<div className="row">
																			<div className="col-sm-6">
																				<div className="divider"></div>
																				<ul className="menu">
																					<li><a href="components-tabs-and-pills.html"><i className="icon-right-open"></i>Tabs &amp; Pills</a></li>
																					<li><a href="components-accordions.html"><i className="icon-right-open"></i>Accordions</a></li>
																					<li><a href="components-social-icons.html"><i className="icon-right-open"></i>Social Icons</a></li>
																					<li><a href="components-buttons.html"><i className="icon-right-open"></i>Buttons</a></li>
																					<li><a href="components-forms.html"><i className="icon-right-open"></i>Forms</a></li>
																					<li><a href="components-progress-bars.html"><i className="icon-right-open"></i>Progress bars</a></li>
																					<li><a href="components-alerts-and-callouts.html"><i className="icon-right-open"></i>Alerts &amp; Callouts</a></li>
																					<li><a href="components-content-sliders.html"><i className="icon-right-open"></i>Content Sliders</a></li>
																				</ul>
																			</div>
																			<div className="col-sm-6">
																				<div className="divider"></div>
																				<ul className="menu">
																					<li><a href="components-lightbox.html"><i className="icon-right-open"></i>Lightbox</a></li>
																					<li><a href="components-icon-boxes.html"><i className="icon-right-open"></i>Icon Boxes</a></li>
																					<li><a href="components-image-boxes.html"><i className="icon-right-open"></i>Image Boxes</a></li>
																					<li><a href="components-video-and-audio.html"><i className="icon-right-open"></i>Video &amp; Audio</a></li>
																					<li><a href="components-modals.html"><i className="icon-right-open"></i>Modals</a></li>
																					<li><a href="components-animations.html"><i className="icon-right-open"></i>Animations</a></li>
																					<li><a href="components-counters.html"><i className="icon-right-open"></i>Counters</a></li>
																					<li><a href="components-tables.html"><i className="icon-right-open"></i>Tables</a></li>
																				</ul>
																			</div>
																		</div>
																	</div>
																</div>
															</li>
														</ul>
													</li>
													<li className="dropdown">
														<a href="#contact/index" className="dropdown-toggle" data-toggle="dropdown">联系我们</a>
														<ul className="dropdown-menu">
															<li className="dropdown">
																<a href="portfolio-3col.html" className="dropdown-toggle" data-toggle="dropdown">百度地图</a>
																<ul className="dropdown-menu">
																	<li><a href="portfolio-2col.html">Portfolio - 2 columns</a></li>
																	<li><a href="portfolio-3col.html">Portfolio - 3 columns</a></li>
																	<li><a href="portfolio-4col.html">Portfolio - 4 columns</a></li>
																	<li><a href="portfolio-sidebar.html">Portfolio - With sidebar</a></li>
																</ul>
															</li>
															<li className="dropdown">
																<a href="portfolio-3col-2.html" className="dropdown-toggle" data-toggle="dropdown">联系方式</a>
																<ul className="dropdown-menu">
																	<li><a href="portfolio-2col-2.html">Portfolio - 2 columns</a></li>
																	<li><a href="portfolio-3col-2.html">Portfolio - 3 columns</a></li>
																	<li><a href="portfolio-4col-2.html">Portfolio - 4 columns</a></li>
																	<li><a href="portfolio-sidebar-2.html">Portfolio - With sidebar</a></li>
																</ul>
															</li>
															<li className="dropdown">
																<a href="portfolio-3col-3.html" className="dropdown-toggle" data-toggle="dropdown">给我留言</a>
																<ul className="dropdown-menu">
																	<li><a href="portfolio-2col-3.html">Portfolio - 2 columns</a></li>
																	<li><a href="portfolio-3col-3.html">Portfolio - 3 columns</a></li>
																	<li><a href="portfolio-4col-3.html">Portfolio - 4 columns</a></li>
																	<li><a href="portfolio-sidebar-3.html">Portfolio - With sidebar</a></li>
																</ul>
															</li>
															<li><a href="portfolio-full.html">Portfolio - Full width</a></li>
															<li><a href="portfolio-item.html">Portfolio single</a></li>
															<li><a href="portfolio-item-2.html">Portfolio single 2</a></li>
															<li><a href="portfolio-item-3.html">Portfolio single 3</a></li>
														</ul>
													</li>
													<li className="dropdown">
														<a href="shop-listing-3col.html" className="dropdown-toggle" data-toggle="dropdown">相关链接</a>
														<ul className="dropdown-menu">
															<li><a href="shop-listing-3col.html">Shop - 3 Columns</a></li>
															<li><a href="shop-listing-4col.html">Shop - 4 Columns</a></li>
															<li><a href="shop-listing-sidebar.html">Shop - With Sidebar</a></li>
															<li><a href="shop-product.html">Product</a></li>
															<li><a href="shop-cart.html">Shopping Cart</a></li>
															<li><a href="shop-checkout.html">Checkout Page - Step 1</a></li>
															<li><a href="shop-checkout-payment.html">Checkout Page - Step 2</a></li>
															<li><a href="shop-checkout-review.html">Checkout Page - Step 3</a></li>
														</ul>
													</li>
												</ul>
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
