var BeerApp = BeerApp || {};

BeerApp.productDetail = (function () {
    //beerApp product detail page related scripting 

    var pdp = {};

    // product detail page initialisation
    pdp.init = function () {
        
        //load ko
        BeerApp.ProductDetailKo.init();
    }

    return pdp
})()

$(function () {
    let el = document.getElementsByClassName('page-product-detail')

    //check page in product detail page with unique class in body
    if (!el)
        return;

    BeerApp.productDetail.init();
});