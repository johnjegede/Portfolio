$(document).ready(function(){

    var $navItems = $(".tablist");
    var $tab = $($navItems).find("li.active");
    var $link = $tab.find('a');
    var $panel = $($link.attr('href'));

    $navItems.on("click",function(e){
        e.preventDefault();
        console.log(e.target);

        var $currlink = $(e.target);
        var id = $($currlink.attr('href'));

        if(id && !$currlink.is('.active'))
        {
            $panel.removeClass('active')
            $tab.removeClass('active')

            $panel = $(id).addClass('active');
            $tab = $currlink.parent().addClass('active');
        }

    });
});