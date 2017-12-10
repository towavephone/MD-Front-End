var React = require('react');
var Index = React.createClass({
    getDefaultProps: function () {
        return {
            products: [
                {
                    structure: 'A + B',
                    img: '../../dist/images/MD-1.jpg',
                    detail: {'高分子含量': {min: 20, max: 180}, '平方克重': {min: 42, max: 300}, '用途': '纸尿裤或拉拉裤'}
                },
                {
                    structure: 'A + C',
                    img: '../../dist/images/MD-1.jpg',
                    detail: {'高分子含量': {min: 20, max: 180}, '平方克重': {min: 42, max: 300}, '用途': '纸尿裤或拉拉裤'}
                },
                {
                    structure: 'A + A',
                    img: '../../dist/images/MD-1.jpg',
                    detail: {'高分子含量': {min: 20, max: 180}, '平方克重': {min: 42, max: 300}, '用途': '纸尿裤或拉拉裤'}
                },
                {
                    structure: 'C + C',
                    img: '../../dist/images/MD-1.jpg',
                    detail: {'高分子含量': {min: 20, max: 180}, '平方克重': {min: 42, max: 300}, '用途': '纸尿裤或拉拉裤'}
                },
                {
                    structure: 'A + E',
                    img: '../../dist/images/MD-1.jpg',
                    detail: {'高分子含量': {min: 20, max: 180}, '平方克重': {min: 42, max: 300}, '用途': '纸尿裤或拉拉裤'}
                },
                {
                    structure: 'C + E',
                    img: '../../dist/images/MD-1.jpg',
                    detail: {'高分子含量': {min: 20, max: 180}, '平方克重': {min: 42, max: 300}, '用途': '纸尿裤或拉拉裤'}
                },
                {
                    structure: 'D + E',
                    img: '../../dist/images/MD-1.jpg',
                    detail: {'高分子含量': {min: 20, max: 180}, '平方克重': {min: 42, max: 300}, '用途': '纸尿裤或拉拉裤'}
                },
                {
                    structure: 'A + B + A',
                    img: '../../dist/images/MD-2.jpg',
                    detail: {'高分子含量': {min: 50, max: 360}, '平方克重': {min: 42, max: 300}, '用途': '纸尿裤或拉拉裤'}
                },
                {
                    structure: 'A + B + C',
                    img: '../../dist/images/MD-2.jpg',
                    detail: {'高分子含量': {min: 50, max: 360}, '平方克重': {min: 42, max: 300}, '用途': '纸尿裤或拉拉裤'}
                },
                {
                    structure: 'A + B + D',
                    img: '../../dist/images/MD-2.jpg',
                    detail: {'高分子含量': {min: 50, max: 360}, '平方克重': {min: 42, max: 300}, '用途': '纸尿裤或拉拉裤'}
                },
                {
                    structure: 'C + B + D',
                    img: '../../dist/images/MD-2.jpg',
                    detail: {'高分子含量': {min: 50, max: 360}, '平方克重': {min: 42, max: 300}, '用途': '纸尿裤或拉拉裤'}
                },
                {
                    structure: 'A + B + E',
                    img: '../../dist/images/MD-2.jpg',
                    detail: {'高分子含量': {min: 50, max: 360}, '平方克重': {min: 42, max: 300}, '用途': '纸尿裤或拉拉裤'}
                },
                {
                    structure: 'D + B + E',
                    img: '../../dist/images/MD-2.jpg',
                    detail: {'高分子含量': {min: 50, max: 360}, '平方克重': {min: 42, max: 300}, '用途': '纸尿裤或拉拉裤'}
                },
                {
                    structure: 'A + B + B + A',
                    img: '../../dist/images/MD-3.jpg',
                    detail: {'高分子含量': {min: 50, max: 180}, '平方克重': {min: 42, max: 300}, '用途': '纸尿裤或拉拉裤'}
                },
                {
                    structure: 'A + B + B + C',
                    img: '../../dist/images/MD-3.jpg',
                    detail: {'高分子含量': {min: 20, max: 180}, '平方克重': {min: 42, max: 300}, '用途': '纸尿裤或拉拉裤'}
                },
                {
                    structure: 'A + B + B + B',
                    img: '../../dist/images/MD-3.jpg',
                    detail: {'高分子含量': {min: 20, max: 180}, '平方克重': {min: 42, max: 300}, '用途': '纸尿裤或拉拉裤'}
                },
                {
                    structure: 'A + B + B + E',
                    img: '../../dist/images/MD-3.jpg',
                    detail: {'高分子含量': {min: 20, max: 180}, '平方克重': {min: 42, max: 300}, '用途': '纸尿裤或拉拉裤'}
                },
                {
                    structure: 'A + B + E + E',
                    img: '../../dist/images/MD-3.jpg',
                    detail: {'高分子含量': {min: 20, max: 180}, '平方克重': {min: 42, max: 300}, '用途': '纸尿裤或拉拉裤'}
                },
                {
                    structure: 'A + B + E + C',
                    img: '../../dist/images/MD-3.jpg',
                    detail: {'高分子含量': {min: 20, max: 180}, '平方克重': {min: 42, max: 300}, '用途': '纸尿裤或拉拉裤'}
                },
                {
                    structure: 'A + B + E + D',
                    img: '../../dist/images/MD-3.jpg',
                    detail: {'高分子含量': {min: 20, max: 180}, '平方克重': {min: 42, max: 300}, '用途': '纸尿裤或拉拉裤'}
                }
            ]
        };
    },
    render: function () {
        return (
			<div>
                <h1 className="page-title">产品一览</h1>
                <div className="separator-2"></div>
                <ul className="list-icons">
                    <li><i className="fa fa-angle-right"></i> A：蓬松无尘纸（平方克重：40g/m<sup>2</sup>~60g/m<sup>2</sup>）</li>
                    <li><i className="fa fa-angle-right"></i> B：柔软扩散导流层无纺布 （平方克重：25g/m<sup>2</sup>~60g/m<sup>2</sup>）</li>
                    <li><i className="fa fa-angle-right"></i> C：小白纸（平方克重：14g/m<sup>2</sup>、18g/m<sup>2</sup>）</li>
                    <li><i className="fa fa-angle-right"></i> D：亲水布（平方克重：8g/m<sup>2</sup>、10g/m<sup>2</sup>）</li>
                    <li><i className="fa fa-angle-right"></i> E：柔软扩散导流层热风布（平方克重：25g/m<sup>2</sup>、35g/m<sup>2</sup>）</li>
                    <li><i className="fa fa-angle-right"></i> F：高分子（SAP）(注：高分子默认在A~E材料中间，故省略)</li>
                </ul>
                <div className="sorting-filters">
                    <form className="form-inline">
                        <div className="form-group">
                            <label>排序字段</label>
                            <select className="form-control" defaultValue="Price">
                                <option value="Date">日期</option>
                                <option value="Price">价格</option>
                                <option value="Model">克重</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>排序方式</label>
                            <select className="form-control" defaultValue="Acs">
                                <option value="Acs">升序</option>
                                <option value="Desc">降序</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>价格区间</label>
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
                            <label>种类</label>
                            <select className="form-control" defaultValue="Desktops">
                                <option value="Smartphones">纸尿裤</option>
                                <option value="Tablets">拉拉裤</option>
                                <option value="Smart Watches">成人裤</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <a href="javaScript:void(0)" className="btn btn-default">Submit</a>
                        </div>
                    </form>
                </div>
                <div className="masonry-grid-fitrows row grid-space-20">
                    {
                        this.props.products.map(function (data, index) {
                            var spec = [];
                            for (var i in data.detail) {
                                var item = data.detail[i];
                                if (item.max) {
                                    spec.push(<li key={i}><i className="icon-check"></i> {i}：{item.min}g/m<sup>2</sup> ~ {item.max}g/m<sup>2</sup></li>);
                                    continue;
                                }
                                spec.push(<li key={i}><i className="icon-check"></i> {i}：{item}</li>);
                            }
                            return <div key={index} className="col-xs-12 col-sm-6 col-md-4 masonry-grid-item">
                                <div className="listing-item">
                                    <div className="overlay-container">
                                        <img className="lazyload" src="../../dist/images/unloaded.jpg" data-src={data.img} alt="" style={{width: '100%'}}/>
                                        <a href="javaScript:void(0)" className="overlay small">
                                            <i className="fa fa-plus"></i>
                                            <span>查看更多</span>
                                        </a>
                                        <span className="badge default-bg">MD-{index + 1}</span>
                                    </div>
                                    <div className="listing-item-body clearfix">
                                        <h3 className="title text-center"><a href="javaScript:void(0)">{data.structure}</a></h3>
                                        <ul className="list-icons">
                                            {spec}
                                        </ul>
                                        <span className="price">价格面议</span>
                                        <div className="elements-list pull-right">
                                            <a href="javaScript:void(0)" className="wishlist" title="wishlist"><i className="fa fa-heart-o"></i></a>
                                            <a href="javaScript:void(0)"><i className="fa fa-shopping-cart pr-10"></i>添加到购物车</a>
                                        </div>
                                    </div>
                                </div>
                            </div>;
                        })
                    }
                </div>
                <div className="clearfix"></div>

                <ul className="pagination">
                    <li><a href="javaScript:void(0)">{'<<'}</a></li>
                    <li className="active"><a href="javaScript:void(0)">1 <span className="sr-only">(current)</span></a></li>
                    <li><a href="javaScript:void(0)">2</a></li>
                    <li><a href="javaScript:void(0)">3</a></li>
                    <li><a href="javaScript:void(0)">4</a></li>
                    <li><a href="javaScript:void(0)">5</a></li>
                    <li><a href="javaScript:void(0)">>></a></li>
                </ul>
			</div>
        );
    }
});
module.exports = Index;
