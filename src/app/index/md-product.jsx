var React = require('react');
var Index = React.createClass({
    getDefaultProps: function () {
        return {
            products: [
                {
                    structure: 'A + B',
                    img: '../../dist/images/MD-1.jpg',
                    type: 'layer3',
                    detail: {'高分子含量': {min: 20, max: 180}, '平方克重': {min: 42, max: 300}, '用途': '纸尿裤或拉拉裤'}
                },
                {
                    structure: 'A + C',
                    img: '../../dist/images/MD-1.jpg',
                    type: 'layer3',
                    detail: {'高分子含量': {min: 20, max: 180}, '平方克重': {min: 42, max: 300}, '用途': '纸尿裤或拉拉裤'}
                },
                {
                    structure: 'A + A',
                    img: '../../dist/images/MD-1.jpg',
                    type: 'layer3',
                    detail: {'高分子含量': {min: 20, max: 180}, '平方克重': {min: 42, max: 300}, '用途': '纸尿裤或拉拉裤'}
                },
                {
                    structure: 'C + C',
                    img: '../../dist/images/MD-1.jpg',
                    type: 'layer3',
                    detail: {'高分子含量': {min: 20, max: 180}, '平方克重': {min: 42, max: 300}, '用途': '纸尿裤或拉拉裤'}
                },
                {
                    structure: 'A + B + A',
                    img: '../../dist/images/MD-2.jpg',
                    type: 'layer5',
                    detail: {'高分子含量': {min: 50, max: 360}, '平方克重': {min: 42, max: 300}, '用途': '纸尿裤或拉拉裤'}
                },
                {
                    structure: 'A + B + C',
                    img: '../../dist/images/MD-2.jpg',
                    type: 'layer5',
                    detail: {'高分子含量': {min: 50, max: 360}, '平方克重': {min: 42, max: 300}, '用途': '纸尿裤或拉拉裤'}
                },
                {
                    structure: 'A + B + D',
                    img: '../../dist/images/MD-2.jpg',
                    type: 'layer5',
                    detail: {'高分子含量': {min: 50, max: 360}, '平方克重': {min: 42, max: 300}, '用途': '纸尿裤或拉拉裤'}
                },
                {
                    structure: 'A + B + B + A',
                    img: '../../dist/images/MD-3.jpg',
                    type: 'layer7',
                    detail: {'高分子含量': {min: 50, max: 180}, '平方克重': {min: 42, max: 300}, '用途': '纸尿裤或拉拉裤'}
                },
                {
                    structure: 'A + B + B + C',
                    img: '../../dist/images/MD-3.jpg',
                    type: 'layer7',
                    detail: {'高分子含量': {min: 20, max: 180}, '平方克重': {min: 42, max: 300}, '用途': '纸尿裤或拉拉裤'}
                },
                {
                    structure: 'A + B + B + B',
                    img: '../../dist/images/MD-3.jpg',
                    type: 'layer7',
                    detail: {'高分子含量': {min: 20, max: 180}, '平方克重': {min: 42, max: 300}, '用途': '纸尿裤或拉拉裤'}
                },
                {
                    structure: 'A + B + B + E',
                    img: '../../dist/images/MD-3.jpg',
                    type: 'layer7',
                    detail: {'高分子含量': {min: 20, max: 180}, '平方克重': {min: 42, max: 300}, '用途': '纸尿裤或拉拉裤'}
                }
            ]
        };
    },
    render: function () {
        return (
            <div className="section clearfix object-non-visible" data-animation-effect="fadeInUpSmall" data-effect-delay="300">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center">美登 & 产品</h1>
                            <div className="separator"/>
                            <p className="lead text-center">美登芯体引领行业潮流</p>
                            <ul className="list-icons">
                                <li><i className="fa fa-angle-right"></i> A：蓬松无尘纸（平方克重：40g/m<sup>2</sup>~60g/m<sup>2</sup>）</li>
                                <li><i className="fa fa-angle-right"></i> B：柔软扩散导流层无纺布 （平方克重：25g/m<sup>2</sup>~60g/m<sup>2</sup>）</li>
                                <li><i className="fa fa-angle-right"></i> C：小白纸（平方克重：14g/m<sup>2</sup>、18g/m<sup>2</sup>）</li>
                                <li><i className="fa fa-angle-right"></i> D：亲水布（平方克重：8g/m<sup>2</sup>、10g/m<sup>2</sup>）</li>
                                <li><i className="fa fa-angle-right"></i> E：柔软扩散导流层热风布（平方克重：25g/m<sup>2</sup>、35g/m<sup>2</sup>）</li>
                                <li><i className="fa fa-angle-right"></i> F：高分子（SAP）(注：高分子默认在A~E材料中间，故省略)</li>
                            </ul>
                            <div className="filters">
                                <ul className="nav nav-pills">
                                    <li className="active"><a href="#" data-filter="*">所有</a></li>
                                    <li><a href="#" data-filter=".layer3">三层结构</a></li>
                                    <li><a href="#" data-filter=".layer5">五层结构</a></li>
                                    <li><a href="#" data-filter=".layer7">七层结构</a></li>
                                </ul>
                            </div>
                            <div className="isotope-container row grid-space-20">
                                {
                                    this.props.products.map(function (data, index) {
                                        return <div key={index} className={'isotope-item col-xs-12 col-sm-4 col-md-3 ' + data.type}>
                                            <div className="image-box">
                                                <div className="overlay-container">
                                                    <img className="lazyload" src="../../dist/images/unloaded.jpg" data-src={data.img} alt="" width="100%"/>
                                                    <div className="overlay">
                                                        <div className="overlay-links">
                                                            <a href="javaScript:void(0)"><i className="fa fa-link"></i></a>
                                                            <a href={data.img} className="popup-img"><i className="fa fa-search-plus"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a href="javaScript:void(0)" className="btn btn-light-gray btn-lg btn-block">{data.structure}</a>
                                            </div>
                                        </div>;
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = Index;
