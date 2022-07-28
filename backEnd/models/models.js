const mongoose = require (`mongoose`);

const Schema = mongoose.Schema;
const storeSchema = new Schema ({


name:{Type:String,
    required:true
    
},

surname:{Type:String,
    required:true
},

adress:{ type:String,
    required:true
},

city:{Type:String,
    required:true
 },

province:{Type:String,
    required:true
   },

postalCode:{Type:Number,
    required:true
    },

country:{Type:String,
    required:true
   },
   
   age:{
    Type:Number,
    required:true
    
   },

email:{type:String,
    required: true,
    unique: true, 

},

password:{Type:String,
    required:true
},

confirmPassword:{Type:String,
    required:true
}


});
const Checkout = mongoose.model(`Checkout`, storeSchema)

module.exports={Checkout}
