var React = require('react');
var Index = React.createClass({
    render: function () {
        return (
			<div>
                <h1 className="page-title">Shop</h1>
                <div className="separator-2"></div>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas nulla suscipit <br className="hidden-sm hidden-xs"/> unde rerum mollitia dolorum.</p>
                <div className="sorting-filters">
                    <form className="form-inline">
                        <div className="form-group">
                            <label>Sort by</label>
                            <select className="form-control" defaultValue="Price">
                                <option value="Date">Date</option>
                                <option value="Price">Price</option>
                                <option value="Model">Model</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Order</label>
                            <select className="form-control" defaultValue="Acs">
                                <option value="Acs">Acs</option>
                                <option value="Desc">Desc</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Price $ (min/max)</label>
                            <div className="row grid-space-10">
                                <div className="col-sm-6">
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control col-xs-6"/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Category</label>
                            <select className="form-control" defaultValue="Desktops">
                                <option value="Smartphones">Smartphones</option>
                                <option value="Tablets">Tablets</option>
                                <option value="Smart Watches">Smart Watches</option>
                                <option value="Desktops">Desktops</option>
                                <option value="Software">Software</option>
                                <option value="Accessories">Accessories</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <a href="#" className="btn btn-default">Submit</a>
                        </div>
                    </form>
                </div>
                <div className="masonry-grid-fitrows row grid-space-20">
                    <div className="col-md-3 col-sm-6 masonry-grid-item">
                        <div className="listing-item">
                            <div className="overlay-container">
                                <img src="dist/images/product-1.png" alt=""/>
                                <a href="shop-product.html" className="overlay small">
                                    <i className="fa fa-plus"></i>
                                    <span>View Details</span>
                                </a>
                            </div>
                            <div className="listing-item-body clearfix">
                                <h3 className="title"><a href="shop-product.html">Adipisicing 7.7" Tempora 4.2</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae tempora debitis, sed illo officiis.</p>
                                <span className="price">$199.00</span>
                                <div className="elements-list pull-right">
                                    <a href="#" className="wishlist" title="wishlist"><i className="fa fa-heart-o"></i></a>
                                    <a href="#"><i className="fa fa-shopping-cart pr-10"></i>Add to Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 masonry-grid-item">
                        <div className="listing-item">
                            <div className="overlay-container">
                                <img src="dist/images/product-2.png" alt=""/>
                                <a href="shop-product.html" className="overlay small">
                                    <i className="fa fa-plus"></i>
                                    <span>View Details</span>
                                </a>
                            </div>
                            <div className="listing-item-body clearfix">
                                <h3 className="title"><a href="shop-product.html">Consectetur 5.5" Vitae</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae tempora debitis, sed illo officiis.</p>
                                <span className="price">$99.00</span>
                                <div className="elements-list pull-right">
                                    <a href="#" className="wishlist" title="wishlist"><i className="fa fa-heart-o"></i></a>
                                    <a href="#"><i className="fa fa-shopping-cart pr-10"></i>Add to Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 masonry-grid-item">
                        <div className="listing-item">
                            <div className="overlay-container">
                                <img src="dist/images/product-3.png" alt=""/>
                                <a href="shop-product.html" className="overlay small">
                                    <i className="fa fa-plus"></i>
                                    <span>View Details</span>
                                </a>
                            </div>
                            <div className="listing-item-body clearfix">
                                <h3 className="title"><a href="shop-product.html">Rempora 15.4" 4GB illo</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae tempora debitis, sed illo officiis.</p>
                                <span className="price">$169.00</span>
                                <div className="elements-list pull-right">
                                    <a href="#" className="wishlist" title="wishlist"><i className="fa fa-heart-o"></i></a>
                                    <a href="#"><i className="fa fa-shopping-cart pr-10"></i>Add to Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 masonry-grid-item">
                        <div className="listing-item">
                            <div className="overlay-container">
                                <img src="dist/images/product-4.png" alt=""/>
                                <a href="shop-product.html" className="overlay small">
                                    <i className="fa fa-plus"></i>
                                    <span>View Details</span>
                                </a>
                                <span className="badge default-bg">Sale -33%</span>
                            </div>
                            <div className="listing-item-body clearfix">
                                <h3 className="title"><a href="shop-product.html">Dolor 4.4 Smartphone</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <div><del>$149.00</del></div>
                                <span className="price">$99.00</span>
                                <div className="elements-list pull-right">
                                    <a href="#" className="wishlist" title="wishlist"><i className="fa fa-heart-o"></i></a>
                                    <a href="#"><i className="fa fa-shopping-cart pr-10"></i>Add to Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 masonry-grid-item">
                        <div className="listing-item">
                            <div className="overlay-container">
                                <img src="dist/images/product-5.png" alt=""/>
                                <a href="shop-product.html" className="overlay small">
                                    <i className="fa fa-plus"></i>
                                    <span>View Details</span>
                                </a>
                            </div>
                            <div className="listing-item-body clearfix">
                                <h3 className="title"><a href="shop-product.html">Elit Wired Sdipisicing Debi</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae tempora debitis, sed illo officiis.</p>
                                <span className="price">$299.00</span>
                                <div className="elements-list pull-right">
                                    <a href="#" className="wishlist" title="wishlist"><i className="fa fa-heart-o"></i></a>
                                    <a href="#"><i className="fa fa-shopping-cart pr-10"></i>Add to Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 masonry-grid-item">
                        <div className="listing-item">
                            <div className="overlay-container">
                                <img src="dist/images/product-6.png" alt=""/>
                                <a href="shop-product.html" className="overlay small">
                                    <i className="fa fa-plus"></i>
                                    <span>View Details</span>
                                </a>
                                <span className="badge dark-bg">Out of Stock</span>
                            </div>
                            <div className="listing-item-body clearfix">
                                <h3 className="title"><a href="shop-product.html">Vitae Handset Debitis</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae tempora debitis, sed illo officiis.</p>
                                <span className="price">$399.00</span>
                                <div className="elements-list pull-right">
                                    <a href="#" className="wishlist" title="wishlist"><i className="fa fa-heart-o"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 masonry-grid-item">
                        <div className="listing-item">
                            <div className="overlay-container">
                                <img src="dist/images/product-7.png" alt=""/>
                                <a href="shop-product.html" className="overlay small">
                                    <i className="fa fa-plus"></i>
                                    <span>View Details</span>
                                </a>
                            </div>
                            <div className="listing-item-body clearfix">
                                <h3 className="title"><a href="shop-product.html">Impacewt Dolor Screen</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae tempora debitis, sed illo officiis.</p>
                                <span className="price">$199.00</span>
                                <div className="elements-list pull-right">
                                    <a href="#" className="wishlist" title="wishlist"><i className="fa fa-heart-o"></i></a>
                                    <a href="#"><i className="fa fa-shopping-cart pr-10"></i>Add to Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 masonry-grid-item">
                        <div className="listing-item">
                            <div className="overlay-container">
                                <img src="dist/images/product-8.png" alt=""/>
                                <a href="shop-product.html" className="overlay small">
                                    <i className="fa fa-plus"></i>
                                    <span>View Details</span>
                                </a>
                            </div>
                            <div className="listing-item-body clearfix">
                                <h3 className="title"><a href="shop-product.html">Amet Ufficiis Screen</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae tempora debitis, sed illo officiis.</p>
                                <span className="price">$99.00</span>
                                <div className="elements-list pull-right">
                                    <a href="#" className="wishlist" title="wishlist"><i className="fa fa-heart-o"></i></a>
                                    <a href="#"><i className="fa fa-shopping-cart pr-10"></i>Add to Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>

                <ul className="pagination">
                    <li><a href="#">{'<<'}</a></li>
                    <li className="active"><a href="#">1 <span className="sr-only">(current)</span></a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">>></a></li>
                </ul>
			</div>
        );
    }
});
module.exports = Index;
