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
            ':command/*params':'doCommand',
            '':'doCommand'
        },
        doCommand:function (command, params, flag) {
            command = command || 'toolbar';//设置默认command
            params = params || '';//设置默认params
            switch (flag) {
                case 0:
                    $(hotel.contentEl).empty();
                    break;
                case 1:
                    $(hotel.centerContentEl).empty();
                    break;
                case 2:
                 $(hotel.middleContentEl).remove();
                    break;
                default :
                    break;
            }

            console.log('do command:' + command);

            if (hotel.auth.isLogin() && hotel.auth.hasAuth(command)) {
                console.log('has auth');

                if (hotel.commands[command]) {
                    var paramArray = [];
                    if (params !== '') {
                        paramArray = params.split('/')
                    }
                    hotel.commands[command].apply(null, paramArray);
                }
            } else {
                hotel.auth.showLoginView();
            }
        }
    });
    hotel.router = new HotelAppRouter();
})(hotel);

