$(function() { 
    $(document).ready(function() {  
    $.getJSON("../src/data/products.json", function(data){
    var product_data= '';
    $.each(data, function(key, value){
   //console.log(value.rating);
    product_data += '<div class="box">';
    product_data += '<a href="'+ value.url+'">';
    product_data += '<div><img class="product-image" src=" '+ value.picture+'"/></div>';
    if(!value.isFav){
        product_data += '<div style="color:green;" class="heart">&#x2764;</div>'; 
    }
    else if(value.isFav){
        product_data += '<div style="color:red;" class="heart">&#x2764;</div>';  
    }
    product_data += '<div class="productDetails">';
    product_data += '<div class="pname">'+ value.name +'</div>';
    if(value.rating === 5){
        product_data += '<div class="rating">'+value.size +' <span class="star">&#x2605; &#x2605; &#x2605; &#x2605; &#x2605;<span></div>'
    }
    else if(value.rating === 4){
        product_data += '<div class="rating">'+value.size +'  <span class="star"> &#x2605; &#x2605; &#x2605; &#x2605;<span></div>'
    }
    else if(value.rating === 3){
        product_data += '<div class="rating">'+value.size +'  <span class="star"> &#x2605; &#x2605; &#x2605; <span></div>'
    }
    else if(value.rating === 2){
        product_data += '<div class="rating">'+value.size +'  <span class="star"> &#x2605; &#x2605; <span></div>';  
    }
    else if(value.rating === 1){
        product_data += '<div class="rating">'+value.size +'  <span class="star"> &#x2605; <span></div>'
   
    }
    if(value.oldPrice && value.savings){
    product_data += '<div><span class="price">'+ value.price +'</span> <span class="oldprice">'+ value.oldPrice+'</span><span class="saving">You Save  ' + value.savings+'</span></div>';
}
else{
    product_data += '<div><span class="price">'+ value.price +'</span> <span class="saving">You Save  0 </span></div>';

}
 
    product_data += '</div>';
    product_data += '</a>';
    product_data += '</div>'; 
    });
    $('#productsList').append(product_data);
     }); 
  });
});
