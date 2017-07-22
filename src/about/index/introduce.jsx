var React = require('react');
var Index = React.createClass({
    render: function () {
        return (
            <div>
                <h2>公司介绍</h2>
                <div className="separator-2"></div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <img className="lazyload" src="../../dist/images/unloaded.jpg" data-src="../../dist/images/华亨厂门口.jpg" alt=""/>
                            </div>
                            <div className="col-md-6">
                                <p>美登拥有一支技术专业、经验丰富、知识化、年轻化的自主研发、生产、管理和市场营销的精英团队，是国内干法造纸及高吸收性SAP复合纸芯体研发、生产、销售于一体的产业基地。公司致力以“做最受国际尊敬的纸品企业/成为最具有国际性竞争力的企业”的企业愿景，为客户提供优质的产品。</p>
                            </div>
                        </div>
                        <p>佛山华亨卫生材料有限公司隶属广东美登纸业有限公司！</p>
                        <p>公司于2011年投资5000余万元，占地40多亩，分三期投入。目前，第一期已于2012年建成厂房6000平方米，办公宿舍3000平方米，顺利投产HH-2600-11型设备共两台，复合纸年产量达12000吨，2016年二期工程扩建12000平方米厂房。两条2600-16型无尘纸生产线顺利投产，年产量可达26000吨。结合国内外的干法造纸、生产管理的经验和技术，投入国内最先进的生产设备，同时引进德国先进的木浆粉碎系统。</p>
                        <p>届时可为国内外客户提供优秀的干法纸、中性纸、胶合干法纸、高吸收性SAP复合纸等。产品广泛应用于妇女护理用品、卫生巾、护垫、婴儿纸尿裤、宠物护理垫、鞋垫、擦手纸、厨房用纸、工业擦拭纸、高档包装用纸等领域。</p>
                        <div className="space hidden-md hidden-lg"></div>
                    </div>
                    <div className="col-md-6">
                        <div className="owl-carousel content-slider-with-controls">
                            <div className="overlay-container margin-top-clear">
                                <img className="lazyload" src="../../dist/images/unloaded.jpg" data-src="../../dist/images/美登介绍.jpg" alt=""/>
                                <a href="../../dist/images/美登介绍.jpg" className="popup-img overlay" title="美登厂门口"><i className="fa fa-search-plus"></i></a>
                            </div>
                            <div className="overlay-container margin-top-clear">
                                <img className="lazyload" src="../../dist/images/unloaded.jpg" data-src="../../dist/images/美登介绍2.jpg" alt=""/>
                                <a href="../../dist/images/美登介绍2.jpg" className="popup-img overlay" title="美登厂内部"><i className="fa fa-search-plus"></i></a>
                            </div>
                            <div className="overlay-container margin-top-clear">
                                <img className="lazyload" src="../../dist/images/unloaded.jpg" data-src="../../dist/images/华亨介绍.jpg" alt=""/>
                                <a href="../../dist/images/华亨介绍.jpg" className="popup-img overlay" title="华亨厂门口"><i className="fa fa-search-plus"></i></a>
                            </div>
                            <div className="overlay-container margin-top-clear">
                                <img className="lazyload" src="../../dist/images/unloaded.jpg" data-src="../../dist/images/华亨介绍2.jpg" alt=""/>
                                <a href="../../dist/images/华亨介绍2.jpg" className="popup-img overlay" title="华亨厂一览"><i className="fa fa-search-plus"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = Index;
