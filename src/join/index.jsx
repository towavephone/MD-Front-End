var React = require('react');
var xhr = require('../toolers/xhr');
var helpers = require('../toolers/helpers');
var template = require('../toolers/template');
var Breadcrumb = require('./breadcrumb');
var VideoModal = React.createClass({
    getInitialState: function () {
        return {
            video: null,
            title: null
        };
    },
    componentDidMount: function () {
        $('#videoModal').on('show.bs.modal', function (e) {
            var {video, title} = $(e.relatedTarget).data();
            if (!video) {
                helpers.alert('视频信息有误！');
                return e.preventDefault(); // 阻止模态框的展示
            }
            this.setState({video, title}, function () {
                this.refs.video.play();
            }.bind(this));
        }.bind(this));
        $('#videoModal').on('hide.bs.modal', function (e) {
            this.refs.video.pause();
        }.bind(this));
    },
    render: function () {
        return <div className="modal fade" id="videoModal" tabIndex="-1" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                        <h4 className="modal-title">{this.state.title}</h4>
                    </div>
                    <div className="modal-body">
                        <video width="100%" ref="video" src={this.state.video} controls="controls"></video>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-sm btn-default" data-dismiss="modal"><i className="icon-check"></i> 已看完</button>
                    </div>
                </div>
            </div>
        </div>;
    }
});
var Index = React.createClass({
    getDefaultProps: function () {
        return {
            staffs: [
                {
                    title: '你不是一个人在战斗！',
                    img: '../../dist/images/员工风采.jpg'
                },
                {
                    title: '畅游张家界，欢乐伴美登',
                    img: '../../dist/images/员工风采2.jpg'
                },
                {
                    title: '惠州巽寮湾之行444',
                    img: '../../dist/images/员工风采3.jpg'
                },
                {
                    title: '力拔山兮气盖世，不服你们上来试！',
                    video: '../../dist/videos/拔河比赛.mp4'
                },
                {
                    title: '美登形象视频',
                    video: '../../dist/videos/公司宣传视频.mp4'
                }
            ]
        };
    },
    componentDidMount: function () {
        helpers.imgLoaded('.isotope-container img', function () {
            $('video').on('canplaythrough', function () {
                template.allRun();
            });
        });
    },
    render: function () {
        return (
            <div>
                <Breadcrumb/>
                <VideoModal/>
                <section className="main-container">
                    <div className="container">
                        <div className="row">
                            <div className="main col-md-12">
                                <h1 className="page-title">员工风采</h1>
                                <div className="separator-2"></div>
                                <p className="lead">看见不一样的美登</p>
                                <div className="filters">
                                    <ul className="nav nav-pills">
                                        <li className="active"><a href="#" data-filter="*">所有活动</a></li>
                                        <li><a href="#" data-filter=".img">活动图片</a></li>
                                        <li><a href="#" data-filter=".video">活动视频</a></li>
                                    </ul>
                                </div>
                                <div className="isotope-container row grid-space-20">
                                    {
                                        this.props.staffs.map(function (data, index) {
                                            var type = data.img ? 'img' : 'video';
                                            return <div key={index} className={'isotope-item col-xs-12 col-sm-4 col-md-3 ' + type}>
                                                <div className="image-box">
                                                    <div className="overlay-container">
                                                        {
                                                            data.img ? <img src={data.img} alt="" width="100%"/> : <video width="100%" src={data.video}></video>
                                                        }
                                                        <div className="overlay">
                                                            <div className="overlay-links">
                                                                <a href="javaScript:void(0)"><i className="fa fa-link"></i></a>
                                                                {
                                                                    data.img ? <a href={data.img} className="popup-img"><i className="fa fa-search-plus"></i></a> : <a href="#videoModal" data-toggle="modal" data-title={data.title} data-video={data.video}><i className="fa fa-search-plus"></i></a>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <a href="javaScript:void(0)" className="btn btn-light-gray btn-lg btn-block">{data.title}</a>
                                                </div>
                                            </div>;
                                        })
                                    }
                                </div>
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
                        </div>
                    </div>
                </section>
            </div>
        );
    }
});
module.exports = Index;
