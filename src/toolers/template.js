/* eslint-disable */
var ShowDropdownForDesktopAndMobile = function () {
    // Show dropdown on hover only for desktop devices
    // -----------------------------------------------
    var delay = 0, setTimeoutConst;
    if (Modernizr.mq('only all and (min-width: 768px)') && !Modernizr.touch) {
        $('.main-navigation .navbar-nav>li.dropdown, .main-navigation li.dropdown>ul>li.dropdown').hover(
        function () {
            var $this = $(this);
            setTimeoutConst = setTimeout(function () {
                $this.addClass('open').slideDown();
                $this.find('.dropdown-toggle').addClass('disabled');
            }, delay);
        },	function () {
            clearTimeout(setTimeoutConst);
            $(this).removeClass('open');
            $(this).find('.dropdown-toggle').removeClass('disabled');
        });
    }
    // Show dropdown on click only for mobile devices
    // -----------------------------------------------
    if (Modernizr.mq('only all and (max-width: 767px)') || Modernizr.touch) {
        $('.main-navigation [data-toggle=dropdown], .header-top [data-toggle=dropdown]').on('click', function (event) {
        // Avoid following the href location when clicking
            event.preventDefault();
        // Avoid having the menu to close when clicking
            event.stopPropagation();
        // close all the siblings
            $(this).parent().siblings().removeClass('open');
        // close all the submenus of siblings
            $(this).parent().siblings().find('[data-toggle=dropdown]').parent().removeClass('open');
        // opening the one you clicked on
            $(this).parent().toggleClass('open');
        });
    }
};

var Slider = function () {
    // Main slider
		// -----------------------------------------------

		// Revolution Slider
    if ($('.slider-banner-container').length > 0) {
        $('.tp-bannertimer').show();

        $('.slider-banner-container .slider-banner').show().revolution({
            delay: 10000,
            startwidth: 1140,
            startheight: 520,

            navigationArrows: 'solo',

            navigationStyle: 'round',
            navigationHAlign: 'center',
            navigationVAlign: 'bottom',
            navigationHOffset: 0,
            navigationVOffset: 20,

            soloArrowLeftHalign: 'left',
            soloArrowLeftValign: 'center',
            soloArrowLeftHOffset: 20,
            soloArrowLeftVOffset: 0,

            soloArrowRightHalign: 'right',
            soloArrowRightValign: 'center',
            soloArrowRightHOffset: 20,
            soloArrowRightVOffset: 0,

            fullWidth: 'on',

            spinner: 'spinner0',

            stopLoop: 'off',
            stopAfterLoops: -1,
            stopAtSlide: -1,
            onHoverStop: 'off',

            shuffle: 'off',

            autoHeight: 'off',
            forceFullWidth: 'off',

            hideThumbsOnMobile: 'off',
            hideNavDelayOnMobile: 1500,
            hideBulletsOnMobile: 'off',
            hideArrowsOnMobile: 'off',
            hideThumbsUnderResolution: 0,

            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            startWithSlide: 0
        });

        var app = $('.slider-banner-container .slider-banner-2').show().revolution({
            delay: 10000,
            startwidth: 1140,
            startheight: 520,

            navigationArrows: 'solo',

            navigationStyle: 'preview4',
            navigationHAlign: 'center',
            navigationVAlign: 'bottom',
            navigationHOffset: 0,
            navigationVOffset: 20,

            soloArrowLeftHalign: 'left',
            soloArrowLeftValign: 'center',
            soloArrowLeftHOffset: 20,
            soloArrowLeftVOffset: 0,

            soloArrowRightHalign: 'right',
            soloArrowRightValign: 'center',
            soloArrowRightHOffset: 20,
            soloArrowRightVOffset: 0,

            fullWidth: 'on',

            spinner: 'spinner0',

            stopLoop: 'off',
            stopAfterLoops: -1,
            stopAtSlide: -1,
            onHoverStop: 'off',

            shuffle: 'off',

            autoHeight: 'off',
            forceFullWidth: 'off',

            hideThumbsOnMobile: 'off',
            hideNavDelayOnMobile: 1500,
            hideBulletsOnMobile: 'off',
            hideArrowsOnMobile: 'off',
            hideThumbsUnderResolution: 0,

            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            startWithSlide: 0
        });
        // debugger
        // app.off();
        $('.slider-banner-container .slider-banner-3').show().revolution({
            delay: 10000,
            startwidth: 1140,
            startheight: 520,
            dottedOverlay: 'twoxtwo',

            parallax: 'mouse',
            parallaxBgFreeze: 'on',
            parallaxLevels: [3, 2, 1],

            navigationArrows: 'solo',

            navigationStyle: 'preview5',
            navigationHAlign: 'center',
            navigationVAlign: 'bottom',
            navigationHOffset: 0,
            navigationVOffset: 20,

            soloArrowLeftHalign: 'left',
            soloArrowLeftValign: 'center',
            soloArrowLeftHOffset: 20,
            soloArrowLeftVOffset: 0,

            soloArrowRightHalign: 'right',
            soloArrowRightValign: 'center',
            soloArrowRightHOffset: 20,
            soloArrowRightVOffset: 0,

            fullWidth: 'on',

            spinner: 'spinner0',

            stopLoop: 'off',
            stopAfterLoops: -1,
            stopAtSlide: -1,
            onHoverStop: 'off',

            shuffle: 'off',

            autoHeight: 'off',
            forceFullWidth: 'off',

            hideThumbsOnMobile: 'off',
            hideNavDelayOnMobile: 1500,
            hideBulletsOnMobile: 'off',
            hideArrowsOnMobile: 'off',
            hideThumbsUnderResolution: 0,

            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            startWithSlide: 0
        });

        $('.slider-banner-container .slider-banner-fullscreen').show().revolution({
            delay: 10000,
            startwidth: 1140,
            startheight: 520,
            fullWidth: 'off',
            fullScreen: 'on',
            fullScreenOffsetContainer: '',
            fullScreenOffset: '82px',

            navigationArrows: 'solo',

            navigationStyle: 'preview4',
            navigationHAlign: 'center',
            navigationVAlign: 'bottom',
            navigationHOffset: 0,
            navigationVOffset: 20,

            soloArrowLeftHalign: 'left',
            soloArrowLeftValign: 'center',
            soloArrowLeftHOffset: 20,
            soloArrowLeftVOffset: 0,

            soloArrowRightHalign: 'right',
            soloArrowRightValign: 'center',
            soloArrowRightHOffset: 20,
            soloArrowRightVOffset: 0,

            spinner: 'spinner4',

            stopLoop: 'off',
            stopAfterLoops: -1,
            stopAtSlide: -1,
            onHoverStop: 'off',

            shuffle: 'off',
            hideTimerBar: 'on',

            autoHeight: 'off',
            forceFullWidth: 'off',

            hideThumbsOnMobile: 'off',
            hideNavDelayOnMobile: 1500,
            hideBulletsOnMobile: 'off',
            hideArrowsOnMobile: 'off',
            hideThumbsUnderResolution: 0,

            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            startWithSlide: 0
        });
    }
};

var OwlCarousel = function () {
    // Owl carousel
		// -----------------------------------------------
    if ($('.owl-carousel').length > 0) {
        $('.owl-carousel.carousel').owlCarousel({
            items: 4,
            pagination: false,
            navigation: true,
            navigationText: false
        });
        $('.owl-carousel.carousel-autoplay').owlCarousel({
            items: 4,
            autoPlay: 5000,
            pagination: false,
            navigation: true,
            navigationText: false
        });
        $('.owl-carousel.clients').owlCarousel({
            items: 4,
            autoPlay: true,
            pagination: false,
            itemsDesktopSmall: [992, 5],
            itemsTablet: [768, 4],
            itemsMobile: [479, 3]
        });
        $('.owl-carousel.content-slider').owlCarousel({
            singleItem: true,
            autoPlay: 5000,
            navigation: false,
            navigationText: false,
            pagination: false
        });
        $('.owl-carousel.content-slider-with-controls').owlCarousel({
            singleItem: true,
            autoPlay: false,
            navigation: true,
            navigationText: false,
            pagination: true
        });
        $('.owl-carousel.content-slider-with-controls-autoplay').owlCarousel({
            singleItem: true,
            autoPlay: 5000,
            navigation: true,
            navigationText: false,
            pagination: true
        });
        $('.owl-carousel.content-slider-with-controls-bottom').owlCarousel({
            singleItem: true,
            autoPlay: false,
            navigation: true,
            navigationText: false,
            pagination: true
        });
    }
};

var Animations = function () {
    // Animations
    // -----------------------------------------------
    if (($('[data-animation-effect]').length > 0) && !Modernizr.touch) {
        $('[data-animation-effect]').each(function () {
            var $this = $(this),
                animationEffect = $this.attr('data-animation-effect');
            if (Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
                $this.appear(function () {
                    var delay = ($this.attr('data-effect-delay') ? $this.attr('data-effect-delay') : 1);
                    if (delay > 1) $this.css('effect-delay', delay + 'ms');
                    setTimeout(function () {
                        $this.addClass('animated object-visible ' + animationEffect);
                    }, delay);
                }, {accX: 0, accY: -130});
            } else {
                $this.addClass('object-visible');
            }
        });
    }
};

var CountTo = function () {
    // Stats Count To
    // -----------------------------------------------
    if ($('.stats [data-to]').length > 0) {
        $('.stats [data-to]').each(function () {
            var $this = $(this),
                offset = $this.offset().top;
            if ($(window).scrollTop() > (offset - 800) && !($this.hasClass('counting'))) {
                $this.addClass('counting');
                $this.countTo();
            }
            $(window).scroll(function () {
                if ($(window).scrollTop() > (offset - 800) && !($this.hasClass('counting'))) {
                    $this.addClass('counting');
                    $this.countTo();
                }
            });
        });
    }
};

var IsotopeFilters = function () {
    // Isotope filters
    // -----------------------------------------------
    if ($('.isotope-container').length > 0 || $('.masonry-grid').length > 0 || $('.masonry-grid-fitrows').length > 0) {
        $('.masonry-grid').isotope({
            itemSelector: '.masonry-grid-item',
            layoutMode: 'masonry'
        });
        $('.masonry-grid-fitrows').isotope({
            itemSelector: '.masonry-grid-item',
            layoutMode: 'fitRows'
        });
        $('.isotope-container').fadeIn();
        var $container = $('.isotope-container').isotope({
            itemSelector: '.isotope-item',
            layoutMode: 'masonry',
            transitionDuration: '0.6s',
            filter: "*"
        });
        // filter items on button click
        $('.filters').on('click', 'ul.nav li a', function () {
            var filterValue = $(this).attr('data-filter');
            $('.filters').find('li.active').removeClass('active');
            $(this).parent().addClass('active');
            $container.isotope({filter: filterValue});
            return false;
        });
    }
};
var hcTabs = function () {
    // hc-tabs
    // -----------------------------------------------
    if ($('.hc-tabs').length > 0) {
        var currentTab = $('.hc-tabs .nav.nav-tabs li.active a').attr('href'),
            tabsImageAnimation = $('.hc-tabs-top').find('[data-tab=\'' + currentTab + '\']').attr('data-tab-animation-effect');
        $('.hc-tabs-top').find('[data-tab=\'' + currentTab + '\']').addClass('current-img show ' + tabsImageAnimation + ' animated');

        $('.hc-tabs .nav.nav-tabs li a').on('click', function (event) {
            var currentTab = $(this).attr('href'),
                tabsImageAnimation = $('.hc-tabs-top').find('[data-tab=\'' + currentTab + '\']').attr('data-tab-animation-effect');
            $('.current-img').removeClass('current-img show ' + tabsImageAnimation + ' animated');
            $('.hc-tabs-top').find('[data-tab=\'' + currentTab + '\']').addClass('current-img show ' + tabsImageAnimation + ' animated');
        });
    }
};
var animatedProgressBars = function () {
    // Animated Progress Bars
    // -----------------------------------------------
    if ($('[data-animate-width]').length > 0) {
        $('[data-animate-width]').each(function () {
            var $this = $(this);
            $this.appear(function () {
                $this.animate({width: $this.attr('data-animate-width')}, 800);
            }, {accX: 0, accY: -100});
        });
    }

    // Animated Progress Bars 环形进度条的旋转
    // -----------------------------------------------
    if ($('.knob').length > 0) {
        $('.knob').knob();
    }
};

var MagnificPopup = function () {
    // Magnific popup 图片查看器
    // -----------------------------------------------
    if (($('.popup-img').length > 0) || ($('.popup-iframe').length > 0) || ($('.popup-img-single').length > 0)) {
        $('.popup-img').magnificPopup({
            type: 'image',
            gallery: {enabled: true}
        });
        $('.popup-img-single').magnificPopup({
            type: 'image',
            gallery: {enabled: false}
        });
        $('.popup-iframe').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            preloader: false,
            fixedContentPos: false
        });
    }
};

var fixedHeader = function () {
    // Fixed header
    // -----------------------------------------------
    var	headerTopHeight = $('.header-top').outerHeight(),
        headerHeight = $('header.header.fixed').outerHeight();
    $(window).scroll(function () {
        if (($('.header.fixed').length > 0)) {
            if (($(this).scrollTop() > headerTopHeight + headerHeight) && ($(window).width() > 767)) {
                $('body').addClass('fixed-header-on');
                $('.header.fixed').addClass('animated object-visible fadeInDown');
                if ($('.banner:not(.header-top)').length > 0) {
                    $('.banner').css('marginTop', (headerHeight) + 'px');
                } else if ($('.page-intro').length > 0) {
                    $('.page-intro').css('marginTop', (headerHeight) + 'px');
                } else if ($('.page-top').length > 0) {
                    $('.page-top').css('marginTop', (headerHeight) + 'px');
                } else {
                    $('section.main-container').css('marginTop', (headerHeight) + 'px');
                }
            } else {
                $('body').removeClass('fixed-header-on');
                $('section.main-container').css('marginTop', (0) + 'px');
                $('.banner').css('marginTop', (0) + 'px');
                $('.page-intro').css('marginTop', (0) + 'px');
                $('.page-top').css('marginTop', (0) + 'px');
                $('.header.fixed').removeClass('animated object-visible fadeInDown');
            }
        }
    });
};

var sharePlugin = function () {
    // Sharrre plugin
    // -----------------------------------------------
    if ($('#share').length > 0) {
        $('#share').sharrre({
            share: {
                twitter: true,
                facebook: true,
                googlePlus: true
            },
            template: '<ul class="social-links clearfix"><li class="facebook"><a href="#"><i class="fa fa-facebook"></i></a></li><li class="twitter"><a href="#"><i class="fa fa-twitter"></i></a></li><li class="googleplus"><a href="#"><i class="fa fa-google-plus"></i></a></li></ul>',
            enableHover: false,
            enableTracking: true,
            render: function (api, options) {
                $(api.element).on('click', '.twitter a', function () {
                    api.openPopup('twitter');
                });
                $(api.element).on('click', '.facebook a', function () {
                    api.openPopup('facebook');
                });
                $(api.element).on('click', '.googleplus a', function () {
                    api.openPopup('googlePlus');
                });
            }
        });
    }
};

var	affixPlugin = function () {
        // Affix plugin
		// -----------------------------------------------
    if ($('#affix').length > 0) {
        var affixBottom = $('.footer').outerHeight(true) + $('.subfooter').outerHeight(true) + $('.blogpost footer').outerHeight(true),
            affixTop = $('#affix').offset().top;

        if ($('.comments').length > 0) {
            affixBottom = affixBottom + $('.comments').outerHeight(true);
        }

        if ($('.comments-form').length > 0) {
            affixBottom = affixBottom + $('.comments-form').outerHeight(true);
        }

        if ($('.footer-top').length > 0) {
            affixBottom = affixBottom + $('.footer-top').outerHeight(true);
        }

        if ($('.header.fixed').length > 0) {
            $('#affix').affix({
                offset: {
                    top: affixTop - 150,
                    bottom: affixBottom + 100
                }
            });
        } else {
            $('#affix').affix({
                offset: {
                    top: affixTop - 35,
                    bottom: affixBottom + 100
                }
            });
        }
    }
    if ($('.affix-menu').length > 0) {
        setTimeout(function () {
            var $sideBar = $('.sidebar');

            $sideBar.affix({
                offset: {
                    top: function () {
                        var offsetTop = $sideBar.offset().top;
                        return (this.top = offsetTop - 65);
                    },
                    bottom: function () {
                        var affixBottom = $('.footer').outerHeight(true) + $('.subfooter').outerHeight(true);
                        if ($('.footer-top').length > 0) {
                            affixBottom = affixBottom + $('.footer-top').outerHeight(true);
                        }
                        return (this.bottom = affixBottom + 50);
                    }
                }
            });
        }, 100);
    }
};

var smoothScroll = function () {
    // Smooth Scroll
    // -----------------------------------------------
    if ($('.smooth-scroll').length > 0) {
        if ($('.header.fixed').length > 0) {
            $('.smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll').click(function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({scrollTop: target.offset().top - 65}, 1000);
                        return false;
                    }
                }
            });
        } else {
            $('.smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll').click(function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({scrollTop: target.offset().top}, 1000);
                        return false;
                    }
                }
            });
        }
    }
};
var scrollSpy = function () {
    // Scroll Spy
    // -----------------------------------------------
    if ($('.scrollspy').length > 0) {
        $('body').addClass('scroll-spy');
        if ($('.fixed.header').length > 0) {
            $('body').scrollspy({
                target: '.scrollspy',
                offset: 85
            });
        } else {
            $('body').scrollspy({
                target: '.scrollspy',
                offset: 20
            });
        }
    }
};

var scrollToTop = function () {
    // Scroll totop
    // -----------------------------------------------
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    $('.scrollToTop').click(function () {
        $('body,html').animate({scrollTop: 0}, 800);
    });
};

var Modal = function () {
    // Modal
    // -----------------------------------------------
    // if ($('.modal').length > 0) {
    //     $('.modal').each(function () {
    //         $('.modal').prependTo('body');
    //     });
    // }
};
var pricingTablesPopovers = function () {
    // Pricing tables popovers
    // -----------------------------------------------
    if ($('.pricing-tables').length > 0) {
        $('.plan .pt-popover').popover({trigger: 'hover'});
    }
};
var parallaxSection = function () {
    // Parallax section
    // -----------------------------------------------
    if (($('.parallax').length > 0) && !Modernizr.touch) {
        $('.parallax').parallax('50%', 0.2, false);
    }
};

var removeButton = function () {
    // Remove Button
    // -----------------------------------------------
    $('.btn-remove').click(function () {
        $(this).closest('.remove-data').remove();
    });
};

var shippingCheckbox = function () {
    // Shipping Checkbox
    // -----------------------------------------------
    if ($('#shipping-info-check').is(':checked')) {
        $('#shipping-information').hide();
    }
    $('#shipping-info-check').change(function () {
        if ($(this).is(':checked')) {
            $('#shipping-information').slideToggle();
        } else {
            $('#shipping-information').slideToggle();
        }
    });
};

var allRun = function () {
    Slider();
    OwlCarousel();
    Animations();
    CountTo();
    IsotopeFilters();
    hcTabs();
    animatedProgressBars();
    MagnificPopup();
    sharePlugin();
    affixPlugin();
    smoothScroll();
    scrollSpy();
    Modal();
    pricingTablesPopovers();
    parallaxSection();
    removeButton();
    shippingCheckbox();
};
var runOnce = function(){
    scrollToTop();
    ShowDropdownForDesktopAndMobile();
    fixedHeader();
}
module.exports = {allRun: allRun, runOnce:runOnce};