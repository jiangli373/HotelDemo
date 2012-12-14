/**
 * 认证和授权
 * User: marshal marshal.wu@gmail.com
 * Date: 12-12-10
 * Time: 上午10:02
 */
(function (hotel) {
    var LoginView = Backbone.View.extend({
        tagName:"div",
        className:"modal hide fade",
        "id":"loginDialog",
        count:0,
        attributes:{
            "tabindex":"-1",
            "role":"dialog",
            "aria-labelledby":"myModalLabel",
            "aria-hidden":"true"
        },
        render:function () {
            var _this = this;
            $.ajax({
                async:false,
                url:"javascripts/template/loginTemplate.html",
                success:function(data){
                    var template = Handlebars.compile($(data).html());
                    $(template()).appendTo(_this.$el);
                }
            });
            this.delegateEvents(this.events);
            return this;
        },
        events:{
            'click .bt_login':'login'
        },

        login:function () {
            var view = this;
            hotel.auth.userName = $("#inputUserName").val();
            this.count++;

            var socket = io.connect("?userName=" + hotel.auth.userName,{'force new connection':true});

            socket.on('disconnect', function () {
                $("#alertDialog").modal('show');
                console.log('socket disconnect');
            });

            socket.on('error', function () {
                $(".alert").fadeIn("slow");
                console.log('socket io error');
                return false;
            });
            socket.on('connect', function () {
                console.log('login ok.');
                $("#alertDialog").modal('hide');
                $("#loginDialog").modal('hide');
                view.forward();
            });
        },
        forward:function () {
            var anchor = location.href.split('#')[1];
            anchor = anchor || '';
            var command = anchor.split('/')[0];
            var params = anchor.substring(command.length + 1);
            hotel.router.doCommand(command, params,0);
        }
    });

    hotel.auth = {
        isLogin:function () {
            return this.userName != null;
        },
        hasAuth:function (command) {
            return true;
        },
        showLoginView:function () {
            new LoginView().render().$el.modal({
                show:true
            });
        }
    };

    console.log('auth component loaded');
})(hotel);