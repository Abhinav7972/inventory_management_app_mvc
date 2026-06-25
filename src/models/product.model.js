export default class ProductModel
{
    constructor(_id,_name,_desc,_price,_imageurl)
    {
     this.id = _id;
     this.name = _name;
     this.description = _desc;
     this.price = _price;
     this.image = _imageurl;
    }

    static get()
    {
        return products;
    }

    static update(productObj)
    {
      const index = products.findIndex((p)=> p.id == productObj.id);
      products[index] = productObj;
    }

    static add(productObj)
    {
      let newProduct = new ProductModel(productObj.id=products.length+1,
        productObj.name,
        productObj.desc,
        productObj.price,
        productObj.image,
      );
      
      products.push(newProduct);
    }


    static getByID(id)
    {
      return products.find((p)=>p.id==id)
    }


}

const products = [
  new ProductModel(1, 'The Power of Habit', 'Why we do what we do in life and business.', 320, 'https://i.pinimg.com/736x/3f/ec/19/3fec19e446ecc983fba993e638567c4a.jpg'),
  new ProductModel(2, 'Show Your Work!', '10 ways to share your creativity and get discovered.', 280, 'https://i.pinimg.com/736x/8c/8d/5e/8c8d5ef64f9f602ad27b81b14b3090e7.jpg'),
  new ProductModel(3, 'Thinking, Fast and Slow', 'A deep dive into the two systems that drive the way we think.', 450, 'https://i.pinimg.com/736x/3b/5a/0f/3b5a0fbce8a9246201471c81e616b6fc.jpg'),
  new ProductModel(4, 'Start With Why', 'How great leaders inspire everyone to take action.', 350, 'https://i.pinimg.com/736x/cd/93/78/cd9378722245d874ecd9854adfef6746.jpg')
];

