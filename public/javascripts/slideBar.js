/**
 * Created with JetBrains WebStorm.
 * User: jiangli
 * Date: 12-12-13
 * Time: 下午2:29
 * To change this template use File | Settings | File Templates.
 */

(function (hotel) {

    hotel.commands.slideBar = function (param1, param2, param3) {

        console.log('load content, param1:' + param1 + ' ,param2: ' + param2 + ' ,param3:' + param3);
        new slideBarView().render().$el.appendTo(hotel.centerContentEl);
        hotel.router.doCommand("centerContent", "", 2);
    };

    var slideBarView = Backbone.View.extend({
        tagName:"div",
        className:"span3",
        render:function () {

            var _this = this;
            $.ajax({
                async:false,
                url:"javascripts/template/slideBarTemplate.html",
                success:function (data) {
                    var template = Handlebars.compile($(data).html());
                    $(template()).appendTo(_this.$el);
                }
            });
            return this;
        },
        events:{
            "click li":"showSlibarDetail"
        },
        showSlibarDetail:function (e) {
            $(e.target).parent().parent().children("li").removeClass("active");
            $(e.target).parent().addClass("active");
            hotel.router.doCommand("centerContent", "", 2);
        }
    });


})(hotel);


