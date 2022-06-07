var myModal = document.getElementById('exampleModal')
var myInput = document.getElementById('add')

$.get("http://localhost:3000/wines", function (data) {
  console.log(data)
  for (let i = 0; i < data['message'].length; i++) {
    let id = data['message'][i]._id.substring(14)//ovo za brisanje
    $(".wines").append('<div class="col-md-6 col-lg-4 col-xl-3"> <div id="product-1" class="single-product" style="background: url("' + [data['message'][i].imageUrl] + '") no-repeat center;background-size: cover;"> <div class="part-1"> <span class="discount">' + data['message'][i].year + "    " + "Type:  " + data['message'][i].type + '</span> <ul> <li><a href="#"><i class="fas fa-trash" id="delete" data-bs-toggle="modal" data-bs-target="#editModal"></i></a></li> </ul> </div> <div class="part-2"> <h3 class="product-title">' + data['message'][i].name + '</h3> <h4 class="product-price">' + data['message'][i].price + "$" + '</h4> <h5 class="product-price">' + "ABV: " + data['message'][i].ABV + "%" + '</h5> <h6 class="product-price">' + "Color: " + data['message'][i].color + '</h6> <h6 class="product-price">' + "Country: " + data['message'][i].country + '</h6> <h6 class="product-price">' + "Size: " + data['message'][i].size +"     mil"+'</h6></div> </div> </div>')
  }
});