class AddForm
{
    constructor()
    {
        this.name = createInput("Name");
        this.addressline1 = createInput("Address Line 1");
        this.addressline2 = createInput("Address Line 2");
        this.city = createInput("City");
        this.state = createInput("State");
        this.zipcode = createInput("Zip Code");
        this.landmark = createInput("LandMark(Optional)");
        this.country = createInput("Country");
        this.email = createInput("Email(Optional)");
        this.mobile = createInput("Phone Number");

        this.AddressFull = this.addressline1.value + " " + this.addressline2.value() + " " + this.city.value() + " " + this.state.value() + " " + this.country.value() + this.landmark.value();
    }

    display()
    {
        AddAddress.x = 10000000;
        SearchAddress.x = 10000000;

        this.name.position(115, 170);
        this.addressline1.position(115, 200);
        this.addressline2.position(115, 230);
        this.city.position(115, 260);
        this.state.position(115, 290);
        this.zipcode.position(115, 320);
        this.country.position(115, 350);
        this.landmark.position(115, 380);
        this.email.position(115, 410);
        this.mobile.position(115, 440);

        next3.x = 200;

        if(mousePressedOver(next3))
        {
            next3.x = 100000;
            this.update();
        }
        

    }

    update()
    {
     var EZAddressOfficialCode = "users/" + this.mobile.value();
     database.ref(EZAddressOfficialCode).update(
         {
            Name : this.name.value(),
            Email : this.email.value(),
            Phone : this.mobile.value(),
            Address : this.AddressFull,
         }

     )
    }
}