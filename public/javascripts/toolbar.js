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
    };

    var ToolBarItemModel = Backbone.Model.extend({

    });

    var ToolBarItemCollection = Backbone.Collection.extend({
        model:ToolBarItemModel
    });


    hotel.ToolBarView = Backbone.View.extend({
        tagName:"div",
        className:"navbar navbar-inverse navbar-fixed-top",
        initialize:function(){

        },
        render:function () {
            $(hotel.toolBarEl).empty();
            var collection = new ToolBarItemCollection;
            collection.add(new ToolBarItemModel({title:'文章', command:'countryContent'}));
            collection.add(new ToolBarItemModel({title:'设置', command:'settingContent'}));
            collection.add(new ToolBarItemModel({title:'关于', command:'aboutContent'}));
            var _this = this;
            var template;
            $.ajax({
                async:false,
                url:"javascripts/template/toolBarTemplate.html",
                success:function (data) {
                    template = Handlebars.compile($(data).html());
                    $(template({item:eval("(" + JSON.stringify(collection) + ")")})).appendTo(_this.$el);
                }
            });
            this.delegateEvents();
            return this;
        },
        events:{
            "click ul li a":"showContent"
        },
        showDefaultView:function(command,action,params,flag){
            command =  command || "countryContent";
            if($("ul li").hasClass(command)){
                $("."+command).children("a").trigger("click");
                if(flag){

                    if(action!=undefined&&action!=''){
                        self.location="#"+command+"/"+action+"/"+params;
                    }else{
                        self.location="#"+command;
                    }

                }

            }

        },

        showContent:function (e) {
            $(e.target).parent().parent().children("li").removeClass("active");
            $(e.target).parent().addClass("active");
        }
    });

})(hotel);