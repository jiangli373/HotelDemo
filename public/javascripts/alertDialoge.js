/**
 * Created with JetBrains WebStorm.
 * User: jiangli
 * Date: 12-12-13
 * Time: 下午2:10
 * To change this template use File | Settings | File Templates.
 */

(function (hotel) {

    hotel.AlertDialogeView = Backbone.View.extend({
        tagName:"div",
        className:"modal in fade",
        id:"thisalert",
        attributes:{
            "tabindex":"1",
            "role":"dialog",
            "aria-hidden":"true"
        },
        render:function () {
            var _this = this;
            var template = Handlebars.compile($("#alertDialoge").html());
            $(template()).appendTo(_this.$el);
            return this;
        },
        events:{
            "click":"close"

        },
        hidden:function(){
           $("#thisalert").modal('hide');
        },
        shown:function(){
            $("#thisalert").modal( {
                show:true
            })
        },
        close:function(){
            return false;
        }
    });

})(hotel);