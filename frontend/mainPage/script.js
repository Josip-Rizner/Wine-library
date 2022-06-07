var myModal = document.getElementById('exampleModal')
var myInput = document.getElementById('add')

$.get("http://localhost:3000/wines", function (data) {
  //let json = JSON.parse(data);
  console.log(data)
  for (let i = 0; i < data['message'].length; i++) {
    
    $(".wines").append('<div class="col-md-6 col-lg-4 col-xl-3"> <div id="product-1" class="single-product" style="background: url("'+[data['message'][i].imageUrl]+'") no-repeat center;background-size: cover;"> <div class="part-1"> <ul> <li><a href="#"><i class="fas fa-trash" id="edit" data-bs-toggle="modal" data-bs-target="#editModal"></i></a></li> </ul> </div> <div class="part-2"> <h3 class="product-title">'+data['message'][i].name+'</h3> <h4 class="product-old-price">$71.99</h4> <h4 class="product-price">Something from database</h4> </div> </div> </div>')
  }
});