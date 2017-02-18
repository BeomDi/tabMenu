'use strict';
function TabMenu(options) {
    this.init(options);
    this.initEvent();
}
// 대문자로 시작하면 클래스
// 변수를 만들때 this를 앞에 붙임
TabMenu.prototype = {

    // 구조 정리
    init: function (opt) {
        this.opt = opt;
        this.$tabMenu = $(this.opt.selector).find('.tab_menu li');
        this.$tabContents = $(this.opt.selector).find('.tab_contents li');
        this.oldIndex = null;
        this.currentIndex = 0;
    },

    // 시작하자마자 실행할 이벤트들
    initEvent: function () {
        var _this = this; //this는 탭메뉴라는 클래스

        this.$tabMenu.on('click', function () {
            _this.renewIndex( $(this) );
            _this.toggleMenu( $(this) );
            _this.toggleContent();
        });
    },

    // 번호 갱신 기능
    renewIndex: function ($this) {
        this.oldIndex = this.currentIndex;
        this.currentIndex = $this.index();
    },

    // 메뉴 변경 기능
    toggleMenu: function ($this) {
        this.$tabMenu.not($this).removeClass('active');
        $this.addClass('active');
    },

    // 이미지 변경 기능
    toggleContent: function () {
      var duration = 0;

      if (this.opt.fade === true) {
          // duration = this.opt.duration ? this.opt.duration : 800;

          if (this.opt.duration === true) {
              duration = this.opt.duration;
          } else {
              duration = 800;
          }
      }

      this.$tabContents.eq(this.oldIndex).stop(false, true).fadeOut(duration);
      this.$tabContents.eq(this.currentIndex).stop(false, true). fadeIn(duration);
    }
};