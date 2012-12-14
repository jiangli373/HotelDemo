/**
 * Created with JetBrains WebStorm.
 * User: jiangli
 * Date: 12-12-13
 * Time: 下午2:29
 * To change this template use File | Settings | File Templates.
 */

(function (hotel) {

    hotel.commands.settingContent = function (param1, param2, param3) {
        console.log('load content, param1:' + param1 + ' ,param2: ' + param2 + ' ,param3:' + param3);
        new settingContentView().render().$el.appendTo(hotel.contentEl);
    };

    var settingContentView = Backbone.View.extend({
        tagName:"div",
        className:"container",
        render:function () {
            var _this = this;
            $.ajax({
                async:false,
                url:"javascripts/template/settingTemplate.html",
                success:function (data) {
                    var template = Handlebars.compile($(data).html());
                    $(template()).appendTo(_this.$el);
                }
            });
            return this;
        },
        events:{
            "click .saveInfo":"saveInfo"
        },
        saveInfo:function(){
            hotel.router.doCommand("countryContent", "", 0);
        }
    });


})(hotel);


