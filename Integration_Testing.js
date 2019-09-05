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
        var BALANCE=15000;
        var CREDITSCORE=100;
        var clientAccount2={age:AGE,balance:BALANCE,creditScore:CREDITSCORE};
        var inventory2=[{name:"Mate20",productQuantity:0}];
        // Check account Status
        var accStautus= fn.AccountStatus(clientAccount2);
        assert.equal(accStautus,"very good");
        var credStatus= fn.creditStatus(clientAccount2,'restricted');
        // Check Credit Status
        assert.equal(credStatus,"good");
        // Check Product Status
        var prodStatus= fn.productStatus("Mate20",inventory2,200);
        assert.equal(prodStatus,"soldout");
        assert.equal(fn.orderHandling(clientAccount2,"Mate20",inventory2,200,"restricted"),"accepted");
    });

    // Pending

    it.only("Account Status=fair, creditStatus=good ,productStatus=soldout ---> pending",function() {
        var AGE=6;
        var BALANCE=2000;
        var CREDITSCORE=100;
        var clientAccount2={age:AGE,balance:BALANCE,creditScore:CREDITSCORE};
        var inventory2=[{name:"Mate20",productQuantity:0}];
        // Check account Status
        var accStautus= fn.AccountStatus(clientAccount2);
        assert.equal(accStautus,"fair");
        var credStatus= fn.creditStatus(clientAccount2,'restricted');
        // Check Credit Status
        assert.equal(credStatus,"good");
        // Check Product Status
        var prodStatus= fn.productStatus("Mate20",inventory2,200);
        assert.equal(prodStatus,"soldout");
        assert.equal(fn.orderHandling(clientAccount2,"Mate20",inventory2,500,"restricted"),"pending");
    });

    // Under Review

    it.only("Account Status=Good,productStatus=available,creditStatus=bad  ---> underReview",function() {
        var AGE=19;
        var BALANCE=2000;
        var CREDITSCORE=25;
        var clientAccount2={age:AGE,balance:BALANCE,creditScore:CREDITSCORE};
        var inventory2=[{name:"Mate20",productQuantity:0}];
        // Check account Status
        var accStautus= fn.AccountStatus(clientAccount2);
        assert.equal(accStautus,"good");
        var credStatus= fn.creditStatus(clientAccount2,'restricted');
        // Check Credit Status
        assert.equal(credStatus,"bad");
        // Check Product Status
        var prodStatus= fn.productStatus("Mate20",inventory2,100);
        assert.equal(prodStatus,"soldout");
        assert.equal(fn.orderHandling(clientAccount2,"Mate20",inventory2,50,"restricted"),"underReview");
    });

    // Rejected

    it.only("Account Status=Invalid,productStatus=soldout,creditStatus=bad  ---> rejected",function() {
        var AGE=3;
        var BALANCE=-10;
        var CREDITSCORE=25;
        var clientAccount2={age:AGE,balance:BALANCE,creditScore:CREDITSCORE};
        var inventory2=[{name:"Mate20",productQuantity:0}];
        // Check account Status
        var accStautus= fn.AccountStatus(clientAccount2);
        assert.equal(accStautus,"invalid");
        var credStatus= fn.creditStatus(clientAccount2,'restricted');
        // Check Credit Status
        assert.equal(credStatus,"bad");
        // Check Product Status
        var prodStatus= fn.productStatus("Mate20",inventory2,100);
        assert.equal(prodStatus,"soldout");
        assert.equal(fn.orderHandling(clientAccount2,"Mate20",inventory2,50,"restricted"),"rejected");
    });
});