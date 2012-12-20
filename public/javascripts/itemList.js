/**
 * Created with JetBrains WebStorm.
 * User: jiangli
 * Date: 12-12-13
 * Time: 下午2:29
 * To change this template use File | Settings | File Templates.
 */

(function (hotel) {

    hotel.commands.itemList = function (param1, param2, param3) {

        console.log('load content, param1:' + param1 + ' ,param2: ' + param2 + ' ,param3:' + param3);

    };

    hotel.SlideBarItemModel = Backbone.Model.extend({

    });

    hotel.SlideBarItemCollection = Backbone.Collection.extend({
        model:hotel.SlideBarItemModel
    });


    hotel.slideBarView = Backbone.View.extend({
        tagName:"div",
        className:"span3",
        render:function (slideBarItemCollection) {
            var _this = this;
            $.ajax({
                async:false,
                url:"javascripts/template/slideBarTemplate.html",
                success:function (data) {
                    var template = Handlebars.compile($(data).html());
                    Handlebars.registerHelper('ifCond', function (v1, v2, options) {
                        var a1 = parseInt(v1);
                        var a2 = parseInt(v2);

                        if (a1 == a2) {
                            return options.fn(this);
                        }
                        return options.inverse(this);
                    });
                    $(template({item:slideBarItemCollection})).appendTo(_this.$el);
                }
            });
            this.delegateEvents();
            return this;
        },
        events:{
            "click li":"showSlibarDetail"
        },

        showDefaultView:function (param) {
            new hotel.centerContentView().render(param).$el.appendTo(hotel.centerContentEl);
        },
        showSlibarDetail:function (e) {
            $(e.target).parent().parent().children("li").removeClass("active");
            $(e.target).parent().addClass("active");
        }
    });


})(hotel);


