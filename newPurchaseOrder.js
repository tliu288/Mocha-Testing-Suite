module.exports={
    getAgeFactor:function(clientAccount)

    {
        var factor;

        //if age is less than 5 or greater than=120, return 0
        if (clientAccount.age <5 || clientAccount.age >=120)

        {
            return factor=0;
        }
        //if age is between 5 and 10 with 05 inclusive
        else  if (clientAccount.age >=5 && clientAccount.age <10)

        {
            return factor = 5;
        }
        //if age is between 10 and 18 with 10 inclusive
        else if (clientAccount.age >=10 && clientAccount.age <18)

        {
            return  factor= 10;
        }
        //if age is between 18 and 30 with 18 inclusive
        else if (clientAccount.age >=18 && clientAccount.age <30)

        {
            return  factor=20;
        }
        //if age is between 30 and 70 with 30 inclusive
        else if (clientAccount.age >=30 && clientAccount.age <70)

        {
            return factor =50;
        }

        //if age is between 70 and 120 with 70 inclusive
        else
            return factor=20;



    },

    getBalanceFactor:function (clientAccount )

    {    var factor;

        //if balance less than =0 o and balance is greater than or equal to 50000
        if (clientAccount.balance <= 0 || clientAccount.balance >=50000)

        {
            return factor = 0;
        }
        //if balance is less than 100
        else if (clientAccount.balance < 100)

        {
            return  factor = 6;
        }
        //if balance is between 100 and 1000 with 100 inclusive
        else if (clientAccount.balance>=100 && clientAccount.balance < 1000)

        {
            return factor = 16;
        }
        //if balance is between 1000 and 10000 with 1000 inclusive
        else if (clientAccount.balance >= 1000 && clientAccount.balance < 10000)

        {
            return factor = 30;
        }
        //if balance is between 10000 and 30000 with 10000 inclusive
        else if (clientAccount.balance >=10000 && clientAccount.balance < 30000)

        {

            return factor = 70;
        }

        //if balance is between 30000 and 50000 with 30000 inclusive

        else

            return factor=200;

        //return factor;



    },


    AccountStatus:function (clientAccount) {

        var factor1 = module.exports.getAgeFactor(clientAccount);

        var factor2 = module.exports.getBalanceFactor(clientAccount);

        var factor3 = factor1 *factor2;


        if ( factor3 > 0 && factor3 < 100 )

        {
            return "poor";
        }

        else if ( factor3 >= 100 && factor3 < 500 )

        {
            return "fair";
        }

        else if ( factor3 >= 500 && factor3 < 1000)

        {
            return "good";


        }
        else if(factor3>=1000)
        {

            return "very good";
        }
        else
            return "invalid"; //invalid when age and balance are out of their bounds, or their product is 0
    },

    creditStatus:function (clientAccount,creditCheckMode)

    {   var scoreThreshold;

        while(0<=clientAccount.creditScore && clientAccount.creditScore<=100)

        { if (creditCheckMode =="restricted")

        {
            scoreThreshold=50;
            if(clientAccount.creditScore<scoreThreshold)
            {
                return "bad";
            }
            else return "good";

        }
        else  if (creditCheckMode =="default")

            {
                scoreThreshold=75;
                if(clientAccount.creditScore<scoreThreshold)
                {
                    return "bad";
                }
                else return "good";

            }
        else return "invalid";
        };
         return "invalid";
    },

    productStatus:function (product,inventory,inventoryThreshold)

    {
        var q;
        var i;
        var size=1000;

        for (i=0;i<=size;i++)

        {

            if (product == inventory[i].name)

            {

                q=inventory[i].productQuantity;
                //product quantity and inventory threshold should be between 0 and 1000 both inclusive
                while(0<=q && q<=1000 && 0<=inventoryThreshold && inventoryThreshold<=1000)
                {
                    if (q==0)

                        return "soldout";



                    else if (q >= inventoryThreshold)

                    {

                        return "available"
                    }
                    else return "limited"



                }
            }
            return "invalid";
        }
    },

    orderHandling:function(clientAccount,product,inventory,inventoryThreshold,creditCheckMode)

    {

        var aStautus=module.exports.AccountStatus(clientAccount);
        console.log("Account status after stub : " + aStautus);
        var cStatus=module.exports.creditStatus(clientAccount,creditCheckMode);
        console.log("Credit status after stub : " + cStatus);
        var pStatus=module.exports.productStatus(product,inventory,inventoryThreshold);
        console.log("Product status after stub : " + pStatus);

        // ACCEPTED CASES
        if ((aStautus=="very good") || (aStautus=="good" && cStatus=="good")||(aStautus=="poor" && cStatus=="good" && pStatus=="available")||(aStautus=="fair" && cStatus=="good" && pStatus=="available"))
            return "accepted";

        // PENDING CASES
        else if ((aStautus=="fair" && cStatus=="good" && pStatus=="limited")||(aStautus=="fair" && cStatus=="good" && pStatus=="soldout"))
            return "pending";

        // UNDER REVIEW CASES
        else if ((aStautus=="good" && cStatus=="bad")||(aStautus=="fair" && cStatus=="bad" && pStatus=="available"))
            return "underReview";

        // REJECTED CASES
        //else if ((aStautus=="invalid" || cStatus=="invalid" || pStatus=="invalid")||(aStautus=="fair" &&  cStatus=="bad" && pStatus!="available")||(aStautus=="poor" && cStatus=="good" && pStatus=="soldout") || (aStautus=="poor" && cStatus=="bad"))
        //    return "rejected";
        else return "rejected";
    }
};