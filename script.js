$(document).ready(function(){

    var $navItems = $(".tablist");
    var $tab = $($navItems).find("li.active");
    var $link = $tab.find('a');
    var $panel = $($link.attr('href'));
    var content;

    $navItems.on("mouseover",function(e){

        var currlink = e.target;
        var id = currlink.getAttribute('href');
        content = "";

        if(id == "#about")
        {
            content = e.target.innerHTML;
            e.target.textContent = "About";
        }else if(id == "#skills")
        {
            content = e.target.innerHTML;
            e.target.textContent = "Skills";
        }else if(id == "#portfolio")
        {
            content = e.target.innerHTML;
            e.target.textContent = "Portfolio";
        }else if(id == "#contact")
        {
            content = e.target.innerHTML;
            e.target.textContent = "Contact";
        }else if(id == "#home")
        {
            content = e.target.innerHTML;
            e.target.textContent = "Home";
        }

     });

     $navItems.on("mouseout",function(e){

        var currlink = e.target;
        var id = currlink.getAttribute('href');
        
        if(id == "#about")
        {
            e.target.innerHTML = content;
        }else if(id == "#skills")
        {
            e.target.innerHTML = content;
        }else if(id == "#portfolio")
        {
            e.target.innerHTML = content;
        }else if(id == "#contact")
        {
            e.target.innerHTML = content;
        }else if(id == "#home")
        {
            e.target.innerHTML = content;
        }

     });



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

    $(".link").each(function(){

    $(this).on("click",function(e){
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

    })
});
});