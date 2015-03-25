
//artDialog 配置项

(function (config) {
    config['lock'] = true; //锁屏
    config['fixed'] = true;  //开启静止定位
    config['title'] = '提示框';
    config['okVal'] = '确认';
    config['cancelVal'] = '取消';
    config['width'] = 300;
    config['height'] = 120;
    config['background'] = '#666666';
    // [more..]
})(art.dialog.defaults);


function showdiv(msg){
    window.parent.art.dialog({
        content: msg,
        ok: function () {
            this.title('3秒后自动关闭').time(3);
            return false;
        },
        cancelVal: '关闭',
        cancel: true //为true等价于function(){}
    });
}