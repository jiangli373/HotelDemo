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
        var countryContentView = new countryContentView();
        countryContentView.render().$el.appendTo(hotel.contentEl);
        countryContentView.showDefaultView(param1);
    };

    var countryContentView = Backbone.View.extend({
        tagName:"div",
        className:"container-fluid",
        render:function () {
            $(hotel.contentEl).empty();
            return this;
        },
        showDefaultView:function(param2){
            param2 = param2 || 1;
            var slideBarItemCollection =  new hotel.SlideBarItemCollection();
            slideBarItemCollection.add(new hotel.SlideBarItemModel({title:'Ajax',itemId:'1',currentId:param2}));
            slideBarItemCollection.add(new hotel.SlideBarItemModel({title:'Css3',itemId:'2',currentId:param2}));
            slideBarItemCollection.add(new hotel.SlideBarItemModel({title:'Html5',itemId:'3',currentId:param2}));
            slideBarItemCollection.add(new hotel.SlideBarItemModel({title:'Java',itemId:'4',currentId:param2}));
            slideBarItemCollection.add(new hotel.SlideBarItemModel({title:'JavaScript',itemId:'5',currentId:param2}));
            slideBarItemCollection.add(new hotel.SlideBarItemModel({title:'C',itemId:'6',currentId:param2}));
            slideBarItemCollection.add(new hotel.SlideBarItemModel({title:'C++',itemId:'7',currentId:param2}));
            slideBarItemCollection.add(new hotel.SlideBarItemModel({title:'VC++',itemId:'8',currentId:param2}));
            slideBarItemCollection.add(new hotel.SlideBarItemModel({title:'C#',itemId:'9',currentId:param2}));
            slideBarItemCollection.add(new hotel.SlideBarItemModel({title:'php',itemId:'10',currentId:param2}));
            slideBarItemCollection.add(new hotel.SlideBarItemModel({title:'jsp',itemId:'11',currentId:param2}));
            slideBarItemCollection.add(new hotel.SlideBarItemModel({title:'Mysql',itemId:'12',currentId:param2}));

            var slideBarView =  new hotel.slideBarView();
            slideBarView.render(eval("("+JSON.stringify(slideBarItemCollection)+")")).$el.appendTo(hotel.centerContentEl);
            slideBarView.showDefaultView(param2);
        }


    });


})(hotel);


