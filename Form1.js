class Form
{
    constructor()
    {
        this.mobileNumber = createInput("Enter Mobile Number");
        this.enterOTP = createInput("Enter OTP Here");
    }

    display()
    {
        this.mobileNumber.position(115, 170);
        this.enterOTP.position(115, 300);

        if(mousePressedOver(next1))
        {
            this.update();

            //hide
            next1.x = 10000000;
            sendOTP.x = 10000000;
            this.mobileNumber.hide();
            this.enterOTP.hide();

            //next screen
            AddAddress.x = 200;
            SearchAddress.x = 200;
        }
    }
    
    update()
    {
     var mobileN = "login/" + this.mobileNumber.value();
     database.ref(mobileN).update(
         {
             phone : this.mobileNumber.value(),
             otp : this.enterOTP.value(),
         }

     )
    }
}