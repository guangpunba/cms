/**
 * Created by aa on 2014/9/23.
 */
$(function(){
    var Pli = $('.leftsidebar-nav > li > a'); //一级菜单标签
    var submenu = $('.submenu'); //二级菜单UL
    var Cli = $('.submenu > li'); //二级菜单li
    Pli.bind('click',function(){
        var $this = $(this).parent(); //获取一级菜单LI
        var len = $this.children().length; //len大于1说明有子菜单
        if(len > 1){
            if($this.find(submenu).is(':visible')){
                submenu.slideUp();
                return;
            }
            submenu.slideUp();
            $this.find(submenu).slideDown();
        }else{
            submenu.slideUp();
            $this.addClass('active').siblings('li').removeClass('active');
            Cli.removeClass('active');
        }
    })
    //子菜单
    Cli.bind('click',function(){
        Cli.removeClass('active');
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parent().parent().addClass('active').siblings().removeClass('active');
    })
})