angular.module('ecommerce').component('product', {
    templateUrl:'app/components/product/product.html',
    controller:function(){

        this.addItem = function(){
            // cartSrvc.addItem(this.product);
        }




        // this.product = {
        //     name:'Shirt',
        //     imageUrl:'http://scene7.zumiez.com/is/image/zumiez/pdp_hero/Zine-2nd-Inning-Heather-Grey-%26-Marled-Red-Baseball-Shirt-_225749-front.jpg',
        //     description:'These stylish shoes are great for throwing at people.  Holding pencils.  Also could be worn on feet.',
        //     price:15
        // }

    },
    controllerAs:'pd',
    bindings:{
        product:"<", // < one way binding, = two way binding, @ string binding and & action binding
        buttonLabel:"@",
        buttonAction:"&"
    }
})





// You could bring in the controller from a controller function or you can create it directly in the component folder as seen here