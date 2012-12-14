/**
 * Created with JetBrains WebStorm.
 * User: jiangli
 * Date: 12-12-13
 * Time: 下午2:10
 * To change this template use File | Settings | File Templates.
 */

(function (hotel) {

    hotel.commands.toolbar = function (param1, param2, param3) {
        console.log('load content, param1:' + param1 + ' ,param2: ' + param2 + ' ,param3:' + param3);
        new ToolBarView().render().$el.appendTo(hotel.toolBarEl);
    };

    var ToolBarView = Backbone.View.extend({
        tagName:"div",
        className:"navbar navbar-inverse navbar-fixed-top",
        render:function () {
            var _this = this;
            $.ajax({
                async:false,
                url:"javascripts/template/toolBarTemplate.html",
                success:function (data) {
                    var template = Handlebars.compile($(data).html());
                    $(template()).appendTo(_this.$el);
                    hotel.router.doCommand("countryContent", "", 0);
                }
            });
            return this;
        },
        events:{
            "click ul li":"showContent"
        },
        showContent:function (e) {
            $(e.target).parent().parent().children("li").removeClass("active");
            $(e.target).parent().addClass("active");

            if ($(e.target).parent().hasClass("countryname")) {

                hotel.router.doCommand("countryContent", "", 0);

            } else if ($(e.target).parent().hasClass("setting")) {

                hotel.router.doCommand("settingContent", "", 0);

            }  else if ($(e.target).parent().hasClass("about")) {

                hotel.router.doCommand("aboutContent", "", 0);

            }
        }
    });

})(hotel);