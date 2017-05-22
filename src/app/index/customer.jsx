var React = require('react');
var Index = React.createClass({
    render: function () {
        return (
			<div className="section gray-bg clearfix">
				<div className="owl-carousel content-slider">
					<div className="testimonial">
						<div className="container">
							<div className="row">
								<div className="col-md-8 col-md-offset-2">
									<h2 className="title">Just Perfect!</h2>
									<div className="testimonial-image">
										<img src="../../dist/images/testimonial-1.jpg" alt="Jane Doe" title="Jane Doe" className="img-circle"/>
									</div>
									<div className="testimonial-body">
										<p>Sed ut perspiciatis unde omnis iste natu error sit voluptatem accusan tium dolore laud antium,  totam rem dolor sit amet tristique pulvinar, turpis arcu rutrum nunc, ac laoreet turpis augue a justo.</p>
										<div className="testimonial-info-1">- Jane Doe</div>
										<div className="testimonial-info-2">By Company</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="testimonial">
						<div className="container">
							<div className="row">
								<div className="col-md-8 col-md-offset-2">
									<h2 className="title">Wow amazing!</h2>
									<div className="testimonial-image">
										<img src="./../dist/images/testimonial-2.jpg" alt="Jane Doe" title="Jane Doe" className="img-circle"/>
									</div>
									<div className="testimonial-body">
										<p>Turpis arcu rutrum nunc, ac laoreet turpis augue a justo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, esse, animi maxime voluptate tempore at sunt labore incidunt nulla dignissimos iusto ad similique inventore distinctio quam repellendus itaque minus minima.</p>
										<div className="testimonial-info-1">- John Doe</div>
										<div className="testimonial-info-2">By Company</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="testimonial">
						<div className="container">
							<div className="row">
								<div className="col-md-8 col-md-offset-2">
									<h2 className="title">Thanks!</h2>
									<div className="testimonial-image">
										<img src="./../dist/images/testimonial-3.jpg" alt="Jane Doe" title="Jane Doe" className="img-circle"/>
									</div>
									<div className="testimonial-body">
										<p>Phosfluorescently e-enable adaptive synergy for strategic quality vectors. Continually transform fully tested expertise with competitive technologies ac laoreet turpis augue a justo.</p>
										<div className="testimonial-info-1">- John Doe</div>
										<div className="testimonial-info-2">By Company</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
        );
    }
});
module.exports = Index;
