var React = require('react');
var template = require('../toolers/template');
var Team = require('./index/team');
var Breadcrumb = require('./index/breadcrumb');
var Introduce = require('./index/introduce');
var Prize = require('./index/prize');
var Welcome = require('./index/welcome');
var Index = React.createClass({
    getDefaultProps: function () {
        return {
            images: [
                'dist/images/公司介绍.png',
                'dist/images/公司介绍2.png',
                'dist/images/公司介绍3.png'
            ],
            persons: [
                {
                    img: 'dist/images/李敬.jpg',
                    name: '李敬',
                    role: '董事长',
                    wisdom: '2002年开始，美登人一直专注于吸收性芯材的开发与应用。坚持同样的事情重复做，日复一日、年复一年。坚毅、认真、耐心、细致、坚持每天学习一点，每天持续改善一点，积以时日，我们终将汇聚涓流。'
                },
                {
                    img: 'dist/images/唐燕.jpg',
                    name: '唐燕',
                    role: '财务总监',
                    wisdom: '青年时准备好材料，想造一座通向月亮的桥，或者在地上造二所宫殿或庙宇。活到中年，终于决定搭一个棚。'
                },
                {
                    img: 'dist/images/任红英.jpg',
                    name: '任红英',
                    role: '总经理',
                    wisdom: '让青春反抗老朽，长发反抗秃头，热情反抗陈腐，未来反抗往昔，这是多么自然！'
                }
            ]
        };
    },
    componentDidMount: function () {
        template.allRun();
    },
    render: function () {
        return (
            <div>
            <Welcome/>
            <Breadcrumb/>
            <section className="main-container">
				<div className="container">
					<div className="row">
						<div className="main col-md-12">
                            <Introduce/>
                            <div className="space-bottom"></div>
                            <Team/>
                            <div className="space-bottom"></div>
                            <Prize/>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        );
    }
});
module.exports = Index;
