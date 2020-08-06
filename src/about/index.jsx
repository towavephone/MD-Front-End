var React = require('react');
var template = require('../toolers/template');
var Team = require('./index/team');
var Breadcrumb = require('./breadcrumb');
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
                    wisdom: '不管怎样的事情，都请安静地愉快吧！这是人生。我们要依样地接受人生，勇敢地、大胆地，而且永远地微笑着。'
                },
                {
                    img: 'dist/images/任红英.jpg',
                    name: '任红英',
                    role: '总经理',
                    wisdom: '涓滴之水终可以磨损大石，不是由于它力量强大，而是由于昼夜不舍的滴坠。'
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
