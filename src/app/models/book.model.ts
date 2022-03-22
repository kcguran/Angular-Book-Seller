export class Book{
    id : number | undefined;
    title : String = "";
    author : String = "";
    price : number = 0.0;
    description : String = "";
    createTime : Date = new Date();

    constructor(id?: number, title: string="", price: number = 0) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}