var React = require('react');
var Index = React.createClass({
    render: function () {
        return (
            <div>
                <h1 className="page-title">About</h1>
                <div className="separator-2"></div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <img src="../../dist/images/section-image-1.png" alt=""/>
                            </div>
                            <div className="col-md-6">
                                <p>Quo soluta provident, quod reiciendis. Dolores nam totam aut illum ex ratione harum molestias maxime minima tempore, possimus, laudantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <p>Esse sequi veniam, assumenda voluptate necessitatibus ipsa dicta vero, minima natus cum cupiditate magnam et placeat quo adipisci.</p>
                        <ul className="list-icons">
                            <li className="object-non-visible" data-animation-effect="fadeInUpSmall"><i className="icon-check"></i> Etiam sed dolor ac diam volutpat</li>
                            <li className="object-non-visible" data-animation-effect="fadeInUpSmall" data-effect-delay="100"><i className="icon-check"></i> Sed eget pulvinar quam, vel feugiat enim aliquam </li>
                            <li className="object-non-visible" data-animation-effect="fadeInUpSmall" data-effect-delay="300"><i className="icon-check"></i> Erat volutpat. Phasellus eu porta ipsum suspendisse aliquet imperdiet</li>
                            <li className="object-non-visible" data-animation-effect="fadeInUpSmall" data-effect-delay="500"><i className="icon-check"></i> Phasellus eu porta ipsum. Suspendisse aliquet imperdiet commodo</li>
                        </ul>
                        <div className="space hidden-md hidden-lg"></div>
                    </div>
                    <div className="col-md-6">
                        <div className="owl-carousel content-slider-with-controls">
                            <div className="overlay-container margin-top-clear">
                                <img src="../../dist/images/page-about-1.jpg" alt=""/>
                                <a href="images/page-about-1.jpg" className="popup-img overlay" title="image title"><i className="fa fa-search-plus"></i></a>
                            </div>
                            <div className="overlay-container margin-top-clear">
                                <img src="../../dist/images/page-about-2.jpg" alt=""/>
                                <a href="images/page-about-2.jpg" className="popup-img overlay" title="image title"><i className="fa fa-search-plus"></i></a>
                            </div>
                            <div className="overlay-container margin-top-clear">
                                <img src="../../dist/images/page-about-3.jpg" alt=""/>
                                <a href="images/page-about-3.jpg" className="popup-img overlay" title="image title"><i className="fa fa-search-plus"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = Index;
