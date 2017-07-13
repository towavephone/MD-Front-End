var React = require('react');
var xhr = require('../toolers/xhr');
var helpers = require('../toolers/helpers');
var template = require('../toolers/template');
var Breadcrumb = require('./index/breadcrumb');
var Index = React.createClass({
    getDefaultProps: function () {
        return {
            news: [
                {
                    imgs: [{
                        img: '../../dist/images/领导交流.jpg',
                        desc: '九江镇党委委员、副镇长梁觉聪（左二）、九江镇招商统筹局主任崔泽文（右一）与美登董事长李敬（左一）交流'
                    }, {
                        img: '../../dist/images/演讲.jpg',
                        desc: '卫材商城董事长邓伟添演讲《“互联网+”卫材商城3.0打通产业链上下游沟通屏障》'
                    }, {
                        img: '../../dist/images/启动卫材商城.jpg',
                        desc: '现场启动卫材商城3.0'
                    }],
                    date: {day: '22', month: '3月 2017'},
                    title: '精彩！昨日这两场盛会亮相武汉，快看九江企业如何“吸睛”……',
                    submitted: '南海九江',
                    content: [
                        '3月22日，2017武汉生活用纸国际科技展览会及卫材商城APP3.0发布会在武汉举行，吸引了不少企业和客人前来参展与围观。此刻，将镜头对准这两场展会，看看都有什么精彩的亮点吧~',
                        '2017年武汉生活用纸展虽遇到雨季的影响，但却抵挡不住大家参展的热情，本次展会吸引了近800家海内外企业参展，展会面积达8万平米，分为11个展区，共有千余种品牌进行集中展示。九江镇招商团队当天到场参观考察，与参展企业交流。',
                        '南海医卫用协会会员单位则在现场大放异彩，吸引了不少参展商围观。一起去看看当日盛况吧~',
                        '会员企业现场展示的各种创新成果让人大开眼界，其优质的产品受到各地商家青睐，现场火爆不断！'
                    ],
                    link: 'http://www.foshannews.net/jjzs/wszz/201704/t20170410_74757.html'
                },
                {
                    imgs: [{
                        img: '../../dist/images/领导视察实验室.jpg',
                        desc: '黄进（左二）考察广东美登纸业有限公司'
                    }, {
                        img: '../../dist/images/领导组织开会.jpg',
                        desc: '黄进（右三）与广东美登纸业有限公司高层会谈'
                    }],
                    date: {day: '24', month: '2月 2017'},
                    title: '黄进带队赴佛山考察广东美登纸业有限公司',
                    submitted: '襄阳襄州网',
                    content: [
                        '（记者张凌、通讯员刘明铎、计琛楠）2月24日上午，襄州区政府区长黄进带领副区长王海及区招商局人员，在市招商局装备制造产业分局局长周建空和市国土局招商人员陪同下，前往佛山考察广东美登纸业有限公司。',
                        '在公司总经理李敬的带领下，考察团先后参观了公司产品检测实验室和生产线，并就妇幼卫生用品、护理用品市场发展前景和方向进行了深入交流。',
                        '黄进介绍了襄阳在国家“一带一路”中的位置、区位交通优势和襄州区的纺织产业基础，重点推介了纺织产业园的规划、基础设施建设、入驻企业等情况及襄州区正在大力推行的重资产招商模式。',
                        '李敬表示，随着公司的快速发展，迫切希望在中部建设生产基地，并拟定于3月上旬到襄州考察洽谈。黄进承诺，襄州区将根据公司投资要求，以优惠的政策、优质的服务，为项目落地建设提供良好保障。',
                        '广东美登纸业有限公司是全国规摸最大的以设计、生产、销售卫生复合纸、膨化复合纸、湿强纸、高分子纸等为一体的专业纸品生产厂家；是恒安、ABC等公司护理用品最大的上游配套供应商。（编辑：李顺民）'
                    ],
                    link: 'http://www.zgxy.gov.cn/html/201702/24/248061502.html'
                },
                {
                    imgs: [{
                        img: '../../dist/images/年会标志.jpg',
                        desc: '第二十二届生活用纸国际科技展览'
                    }, {
                        img: '../../dist/images/展位预览.jpg',
                        desc: '主展位设计图'
                    }, {
                        img: '../../dist/images/分区预览.jpg',
                        desc: '展品分区一览（点击可查看大图）深圳会展中心1/2/6/7/8/9展厅'
                    }],
                    date: {day: '22', month: '5月 2015'},
                    title: '威！南海医卫用产品行业协会首次抱团“出征”国际展会！',
                    submitted: '南海九江',
                    content: [
                        '第二十二届生活用纸国际科技展览及会议（CIDPEX2015）将于2015年5月25-27日在深圳会展中心举办。CIDPEX2015年深圳生活用纸年会由中国造纸协会生活用纸专业委员会主办，为全球最大规模生活用纸、卫生用品专业展览会，已成功举办二十一届，是业内享有盛誉的专业展会,涵盖了行业内从产品、原辅材料、设备器材全产业链，提供一站式的贸易洽谈平台。',
                        '本次展览，共有700多家参展商，场馆面积达82500㎡，为历届最大，30000多海内外专业观众将参与其中，而南海区医卫用产业行业协会首次报团参展，12家企业军团“出战”！其中广东美登纸业也参加了此次展会。',
                        '25日当天，南海区医卫用行业协会在主展位（8F20展位），将会有“中国医卫用非织造产品示范基地”专场推介、设企业宣传和沟通交流平台，借助参展机会介绍九江镇经济发展情况及无纺布行业发展现状。',
                        '此次报团参展，将可以扩大南海区医卫用产品行业协会的影响力和知名度，促进协会会员企业的发展和壮大，为会员企业与国内外卫生用品企业搭建交流合作平台。'
                    ],
                    link: 'http://www.nhjjw.cn/index/03/201505/t20150522_5667749.html'
                }
            ]
        };
    },
    componentDidMount: function () {
        template.allRun();
        // this.getData();
    },
    render: function () {
        return (
            <div>
                <Breadcrumb/>
                <section className="main-container">
                    <div className="container">
                        <div className="row">
                            <div className="main col-md-12">
                                <h1 className="page-title">新闻中心</h1>
                                <div className="separator-2"></div>
                                <p className="lead">美登人身边的大事记</p>
                                    {
                                        this.props.news.map(function (data, index) {
                                            var imgs = data.imgs.map(function (data2, index2) {
                                                return <div key={index2} className="image-box">
                                                    <div className="overlay-container">
                                                        <img src={data2.img} alt=""/>
                                                        <div className="overlay">
                                                            <div className="overlay-links">
                                                                <a target="_blank" href={data.link}><i className="fa fa-link"></i></a>
                                                                <a href={data2.img} className="popup-img"><i className="fa fa-search-plus"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <a className="btn btn-light-gray btn-block" target="_blank" href={data.link}>{data2.desc}</a>
                                                </div>;
                                            });
                                            var content = data.content.map(function (data3, index3) {
                                                return <p key={index3}>{data3}</p>;
                                            });
                                            return <article key={index} className="clearfix blogpost object-non-visible" data-animation-effect="fadeInUpSmall" data-effect-delay="200">
                                                <div className="owl-carousel carousel-autoplay" style={{padding: '20px'}}>
                                                    {imgs}
                                                </div>
                                                <div className="blogpost-body">
                                                    <div className="post-info">
                                                        <span className="day">{data.date.day}</span>
                                                        <span className="month">{data.date.month}</span>
                                                    </div>
                                                    <div className="blogpost-content">
                                                        <header>
                                                            <h2 className="title"><a target="_blank" href={data.link}>{data.title}</a></h2>
                                                            <div className="submitted"><i className="fa fa-user pr-5"></i> by <a target="_blank" href={data.link}>{data.submitted}</a></div>
                                                        </header>
                                                        {content}
                                                    </div>
                                                </div>
                                                <footer className="clearfix">
                                                    <ul className="links pull-left">
                                                        <li><i className="fa fa-comment-o pr-5"></i> <a href="#">22 comments</a> |</li>
                                                        <li><i className="fa fa-tags pr-5"></i> <a href="#">tag 1</a>, <a href="#">tag 2</a>, <a href="#">long tag 3</a> </li>
                                                    </ul>
                                                    <a className="pull-right link" target="_blank" href={data.link}><span>Read more</span></a>
                                                </footer>
                                            </article>;
                                        })
                                    }
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
                        </div>
                    </div>
                </section>
            </div>
        );
    }
});
module.exports = Index;
