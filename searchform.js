class searchForm
{
    constructor()
    {
     this.searchInput = createInput("Search Here");
     this.mobile = 0;

     this.phone = createElement('h3');
     this.name = createElement('h3');
     this.email = createElement('h3');
     this.address = createElement('h3');


     this.phoneI = " ";
     this.nameI = null;
     this.emailI = null;
     this.addressI = null;
    }

    display()
    {
     this.searchInput.position(115, 170);


     SearchAddress.x =100000;
     AddAddress.x = 1000000;
     next2.x = 200;

     if(mousePressedOver(next2))
     {
         this.step2();
         next2.x = 10000000;
     }
    }

    step2()
    {
        // this.getInfo(this.phoneI, "Phone");
        //this.getInfo(this.nameI, "Name");
        //this.getInfo(this.emailI, "Email");
        //this.getInfo(this.addressI, "Address");

        this.getInfo();

        this.searchInput.hide();
        
        this.phone.html("Phone : " + this.phoneI);
        this.name.html("Name : " + this.nameI);
        this.email.html("Email : " + this.emailI);
        this.address.html("Address : " + this.addressI);

        this.name.position(0, 200);
        this.phone.position(0, 240);
        this.email.position(0, 280);
        this.address.position(0, 320);
        
    }

    
    getInfo()
    {
     var raf = "users/" + this.searchInput.value() + "/Phone"
     var pc = database.ref(raf);
     pc.on("value", (data)=>{
         this.phoneI = data.val();
     });

    }
}