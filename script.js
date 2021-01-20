$(document).ready(function(){

    var $navItems = $(".tablist");
    var $tab = $($navItems).find("li.active");
    var $link = $tab.find('a');
    var $panel = $($link.attr('href'));
    var content;

    $navItems.on("mouseover",function(e){

        var currlink = e.target;
        var id = currlink.getAttribute('href');
        

        if(id == "#about")
        {
            content = e.target.textContent;
            console.log(e.target.textContent);
            e.target.textContent = "About";
        }else if(id == "#skills")
        {
            e.target.textContent = "Skills";
        }else if(id == "#portfolio")
        {
            e.target.textContent = "Portfolio";
        }else if(id == "#contact")
        {
            e.target.textContent = "Contact";
        }

     });

     $navItems.on("mousemove",function(e){

        var currlink = e.target;
        var id = currlink.getAttribute('href');
        

        if(id == "#about")
        {
            //content = e.target.textContent;
            e.target.textContent = content;
        }else if(id == "#skills")
        {
            //e.target.textContent = "Skills";
        }else if(id == "#portfolio")
        {
            //e.target.textContent = "Portfolio";
        }else if(id == "#contact")
        {
            //e.target.textContent = "Contact";
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
});