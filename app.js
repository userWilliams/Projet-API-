const express = require("express");
const {connecter} = require("./bd/connect")
const routesProducts = require("./route/products")
const app = express();

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.use("/api/v1",routesProducts);

connecter("adresse mongodb/",(erreur)=>{
    if(erreur){
        console.log("Erreur de connexion a la bd")
        process.exit(-1);
    }else{
        console.log("connexion etabli avec success")
        app.listen(3000);
        console.log("instructions sur produits en attente")
    }
});


