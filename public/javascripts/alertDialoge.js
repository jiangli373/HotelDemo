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
            $.ajax({
                async:false,
                url:"javascripts/template/alertTemplate.html",
                success:function (data) {
                    var template = Handlebars.compile($(data).html());
                    $(template()).appendTo(_this.$el);
                }
            });
//            this.hidden();
//            this.shown();
            return this;
        },
        events:{
            "click":"close"

        },
        hidden:function(){
           $("#thisalert").modal( {
               show:false
           })
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