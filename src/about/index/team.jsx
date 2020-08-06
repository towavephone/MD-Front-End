var React = require('react');
var helpers = require('../../toolers/helpers');
var ScanModal = React.createClass({
    getInitialState: function () {
        return {img: null};
    },
    componentDidMount: function () {
        $('#scanModal').on('show.bs.modal', function (e) {
            var img = $(e.relatedTarget).data('img');
            if (!img) {
                helpers.alert('图片信息有误！');
                return e.preventDefault(); // 阻止模态框的展示
            }
            // console.log(img);
            console.log(img);
            this.setState({img});
        }.bind(this));
    },
    render: function () {
        return <div className="modal fade" id="scanModal" tabIndex="-1" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                        <h4 className="modal-title">微信二维码扫描</h4>
                    </div>
                    <div className="modal-body">
                        <img width="60%" src={this.state.img} style={{margin: '0 auto', border: '1px solid #f1f1f1'}}/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-sm btn-default" data-dismiss="modal"><i className="icon-check"></i> 已扫描</button>
                    </div>
                </div>
            </div>
        </div>;
    }
});
var Index = React.createClass({
    getDefaultProps: function () {
        return {
            leaders: [{
                img: '../../dist/images/李敬.jpg',
                name: '李敬',
                position: '董事长',
                saying: '2002年开始，美登人一直专注于吸收性芯材的开发与应用。坚持同样的事情重复做，日复一日、年复一年。坚毅、认真、耐心、细致、坚持每天学习一点，每天持续改善一点，积以时日，我们终将汇聚涓流。',
                weixin: '../../dist/images/李敬二维码.jpg',
                qq: '653846400',
                mobile: '13825559331'
            }, {
                img: '../../dist/images/唐燕.jpg',
                name: '唐燕',
                position: '财务总监',
                saying: '不管怎样的事情，都请安静地愉快吧!这是人生。我们要依样地接受人生，勇敢地、大胆地，而且永远地微笑着。',
                weixin: '../../dist/images/唐燕二维码.jpg',
                qq: '651207923',
                mobile: '13923287557'
            }, {
                img: '../../dist/images/任红英.jpg',
                name: '任红英',
                position: '总经理',
                saying: '涓滴之水终可以磨损大石，不是由于它力量强大，而是由于昼夜不舍的滴坠。',
                weixin: '../../dist/images/任红英二维码.jpg',
                qq: '249059181',
                mobile: '15015595591'
            }]
        };
    },
    render: function () {
        return (
            <div>
                <h2>领导团队</h2>
                <div className="separator-2"></div>
                <div className="row grid-space-20">
                    {
                        this.props.leaders.map(function (data, index) {
                            return <div key={index} className="col-sm-4">
                                <div className="image-box team-member">
                                    <div className="overlay-container">
                                        <img className="lazyload" src="../../dist/images/unloaded.jpg" data-src={data.img} alt=""/>
                                        <div className="overlay">
                                            <ul className="social-links colored clearfix">
                                                <li className="weixin"><a href="#scanModal" data-toggle="modal" data-img={data.weixin}><i className="fa fa-weixin"></i></a></li>
                                                <li className="QQ"><a href={'tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=' + data.qq + '&website=www.oicqzone.com'}><i className="fa fa-qq"></i></a></li>
                                                <li className="mobile"><a href={'tel:' + data.mobile}><i className="fa fa-mobile"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="image-box-body">
                                        <h3 className="title">{data.name}</h3>
                                        <small>{data.position}</small>
                                        <div className="separator-2"></div>
                                        <p>{data.saying}</p>
                                    </div>
                                </div>
                            </div>;
                        })
                    }
                </div>
                <ScanModal/>
            </div>
        );
    }
});
module.exports = Index;
