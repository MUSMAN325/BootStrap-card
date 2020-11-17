$(document).ready(function(){

    $("#btn").click(function(){
        $.ajax({
            url: 'https://fakestoreapi.com/products',
            method: 'GET',
            success: function(data){
                var apd = '';
                //var i = 0;

                $.each(data, function(key, val){
                   // if(i == 3){
                       // apd += '<br>';
                        //i = 0;
                   // }
                     apd ='<img src="' + val.image + '"  class="rounded-circle"></img>'
                     //+ '<p>' +val.title+'</p>'
                
                     $("div.col-9").append(apd);
                     $("img").addClass("design");
                     // ++i;
                })
                
                
                // $("span").append("RS: 800")
                // $("span").addClass("btn");
                
            }
            

    });
});
});