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
                                <img src="../../dist/images/李敬.jpg" alt=""/>
                                <div className="overlay">
                                    <ul className="social-links colored clearfix">
                                        <li className="facebook"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-facebook"></i></a></li>
                                        <li className="twitter"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-twitter"></i></a></li>
                                        <li className="skype"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-skype"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="image-box-body">
                                <h3 className="title">李敬</h3>
                                <small>董事长</small>
                                <div className="separator-2"></div>
                                <p>2002年开始，美登人一直专注于吸收性芯材的开发与应用。坚持同样的事情重复做，日复一日、年复一年。坚毅、认真、耐心、细致、坚持每天学习一点，每天持续改善一点，积以时日，我们终将汇聚涓流。</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="image-box team-member">
                            <div className="overlay-container">
                                <img src="../../dist/images/唐燕.jpg" alt=""/>
                                <div className="overlay">
                                    <ul className="social-links colored clearfix">
                                        <li className="facebook"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-facebook"></i></a></li>
                                        <li className="twitter"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-twitter"></i></a></li>
                                        <li className="skype"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-skype"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="image-box-body">
                                <h3 className="title">唐燕</h3>
                                <small>财务总监</small>
                                <div className="separator-2"></div>
                                <p>青年时准备好材料，想造一座通向月亮的桥，或者在地上造二所宫殿或庙宇。活到中年，终于决定搭一个棚。</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="image-box team-member">
                            <div className="overlay-container">
                                <img src="../../dist/images/任红英.jpg" alt=""/>
                                <div className="overlay">
                                    <ul className="social-links colored clearfix">
                                        <li className="facebook"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-facebook"></i></a></li>
                                        <li className="twitter"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-twitter"></i></a></li>
                                        <li className="skype"><a target="_blank" href="http://www.cssmoban.com"><i className="fa fa-skype"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="image-box-body">
                                <h3 className="title">任红英</h3>
                                <small>总经理</small>
                                <div className="separator-2"></div>
                                <p>让青春反抗老朽，长发反抗秃头，热情反抗陈腐，未来反抗往昔，这是多么自然！</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = Index;
