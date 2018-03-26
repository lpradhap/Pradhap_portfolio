var BeerApp = BeerApp || {};

BeerApp.ProductDetailKo = (function () {
    //loader show
    BeerApp.UI.loader.show();

    var dev = {}

    dev.default = {
        _Style: 1
    }

    dev.init = function () {

        function OrderProductDetailViewModel() {
            var self = this;

            //declare observables
            self.beerStyles = ko.observableArray([]);
            self.beer = ko.observableArray([]);
            self.currentProduct = ko.observable("");
            self.styleOnCollection = ko.observableArray([dev.default._Style]);
            self.ProductactiveId = ko.observable('');
            //range slider filters
            self.abvMaxFilter = ko.observable("67.5");
            self.abvMinFilter = ko.observable("0");
            self.ibuMaxFilter = ko.observable("100");
            self.ibuMinFilter = ko.observable("0");

            //Set Current Product
            self.setCurrent = function (current) {
                self.ProductactiveId(current.id)
                self.currentProduct(current)
            };


            //filter the beer data with the filers
            self.beerFilter = ko.computed(function () {

                var filterProducts = [];
                ko.utils.arrayForEach(self.beer(), function (item) {

                    if (parseFloat(item.abv) > parseFloat(self.abvMinFilter()) &&
                        parseFloat(item.abv) < parseFloat(self.abvMaxFilter()) &&
                        parseFloat(item.ibu) > parseFloat(self.ibuMinFilter()) &&
                        parseFloat(item.ibu) < parseFloat(self.ibuMaxFilter())) {
                        filterProducts.push(item)
                    }
                });

                return filterProducts;
            })

            //update style click and udpate beer information
            self.updatStyle = function (el, event) {
                var fetchData = true;

                //check style information already populated
                ko.utils.arrayForEach(self.styleOnCollection(),
                    function (item) {
                        if (el.id === item) {

                            //remove style information from beer observable
                            self.beer.remove(function (item) {
                                return item.style.id == el.id;
                            });

                            //clear active product information
                            self.currentProduct(null);
                            self.ProductactiveId(null)

                            //disable fetching data
                            fetchData = false;
                        }
                    });

                //fetch data only if  fetchData is true
                if (fetchData) {
                    //loader show
                    BeerApp.UI.loader.show();

                    //clear active product information
                    self.currentProduct(null);
                    self.ProductactiveId(null)

                    //add to style populated it collection
                    self.styleOnCollection.push(el.id)

                    //send selected new style id to getbeer information
                    self.getBeer(el.id);
                } else {
                    //remove style populated collection with selected
                    self.styleOnCollection.remove(el.id)
                }

                return false;

            }

            //get inital styles
            $.getJSON(BeerApp.Config.info.baseUrl + "styles/?" + "key=" + BeerApp.Config.info.key + "&format=json", function (response) {
                //bind observable
                self.beerStyles(response.data);

                //execute rangeSlider
                BeerApp.UI.rangeSlider();

            })

            // get beer 
            self.getBeer = function (val) {
                //if value passe, then its a click event of radio buttons if undefined then its a initiation function
                var styleId = val ? val : dev.default._Style;

                $.getJSON(BeerApp.Config.info.baseUrl + "beers?styleId=" + styleId + "&" + "key=" + BeerApp.Config.info.key + "&format=json", function (response) {
                    ko.utils.arrayPushAll(self.beer, response.data)


                    //hide loader
                    BeerApp.UI.loader.hide();
                })
            }

            //check if style is active
            self.findActiveStyle = function (el) {
                let status = ko.utils.arrayFirst(self.styleOnCollection(),
                    function (item) {
                        return el.id === item;
                    });
                return status
            }

            //get initial beer information
            self.getBeer();
        }

        //binding knockout to page
        var el = document.getElementById('product-detail')
        var viewModel = new OrderProductDetailViewModel();
        ko.applyBindings(viewModel, el);

    }

    return dev;

})();