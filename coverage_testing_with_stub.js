var assert=require('assert');
var fn= require('./IstanbulPurchaseOrder.js');
var sinon = require('sinon');

describe('orderHandling unit test ', function() {
    var client,store,creditCheckMode,storeThreshold,product,s1,s2,s3;
    beforeEach(function(){
        s1=sinon.stub(fn,'AccountStatus');
        s2=sinon.stub(fn,'creditStatus');
        s3=sinon.stub(fn,'productStatus');
    })
    afterEach(function () {
        s1.restore();
        s2.restore();
        s3.restore();
    });

    it.only('Order Handling (Accepted)', function (done) {
        s1.onCall(0).returns('very good'); // fake the return value of AccountStatus
        s2.onCall(0).returns('good'); // fake the return value of creditStatus
        s3.onCall(0).returns('good'); // fake the return value of productStatus
        // unit test for orderHandlingV2
        var result = fn.orderHandling(client,product,store,storeThreshold,creditCheckMode);
        console.log("Orderhandling result is : " + result);
        assert.equal(result,'accepted');
        //.should.equal('rejected');
        done();
    });

    it.only('Order Handling (Pending)', function (done) {
        s1.onCall(0).returns('fair'); // fake the return value of AccountStatus
        s2.onCall(0).returns('good'); // fake the return value of creditStatus
        s3.onCall(0).returns('limited'); // fake the return value of productStatus
        // unit test for orderHandlingV2
        var result = fn.orderHandling(client,product,store,storeThreshold,creditCheckMode);
        console.log("Orderhandling result is : " + result);
        assert.equal(result,'pending');
        //.should.equal('rejected');
        done();
    });

    it.only('Order Handling (Under Review)', function (done) {
        s1.onCall(0).returns('good'); // fake the return value of AccountStatus
        s2.onCall(0).returns('bad'); // fake the return value of creditStatus
        s3.onCall(0).returns('available'); // fake the return value of productStatus
        // unit test for orderHandlingV2
        var result = fn.orderHandling(client,product,store,storeThreshold,creditCheckMode);
        console.log("Orderhandling result is : " + result);
        assert.equal(result,'underReview');
        //.should.equal('rejected');
        done();
    }),

    it.only('Order Handling (Rejected)', function (done) {
        s1.onCall(0).returns('poor'); // fake the return value of AccountStatus
        s2.onCall(0).returns('good'); // fake the return value of creditStatus
        s3.onCall(0).returns('soldout'); // fake the return value of productStatus
        // unit test for orderHandlingV2
        var result = fn.orderHandling(client,product,store,storeThreshold,creditCheckMode);
        console.log("Orderhandling result is : " + result);
        assert.equal(result,'rejected');
        //.should.equal('rejected');
        done();
    });

});