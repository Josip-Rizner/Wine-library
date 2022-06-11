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
  })
  $.get("http://localhost:3000/wines", function (data) {
    dataForUse = data;

    for (let i = 0; i < data['message'].length; i++) {

      $(".wines").append('<div class="col-md-6 col-lg-4 col-xl-3"> <div id="product-1" class="single-product" style="background: url(' + [data['message'][i].imageUrl] + ') no-repeat center; width: auto;"> <div class="part-1"> <span class="discount">'+ "Name:  " + data['message'][i].name + '</span> <ul> <li><a href="#"><i class="fas fa-trash" id="delete" data-bs-toggle="modal" data-bs-target="#deleteModal"></i></a></li> <li><a href="#" class="detalji" id="' + data['message'][i]._id + '"><i class="fa fa-bars" id="details"></i></a></li> </ul> </div> <div class="part-2"> <h3 class="product-title mt-5">' + data['message'][i].price +"$" +  '</h3> <h4 class="product-price">' + data['message'][i].type +'</h4> <h5 class="product-price"></div> </div> </div>')
    }
  });
})