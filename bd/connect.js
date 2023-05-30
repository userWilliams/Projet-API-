var products = null;

function connecter(url, callback){
    if (products == null){
        products = new MongoProducts(url);

        products.connect((erreur)=>{
            if(erreur){
                products=null;
                callback(erreur);
            }else{
                callback();
            }
        });
    }else{
        callback();
    }
}

function bd(){
    return new Db(products,"ProjetApi")
}

function fermerconnexion(){
    if(products){
        products.close();
        products = null;
    }
}

module.exports = {connecter,bd,fermerconnexion}