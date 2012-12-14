/**
 * 内容管理
 * User: marshal marshal.wu@gmail.com
 * Date: 12-12-10
 * Time: 下午3:23
 */
(function (hotel) {

    hotel.commands.content=function(param1,param2,param3){
        console.log('load content, param1:'+param1+' ,param2: '+param2+' ,param3:'+param3);
        new ContentView().render().$el.appendTo(hotel.contentEl);
    };

    var ContentView=Backbone.View.extend({
        render:function(){
            var _this = this;
            $.ajax({
                async:false,
                url:"javascripts/template/contenTemplate.html",
                success:function(data){
                    var template = Handlebars.compile($(data).html());//TODO 改为ajax同步加载
                    $(template()).appendTo(_this.$el);
                }
            });
            return this;
        }
    });

})(hotel);