/**
 * Created with JetBrains WebStorm.
 * User: jiangli
 * Date: 12-12-13
 * Time: 下午2:29
 * To change this template use File | Settings | File Templates.
 */

(function (hotel) {

    hotel.commands.hotelContent = function (param1, param2, param3) {
        console.log('load content, param1:' + param1 + ' ,param2: ' + param2 + ' ,param3:' + param3);
        new hotelContentView().render().$el.appendTo(hotel.contentEl);
    };

    var hotelContentView = Backbone.View.extend({
        tagName:"div",
        className:"container",
        render:function () {
            var _this = this;
            $.ajax({
                async:false,
                url:"javascripts/template/indextemplate.html",
                success:function (data) {
                    var template = Handlebars.compile($(data).html());
                    $(template()).appendTo(_this.$el);
                }
            });
            return this;
        }
    });
})(hotel);


