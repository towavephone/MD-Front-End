var React = require('react');
var Index = React.createClass({
    render: function () {
        return (
            <div>
                <h2>领导团队</h2>
                <div className="separator-2"></div>
                <div className="row grid-space-20">
                    <div className="col-sm-4">
                        <div className="image-box team-member">
                            <div className="overlay-container">
                                <img src="../../dist/images/team-member-1.jpg" alt=""/>
                                <div className="overlay">
                                    <ul className="social-links colored clearfix">
                                        <li className="facebook"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-facebook"></i></a></li>
                                        <li className="twitter"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-twitter"></i></a></li>
                                        <li className="skype"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-skype"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="image-box-body">
                                <h3 className="title">Jane Doe</h3>
                                <small>CEO</small>
                                <div className="separator-2"></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, optio voluptate sapiente hic.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="image-box team-member">
                            <div className="overlay-container">
                                <img src="../../dist/images/team-member-2.jpg" alt=""/>
                                <div className="overlay">
                                    <ul className="social-links colored clearfix">
                                        <li className="facebook"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-facebook"></i></a></li>
                                        <li className="twitter"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-twitter"></i></a></li>
                                        <li className="skype"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-skype"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="image-box-body">
                                <h3 className="title">John Doe</h3>
                                <small>CTO</small>
                                <div className="separator-2"></div>
                                <p>Deserunt inventore dolorum iste expedita vel odio doloremque corporis officia tenetur quam quae atque.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="image-box team-member">
                            <div className="overlay-container">
                                <img src="../../dist/images/team-member-3.jpg" alt=""/>
                                <div className="overlay">
                                    <ul className="social-links colored clearfix">
                                        <li className="facebook"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-facebook"></i></a></li>
                                        <li className="twitter"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-twitter"></i></a></li>
                                        <li className="skype"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-skype"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="image-box-body">
                                <h3 className="title">Anne Smith</h3>
                                <small>Project Manager</small>
                                <div className="separator-2"></div>
                                <p>Dolorum deserunt inventore iste expedita vel odio doloremque corporis officia atque enetur quam quae.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = Index;
