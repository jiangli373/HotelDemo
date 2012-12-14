/**
 * Created with JetBrains WebStorm.
 * User: jiangli
 * Date: 12-12-13
 * Time: 下午2:29
 * To change this template use File | Settings | File Templates.
 */

(function (hotel) {

    hotel.commands.countryContent = function (param1, param2, param3) {
        console.log('load content, param1:' + param1 + ' ,param2: ' + param2 + ' ,param3:' + param3);
        new countryContentView().render().$el.appendTo(hotel.contentEl);
        hotel.router.doCommand("slideBar", "",1);
    };

    var countryContentView = Backbone.View.extend({
        tagName:"div",
        className:"container-fluid",
        render:function () {
            return this;
        }
    });


})(hotel);


