/**
 * Created with JetBrains WebStorm.
 * User: jiangli
 * Date: 12-12-13
 * Time: 下午2:29
 * To change this template use File | Settings | File Templates.
 */

(function (hotel) {

    hotel.commands.centerContent = function (param1, param2, param3) {
        console.log('load content, param1:' + param1 + ' ,param2: ' + param2 + ' ,param3:' + param3);
        new hotel.centerContentView().render(param1).$el.appendTo(hotel.centerContentEl);
    };


    var ItemModel  = Backbone.Model.extend({
        defaults: {
            title : "ajax",
            content : "什么是 AJAX？AJAX = Asynchronous JavaScript and XML."
                +"AJAX 是一种创建快速动态网页的技术。AJAX 通过在后台与服务器交换少量数据的方式，允许网页进行异步更新。这意味着有可能在不重载整个页面的情况下，对网页的一部分进行更新。"
                +"您可以在我们的 AJAX 教程 中学习更多有关 AJAX 的知识。"
        }
    });


    hotel.centerContentView = Backbone.View.extend({
        tagName:"div",
        className:"span9",
        render:function (param1) {
            $(hotel.middleContentEl).remove();
            var _this = this;
            _this.model =  new ItemModel();
            _this.model.set("_id",param1);
            $.ajax({
                async:false,
                url:"javascripts/template/centerContenTemplate.html",
                success:function (data) {
                    var template = Handlebars.compile($(data).html());
                    $(template(_this.model.toJSON())).appendTo(_this.$el);
                }
            });
            return this;
        }
    });

})(hotel);


