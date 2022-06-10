$(function () {
  let dataForUse;
  $(document).on("click", ".detalji", function () {
    for (let i = 0; i < dataForUse['message'].length; i++) {
      let id = dataForUse['message'][i]._id
      if (id == $(this).get(0).id) {
        $("#name").val(dataForUse['message'][i].name)
        $("#imageUrl").val(dataForUse['message'][i].imageUrl)
        $("#country").val(dataForUse['message'][i].country)
        $("#year").val(dataForUse['message'][i].year)
        $("#type").val(dataForUse['message'][i].type)
        $("#aBV").val(dataForUse['message'][i].ABV)
        $("#color").val(dataForUse['message'][i].color)
        $("#size").val(dataForUse['message'][i].size)
        $("#price").val(dataForUse['message'][i].price)
        $("#description").val(dataForUse['message'][i].description)
        $('#detailModal').modal('show')
      }
    }
    console.log($(this).get(0).id)
  })
  $.get("http://localhost:3000/wines", function (data) {
    dataForUse = data;

    for (let i = 0; i < data['message'].length; i++) {

      $(".wines").append('<div class="col-md-6 col-lg-4 col-xl-3"> <div id="product-1" class="single-product" style="background: url(' + [data['message'][i].imageUrl] + ') no-repeat center; width: auto;"> <div class="part-1"> <span class="discount">' + data['message'][i].year + "    " + "Type:  " + data['message'][i].type + '</span> <ul> <li><a href="#"><i class="fas fa-trash" id="delete" data-bs-toggle="modal" data-bs-target="#deleteModal"></i></a></li> <li><a href="#" class="detalji" id="' + data['message'][i]._id + '"><i class="fa fa-bars" id="details"></i></a></li> </ul> </div> <div class="part-2"> <h3 class="product-title">' + data['message'][i].name + '</h3> <h4 class="product-price">' + data['message'][i].price + "$" + '</h4> <h5 class="product-price">' + "ABV: " + data['message'][i].ABV + "%" + '</h5> <h6 class="product-price">' + "Color: " + data['message'][i].color + '</h6> <h6 class="product-price">' + "Country: " + data['message'][i].country + '</h6> <h6 class="product-price">' + "Size: " + data['message'][i].size + "     mil" + '</h6></div> </div> </div>')
    }
  });
})