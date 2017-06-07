var React = require('react');
var Index = React.createClass({
    getDefaultProps: function () {
        return {
            timeline: [
                {
                    deadline: '至今',
                    events: [
                        {
                            img: '../../dist/images/东莞天正纸业2016年度优秀供货商.jpg',
                            day: '1',
                            month: '1月 2017',
                            title: '东莞天正纸业2016年度优秀供货商',
                            submitted: 'towave'
                        },
                        {
                            img: '../../dist/images/佛山卫婴康2016年度最佳合作伙伴.jpg',
                            day: '1',
                            month: '12月 2016',
                            title: '佛山卫婴康2016年度最佳合作伙伴',
                            submitted: 'towave'
                        },
                        {
                            img: '../../dist/images/中国生活用纸专业委员会会员单位.jpg',
                            day: '9',
                            month: '12月 2016',
                            title: '中国生活用纸专业委员会会员单位',
                            submitted: 'towave'
                        },
                        {
                            img: '../../dist/images/安全生产标准化三级企业.jpg',
                            day: '25',
                            month: '1月 2016',
                            title: '安全生产标准化三级企业',
                            submitted: 'towave'
                        },
                        {
                            img: '../../dist/images/南海区医卫用行业协会理事单位.jpg',
                            day: '1',
                            month: '1月 2016',
                            title: '南海区医卫用行业协会理事单位',
                            submitted: 'towave'
                        },
                        {
                            img: '../../dist/images/美登厂门口.jpg',
                            day: '1',
                            month: '10月 2015',
                            title: '广东美登纸业有限公司',
                            submitted: 'towave',
                            address: '佛山市三水区乐平镇三水中心科技园区C区9号'
                        }
                    ]
                },
                {
                    deadline: '2015年10月',
                    events: [
                        {
                            img: '../../dist/images/南海区医卫用行业协会2015年度突出单位.jpg',
                            day: '1',
                            month: '12月 2015',
                            title: '南海区医卫用行业协会2015年度突出单位',
                            submitted: 'towave'
                        },
                        {
                            img: '../../dist/images/东莞天正纸业2014年度最佳合作伙伴.jpg',
                            day: '1',
                            month: '12月 2014',
                            title: '东莞天正纸业2014年度最佳合作伙伴',
                            submitted: 'towave'
                        },
                        {
                            img: '../../dist/images/东莞天正纸业2013年度最佳合作伙伴.jpg',
                            day: '1',
                            month: '12月 2013',
                            title: '东莞天正纸业2013年度最佳合作伙伴',
                            submitted: 'towave'
                        },
                        {
                            img: '../../dist/images/昱昇企业2013年度战略合作伙伴.jpg',
                            day: '1',
                            month: '12月 2013',
                            title: '昱昇企业2013年度战略合作伙伴',
                            submitted: 'towave'
                        },
                        {
                            img: '../../dist/images/美登厂门口.jpg',
                            day: '1',
                            month: '8月 2013',
                            title: '佛山美登纸业有限公司',
                            submitted: 'towave',
                            address: '佛山市三水区乐平镇田西村'
                        }
                    ]
                },
                {
                    deadline: '2013年8月',
                    events: [
                        {
                            img: '../../dist/images/广东凯迪服饰2011年优秀供货商.jpg',
                            day: '8',
                            month: '1月 2012',
                            title: '广东凯迪服饰2011年优秀供货商',
                            submitted: 'towave'
                        },
                        {
                            img: '../../dist/images/马岗工业区.jpg',
                            day: '1',
                            month: '10月 2008',
                            title: '佛山美登纸业有限公司',
                            submitted: 'towave',
                            address: '佛山市顺德区容桂镇马岗工业区'
                        },
                        {
                            img: '../../dist/images/瑞丰大厦.jpg',
                            day: '1',
                            month: '9月 2008',
                            title: '佛山美登纸业有限公司',
                            submitted: 'towave',
                            address: '佛山市顺德区北滘镇瑞丰大厦'
                        }
                    ]
                }
            ]
        };
    },
    render: function () {
        return (
            <div>
                <h1 className="page-title">发展历程</h1>
                <div className="separator-2"></div>
                <p className="lead">脚踏实地，专心致志，以日复一日年复一年的恒心打造美登品质。</p>
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="timeline row">
                            <div className="timeline-icon hidden-xs"><i className="fa fa-angle-double-up"></i></div>
                            {
                                this.props.timeline.map(function (data, index) {
                                    var events = data.events.map(function (data2, index2) {
                                        var isRight = index2 % 2 ? 'pull-right' : 'pull-left';
                                        return <div key={index2} className={'timeline-item object-non-visible ' + isRight} data-animation-effect="fadeInUpSmall" data-effect-delay="200">
                                            <article className="clearfix blogpost">
                                                <div className="overlay-container">
                                                    <img src={data2.img} alt=""/>
                                                    <div className="overlay">
                                                        <div className="overlay-links">
                                                            <a href="blog-post.html"><i className="fa fa-link"></i></a>
                                                            <a href={data2.img} className="popup-img-single" title={data2.title}><i className="fa fa-search-plus"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="blogpost-body">
                                                    <div className="post-info">
                                                        <span className="day">{data2.day}</span>
                                                        <span className="month">{data2.month}</span>
                                                    </div>
                                                    <div className="blogpost-content">
                                                        <header>
                                                            <h2 className="title"><a href="blog-post.html">{data2.title}</a></h2>
                                                            <div className="submitted"><i className="fa fa-user pr-5"></i> by <a href="#">{data2.submitted}</a></div>
                                                        </header>
                                                        {
                                                            data2.address ? <ul className="list"><li><i className="fa fa-home pr-10"></i>地址：{data2.address}</li></ul> : null
                                                        }
                                                    </div>
                                                </div>
                                                <footer className="clearfix">
                                                    <ul className="links pull-left">
                                                        <li><i className="fa fa-comment-o pr-5"></i> <a href="#">22 comments</a> |</li>
                                                        <li><i className="fa fa-tags pr-5"></i> <a href="#">tag 1</a></li>
                                                    </ul>
                                                    <a className="pull-right link" href="blog-post.html"><span>Read more</span></a>
                                                </footer>
                                            </article>
                                        </div>;
                                    });
                                    return <div key={index}>
                                        <div className="timeline-date-label clearfix" style={{paddingTop: '60px'}}>{data.deadline}</div>
                                        {events}
                                    </div>;
                                })
                            }
                        </div>
                        <div className="text-center">
                            <a href="#" className="btn btn-default">查看更多</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = Index;
