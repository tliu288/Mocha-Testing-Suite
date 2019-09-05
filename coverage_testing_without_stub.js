  var assert=require('assert');
  var fn= require('./newPurchaseOrder.js');
  var inventory=[];
  var inventoryThreshold;
  
describe("Decision Mate20 Testing",function() {
 
 var clientAccount={age:0,balance:0,creditScore:0};
 before(function (){ 
 inventory=[ // Courses Arrays
 [{name:"iPhone",productQuantity:1},{name:"iPhoneX",productQuantity:2},
 {name:"Sumsang",productQuantity:5}],
 [{name:"Huawei",productQuantty:4},{name:"Mate20",productQuantity:7},
 {name:"Mi",productQuantity:100}],
 [{name:"Nokia",productQuantity:20}],
 
 ];
 });
 
after(function () { });

   var inventoryArray=[];
    before(function(){ 
  inventoryArray=[ 
 [{name:"iPhone",productQuantity:1},{name:"iPhoneX",productQuantity:2},
 {name:"Samsung",productQuantity:200}],
 [{name:"Huawei",productQuantty:4},
 {name:"Mate20",productQuantity:500},
 {name:"Mi",productQuantity:100}],
 [{name:"Nokia",productQuantity:20}],]});
 after(function(){});

    // ACCEPTED

    it.only("Account Status=very good Others=Don't Samsunge ---> accepted",function() {
       var AGE=90;
       var BALANCE=15000
       var CREDITSCORE=100;
       var clientAccount2={age:AGE,balance:BALANCE,creditScore:CREDITSCORE}
      var inventory2=[{name:"Mate20",productQuantity:0}]; 
       assert.equal(fn.orderHandling(clientAccount2,"Mate20",inventory2,200,"restricted"),"accepted");
   });

    it.only("Account Status=very good Others=Don't Samsunge ---> accepted",function() {
        var AGE=12;
        var BALANCE=15000;
        var CREDITSCORE=100;
        var clientAccount2={age:AGE,balance:BALANCE,creditScore:CREDITSCORE}
        var inventory2=[{name:"Mate20",productQuantity:0}];
        assert.equal(fn.orderHandling(clientAccount2,"Mate20",inventory2,200,"restricted"),"accepted");
    });

    it.only("Account Status=very good Others=Don't Samsunge ---> accepted",function() {
        var AGE=12;
        var BALANCE=40000;
        var CREDITSCORE=100;
        var clientAccount2={age:AGE,balance:BALANCE,creditScore:CREDITSCORE}
        var inventory2=[{name:"Mate20",productQuantity:0}];
        assert.equal(fn.orderHandling(clientAccount2,"Mate20",inventory2,200,"restricted"),"accepted");
    });

    it.only("Account Status=fair, creditStatus=good, productStatus=available ---> accepted",function() {
        var AGE=19;
        var BALANCE=101
        var CREDITSCORE=100;
        var clientAccount2={age:AGE,balance:BALANCE,creditScore:CREDITSCORE}
        var inventory2=[{name:"Mate20",productQuantity:200}];
        assert.equal(fn.orderHandling(clientAccount2,"Mate20",inventory2,200,"default"),"accepted");
    });

    it.only("Account Status=fair, creditStatus=good, productStatus=available ---> accepted",function() {
        var AGE=19;
        var BALANCE=101
        var CREDITSCORE=0;
        var clientAccount2={age:AGE,balance:BALANCE,creditScore:CREDITSCORE}
        var inventory2=[{name:"Mate20",productQuantity:200}];
        assert.equal(fn.orderHandling(clientAccount2,"Mate20",inventory2,200,"default"),"underReview");
    });


    it.only("Account Status=poor, creditStatus=good, productStatus=available ---> accepted",function() {
        var AGE=7;
        var BALANCE=10;
        var CREDITSCORE=100;
        var clientAccount2={age:AGE,balance:BALANCE,creditScore:CREDITSCORE}
        var inventory2=[{name:"Mate20",productQuantity:200}];
        assert.equal(fn.orderHandling(clientAccount2,"Mate20",inventory2,20,"default"),"accepted");
    });


    it.only("Account Status=fair, creditStatus=good, productStatus=available ---> accepted",function() {
       var AGE=19;
       var BALANCE=101
       var CREDITSCORE=100;
       var clientAccount2={age:AGE,balance:BALANCE,creditScore:CREDITSCORE}
      var inventory2=[{name:"Mate20",productQuantity:200}]; 
       assert.equal(fn.orderHandling(clientAccount2,"Mate20",inventory2,200,"restricted"),"accepted");
   });
   
   it.only("Account Status=good,creditstatus= good ---> return accepted",function() {
       var AGE=40;
       var BALANCE=101
       var CREDITSCORE=100;
       var clientAccount2={age:AGE,balance:BALANCE,creditScore:CREDITSCORE}
       var inventory2=[{name:"Mate20",productQuantity:100}];
       assert.equal(fn.orderHandling(clientAccount2,"Mate20",inventoryArray,300,"restricted"),"accepted");
   });


   
   // PENDING
   
   it.only("Account Status=fair, creditStatus=good ,productStatus=soldout ---> pending",function() {
      var AGE=6;
       var BALANCE=2000;
       var CREDITSCORE=100;
       var inventory2=[{name:"Mate20",productQuantity:200}];
       var clientAccountTwo={ age:AGE,balance: BALANCE,creditScore:CREDITSCORE};
       assert.equal(fn.orderHandling(clientAccountTwo,"Mate20",inventory2,500,"restricted"),"pending");
   });
   it.only("Account Status=fair, creditStatus=good, productStatus=soldout, return pending",function() {
      var AGE=6;
       var BALANCE=2000;
       var CREDITSCORE=100;
       var inventory2=[{name:"Mate20",productQuantity:0}];
       var clientAccountTwo={ age:AGE,balance: BALANCE,creditScore:CREDITSCORE};
       assert.equal(fn.orderHandling(clientAccountTwo,"Mate20",inventory2,50,"restricted"),"pending");
   });
   
   // UNDER REVIEW
   
   it.only("Account Status=Good,productStatus=available,creditStatus=bad  ---> underReview",function() {
       var AGE=19;
       var BALANCE=2000;
       var CREDITSCORE=25;
       var inventory2=[{name:"Mate20",productQuantity:100}];
       var clientAccountTwo={ age:AGE,balance: BALANCE,creditScore:CREDITSCORE};
       assert.equal(fn.orderHandling(clientAccountTwo,"Mate20",inventory2,50,"restricted"),"underReview");
   });
    it.only("Account Status=Fair,creditStatus=bad, productStatus=limited ---> underReview",function() {
      var AGE=19;
       var BALANCE=99;
       var CREDITSCORE=30;
       var inventory2=[{name:"Mate20",productQuantity:100}];
       var clientAccountTwo={ age:AGE,balance: BALANCE,creditScore:CREDITSCORE};
       //var clientAccount2={age:AGE,balance:BALANCE,creditScore:CREDITSCORE}
       assert.equal(fn.orderHandling(clientAccountTwo,"Mate20",inventory2,50,"restricted"),"underReview");
   });
   it.only("Account Status= good,creditStatus=bad, productStatus=soldout ---> underReview",function() {
      var AGE=19;
       var BALANCE=2000;
       var CREDITSCORE=30;
       var inventory2=[{name:"Mate20",productQuantity:0}];
       var clientAccountTwo={ age:AGE,balance: BALANCE,creditScore:CREDITSCORE};
       //var clientAccount2={age:AGE,balance:BALANCE,creditScore:CREDITSCORE}
       assert.equal(fn.orderHandling(clientAccountTwo,"Mate20",inventory2,50,"restricted"),"underReview");
   });
      it.only("Account Status=good,creditStatus=bad, productStatus=limited ---> underReview",function() {
      var AGE=19;
       var BALANCE=2000;
       var CREDITSCORE=30;
       var inventory2=[{name:"Mate20",productQuantity:300}];
       var clientAccountTwo={ age:AGE,balance: BALANCE,creditScore:CREDITSCORE};
       //var clientAccount2={age:AGE,balance:BALANCE,creditScore:CREDITSCORE}
       assert.equal(fn.orderHandling(clientAccountTwo,"Mate20",inventory2,500,"restricted"),"underReview");
   });
   
   // REJECTED
   
   it.only("Account Status=poor,creditstatus= good,productStatu=available ---> rejected",function() {
       var AGE=6;
       var BALANCE=101;
       var CREDITSCORE=25;
       var clientAccount2={age:AGE,balance:BALANCE,creditScore:CREDITSCORE};
       var inventory2=[{name:"Mate20",productQuantity:300}];
       assert.equal(fn.orderHandling(clientAccount2,"Mate20",inventoryArray,100,"restricted"),"rejected");
   });


   it.only(" Account Status=Invalid ---> rejected",function() {
       var AGE=-1;
       var BALANCE=50000;
       var CREDITSCORE=10001;
       var clientAccount2={age:AGE,balance:BALANCE,creditScore:CREDITSCORE};
       assert.equal(fn.orderHandling(clientAccount2,"Mate20",inventoryArray,10002,"restricted"),"rejected");
   });

    it.only("Account Status=poor, creditStatus=bad, productStatus=available ---> underReview",function() {
        var AGE=7;
        var BALANCE=70;
        var CREDITSCORE=0;
        var clientAccount2={age:AGE,balance:BALANCE,creditScore:CREDITSCORE};
        var inventory2=[{name:"Mate20",productQuantity:200}];
        assert.equal(fn.orderHandling(clientAccount2,"Mate20",inventory2,20,"default"),"rejected");
    });

    it.only("1------------Account Status=poor, creditStatus=good, productStatus= sold out ---> reject",function() {
        var AGE=7;
        var BALANCE=70;
        var CREDITSCORE=100;
        var clientAccount2={age:AGE,balance:BALANCE,creditScore:CREDITSCORE};
        var inventory2=[{name:"Mate20",productQuantity:0}];
        assert.equal(fn.orderHandling(clientAccount2,"Mate20",inventory2,20,"default"),"rejected");
    });

    it.only("Account Status=fair, creditStatus=bad, productStatus=limited ---> rejected",function() {
        var AGE=7;
        var BALANCE=1001;
        var CREDITSCORE=0;
        var clientAccount2={age:AGE,balance:BALANCE,creditScore:CREDITSCORE};
        var inventory2=[{name:"Mate20",productQuantity:200}];
        assert.equal(fn.orderHandling(clientAccount2,"Mate20",inventory2,300,"default"),"rejected");
    });


    // When invalid
    it.only("Account Status=fair, creditStatus=bad, productStatus=limited ---> rejected",function() {
        var AGE=7;
        var BALANCE=1001;
        var CREDITSCORE=0;
        var clientAccount2={age:AGE,balance:BALANCE,creditScore:CREDITSCORE};
        var inventory2=[{name:"Mate20",productQuantity:200}];
        assert.equal(fn.orderHandling(clientAccount2,"Mate20",inventory2,300,"dsadad"),"rejected");
    });


});