window.addEventListener('load', () => {
	addClickEventToNavOpener();
	handleBrowserResize();
	initTinySlider();
	initTabby();
});

const addClickEventToNavOpener = () => {
	const navOperner = document.querySelector('.mobile-nav-opener');
	if (navOperner) {
		navOperner.addEventListener('click', e => {
			e.preventDefault();
			document.body.classList.toggle('nav-active');
		});
	}
};

const handleBrowserResize = () => {
	window.addEventListener('resize', () => {
		let resizeTimer;
		document.body.classList.add('resize-active');
		if (window.innerWidth > 767) {
			document.body.classList.remove('nav-active');
		}
		clearTimeout(resizeTimer);
		setTimeout(() => {
			document.body.classList.remove('resize-active');
		}, 400);
	});
};

function initTinySlider() {
	const sliderBlock = document.getElementById('hero-slider');
	if (sliderBlock) {
		const slider = tns({
			container: '#hero-slider',
			loop: true,
			items: 1,
			slideBy: 1,
			nav: false,
			autoplay: true,
			speed: 500,
			autoplayButtonOutput: false,
			mouseDrag: true,
			controls: false,
		});
	}
	const blogSliderBlock = document.getElementById('blog-posts-slider');
	if (blogSliderBlock) {
		const blogSlider = tns({
			container: '#blog-posts-slider',
			loop: true,
			items: 1,
			slideBy: 1,
			nav: false,
			autoplay: false,
			speed: 500,
			autoplayButtonOutput: false,
			mouseDrag: true,
			controls: true,
			gutter: 30,
			controlsContainer: '#blog-posts-slider-controls',
			responsive: {
				768: {
					items: 2,
				},
				1024: {
					items: 4,
				},
			},
		});
		const searchControls = document.getElementsByClassName('tiny-slider-controls');
		for (let i = 0; i < searchControls.length; i++) {
			searchControls[i].addEventListener('click', e => {
				e.preventDefault();
			});
		}
	}
	const testimonySliderBlock = document.getElementById('testimony-slider');
	if (testimonySliderBlock) {
		const slider = tns({
			container: '#testimony-slider',
			loop: true,
			items: 1,
			slideBy: 1,
			nav: false,
			autoplay: true,
			speed: 500,
			autoplayButtonOutput: false,
			mouseDrag: true,
			controls: true,
			controlsContainer: '#testimony-slider-controls',
		});
	}
}

function initTabby() {
	const tabBlock = document.getElementsByClassName('tab-wrapper');
	if (tabBlock.length) {
		const tabs = new Tabby('[data-tabs]');
	}
}
