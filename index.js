const express = require("express");
const app = express();
const cors = require("cors")
const User = require("./User");
const Features = require("./Featured")
const Disc = require("./Disc")
const pastalavista = require("./pastalavista");
require("./Config")
const mitthan = require("./mitthan")

app.use(express.json());
app.use(cors())

app.get("/dataItem" , (req , resp) => {


    const data = [
        {
            img:"https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
            name:"thali"
        },


    {
            img:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
            name:"pizza"
        },

        {
            img:"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
            name:"biryani"
        },

        {
            img:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
            name:"burger"
        },

        {
            img:"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
            name:"rolls"
        },

        {
            img:"https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png",
            name:"shahi paneer"
        },

        {
            img:"https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
            name:"chicken"
        },

        {
            img:"https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png",
            name:"sandwich"
        },

        {
            img:"https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
            name:"dosa"
        },
    ]


    resp.send(data);

})


app.get("/restron" , (req , resp) => {
    const data = [
        {
            name:"Pasta la vista",
            img:"https://images.unsplash.com/photo-1616299908398-9af1134ad522?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHBhc3RhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            star:"3.8",
            rate:"150 for one",
            id:"pastalavista"
        },

        {
            name:"mitthan sweets",
            img:"https://images.unsplash.com/photo-1543773495-2cd9248a5bda?ixlib=rb-4.0.3&ix_id=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            star:"4.2",
            rate:"130 for one",
            id:"mitthan"
        },

        {
            name:"la pinoz pizza",
            img:"https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-4.0.3&ix_id=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
            star:"4",
            rate:"120 for one",
            id:"lapinozpizza"
        },
        {
            name:"sunny vaishno dhaba",
            img:"https://img.freepik.com/free-photo/paneer-butter-masala-cheese-cottage-curry-served-with-rice-laccha-paratha_466689-73715.jpg?t=st=1676366434~exp=1676367034~hmac=0091a71e304a933f481428be5d243a1c953fac724b31a00f2a8f55f87eb7c632",
            star:"3.7",
            rate:"100 for one",
            id:"sunnydhaba"
        },

        {
            name:"bunny burger",
            img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ix_id=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1jJTIwZG9uYWxkcyUyMGJ1cmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            star:"3.9",
            rate:"150 for one",
            id:"bunnyburger"
        },

        {
            name:"ahuja sweets",
            img:"https://img.freepik.com/free-photo/closeup-shot-indian-tasty-food-called-marwari-veg-thali-wooden-table_181624-58043.jpg?w=826&t=st=1676366621~exp=1676367221~hmac=fe5f6273f6e0be4a849b500bd22dd4d7ce6373c4b76d40472b46ad8c4c88b424",
            star:"4.1",
            rate:"130 for one",
            id:"ahujasweets"
        },

        {
            name:"pizza galleria",
            img:"https://img.freepik.com/free-photo/mixed-pizza-with-various-ingr_idients_140725-3790.jpg?size=626&ext=jpg&ga=GA1.2.1607152043.1676097023&semt=sph",
            star:"3.8",
            rate:"100 for one",
            id:"pizzagalleria"
        },

        {
            name:"shama biryani",
            img:"https://img.freepik.com/premium-photo/dum-handi-chicken-biryani-is-prepared-earthen-clay-pot-called-haandi-popular-indian-non-vegetarian-food_466689-52332.jpg?size=626&ext=jpg&ga=GA1.1.1607152043.1676097023&semt=sph",
            star:"3.8",
            rate:"160 for one",
            id:"shamabiryani"
        },

        {
            name:"veer ji mithai",
            img:"https://img.freepik.com/free-photo/group-indian-assorted-sweets-mithai-with-diya_466689-72281.jpg?size=626&ext=jpg&ga=GA1.2.1607152043.1676097023&semt=ais",
            star:"3.9",
            rate:"100 for one",
            id:"veerji"
        },

        {
            name:"guru kirpa cholle bhature",
            img:"https://img.freepik.com/premium-photo/chole-bhature-spicy-chick-peas-curry-also-known-as-chole-channa-masala-is-traditional-north-indian-main-course-recipe-usually-served-with-fried-puri-bhature-selective-focus_726363-293.jpg?size=626&ext=jpg&ga=GA1.2.1607152043.1676097023&semt=ais",
            star:"4",
            rate:"100 for one",
            id:"gurukirpa"
        },

        {
            name:"hangries",
            img:"https://images.unsplash.com/photo-1613319300832-a105da5bd34e?ixlib=rb-4.0.3&ix_id=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGZhc3QlMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            star:"4.4",
            rate:"120 for one",
            id:"hangries"
        },

        {
            name:"dawat",
            img:"https://media.istockphoto.com/id/497959594/photo/fresh-cakes.jpg?s=612x612&w=0&k=20&c=T1vp7QPbg6BY3GE-qwg-i_SqVpstyHBMIwnGakdTTek=",
            star:"4.2",
            rate:"130 for one",
            id:"dawat"
        },

        {
            name:"roll hut",
            img:"https://img.freepik.com/premium-photo/chicken-meat-french-fries-vegetables-salad-are-wrapped-pita-bread-brown-wall-traditional-shawarma-s_ide-view-copy-space_166116-3016.jpg?size=626&ext=jpg&ga=GA1.2.1607152043.1676097023&semt=sph",
            star:"4",
            rate:"100 for one",
            id:"rollhut"
        },

        {
            name:"channa sweets",
            img:"https://images.unsplash.com/photo-1626132647523-66f5bf380027?ixlib=rb-4.0.3&ix_id=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGF2JTIwYmhhaml8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            star:"3.8",
            rate:"160 for one",
            id:"channasweets"
        },

        {
            name:"akni anna dosa",
            img:"https://img.freepik.com/premium-photo/plain-dosa-dish_57665-14912.jpg?size=626&ext=jpg&ga=GA1.2.1607152043.1676097023&semt=ais",
            star:"4.5",
            rate:"100 for one",
            id:"aknianna"
        },

        ]
    resp.send(data)
})


    app.post("/restro" ,async (req , resp) => {
        const data = req.body.ide;
        console.log("data is ",data)
        const user = await User.findOne({name:data});
        console.log(user)
        if(user){
            resp.send([user])
        }else{
            resp.send({data:"no data found"});
        }
    })



    app.post("/admin" ,async (req , resp) => {
        const text = req.body.text;
        const passwrd = req.body.pass;
        const data =await User.find({name:text});
        console.log(data)
            if(!data[0]){
                      resp.send({errorUser:'no username found'})
            }else if( data[0].password !== passwrd  ){
                resp.send({errorPass:"password mismatch"})
                console.log("wrong password")
            }else if( data[0].name == text && data[0].password == passwrd){
                resp.send({success:"user found"})
            }
    })

    app.post("/dataHandler" ,async (req,resp) => {
        let name = req.body.name;
        let price = req.body.price;
        let rating = req.body.rating;
        let img = req.body.img;
        let ide = req.body.id;

        let valuedData = {name,price,rating,img}

        
    //     console.log(id)
    //     const data = {name , price , rating , img}
    //     // let values = Object.keys(data);
    //     // let value = Object.values(data)

    //     // let data1 = await JSON.parse(JSON.stringify(data));

    //     // let value = await data.json()
    //     // const data1=[name:name,price:price]
    //     // const query = { name: id };
    //     // const updates = {};
        
    //     // constructing dynamic query
        
    //     // for (let i = 0; i < values.length; i++) {
    //     // updates[values[i]] = value[i]
    //     // }
      

    //     // const updateDocument = {
    //     //   $push: { items:updates }
    //     // }; 
        
    //     // const result = await pizza.updateOne(query, updateDocument);

    //     //  const respo =await User.updateMany( { name:id },{$push:{"items.$[]":updates}});


    //     const value = User.update


        
    //     //resp.send(respo)
    
    let data =await User.update({name:ide} , { $push: {items : {name:name,price:price,rating:rating,img:img}} });
    
    console.log(data);
    if(data){
        resp.send({success:"item launched successfully"})
    }else{
        resp.send({error:"technical error"})
    }

    })

    app.post("/menuItems",async (req , resp) => {
        let data = req.body.data;
        let price = req.body.price;
        let final = price;
        console.log("Food items is",data)
        console.log("price is ",price)
        console.log("total bill is", final)
        resp.send({data})
    })

    app.get("/featuredRestaurant" , async(req , resp) => {
        const data = await Features.find();
        console.log("data : ",data);
        resp.send(data)
    })

    app.get('/tastyDisc' , async(req , resp) => {
        const data = await Disc.find();
        console.log("disc Data : ",data);
        resp.send(data)
    })

app.listen(5500);