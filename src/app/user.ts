export class User {
    dtype:string = "customer";
    userId!:string;
    name!:string;
    password!:string;
    email!:string;
    contactNo!:number;
    door_no: string="";
    street:string="";
    area:string="";
    city:string="";
    state:string="";
    pincode:number=0;
    dob!:Date;
}
