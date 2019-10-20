
(function() {
    let app = getApp();
    app.Component({
        comName: 'swiper',
        properties: {
            data: {
                type: Array,
                value: []
            },
            swiperid: {
                type: String,
                value: ''
            }
        },
        data: {},
        ready: function() {
			console.log('加载成功54');
			this.start();
        },
        methods: {

            start: function() {
				let _this = this;
                require(app.config.staticPath + 'plugins/swiper/swiper.js');
                register('Swiper', () => {
                    let swiperid = '#' + _this.getData().swiperid,
                        pagination = swiperid + ' .pagination';
					console.log(swiperid);
					console.log(_this.getData().data);
                    let mySwiper = new Swiper(swiperid, {
                        pagination: pagination,
                        grabCursor: true,
                        resizeReInit: true,
                        slidesPerView: 1,
                        calculateHeight: true,
                        watchActiveIndex: true,
                        autoplay: 3500,
                        mode: 'horizontal',
                        loop: true
                    });
                });
            }
        }
    });
})();