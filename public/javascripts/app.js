/**
 * 应用入口
 * User: marshal marshal.wu@gmail.com
 * Date: 12-12-6
 * Time: 下午3:26
 */
(function (hotel) {
    var HotelAppRouter = Backbone.Router.extend({
        routes:{
            ':command':'doCommand',
            ':command/:params':'doCommand',
            '':'doCommand',
            ':command/:action/:params':'doCommand'
        },

        showHeader:function (command, params) {
            var paramArray = [];
            if (params !== '' && params !== undefined) {
                paramArray = params.split('/');
//                paramArray[0] = params.split('/')[0];
//                 params = params.substring(command.length + 1);
            }
            console.log("paramArray[0]>>>>>>>>>>>" + paramArray[0]);
            this.doCommand(command, paramArray[0], paramArray[1], true);
        },

        doCommand:function (command, action, params, flag) {
            console.log("command>>>>>>>>>>>" + command);
            console.log("action>>>>>>>>>>>" + action);
            console.log("flag>>>>>>>>>>>" + flag);
            console.log("params>>>>>>>>>>>" + params);
            flag = flag || false;

            if (hotel.auth.isLogin() && hotel.auth.hasAuth(command)) {
                hotel.toolBarView = new hotel.ToolBarView();
                hotel.toolBarView.render().$el.appendTo(hotel.toolBarEl);
                hotel.toolBarView.showDefaultView(command, action,params, flag);

                var paramArray = [];
                if (params !== '' && params !== undefined) {
                    paramArray = params.split('/');
                }

                if (command != undefined && command != '' && action == undefined) {

                    hotel.commands[command].apply(null, paramArray);

                } else if (command != undefined && action != undefined) {
                    if (flag) {
                        hotel.commands[command].apply(null, paramArray);
                    } else {
                        hotel.commands[command].apply(null, paramArray);
                    }
                }
            } else {
                hotel.auth.showLoginView();
            }
        }
    });
    hotel.router = new HotelAppRouter();
})(hotel);

