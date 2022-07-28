const { Checkout } = require("../models/models");
const { check, validationResult, body } = require("express-validator");


 const  verUsuarios = async (req, res) => {
    
      const usuarios = await Checkout.find();
      res.json(usuarios);
   
  }
  const verUsuario =  async (req, res) => {
    
      const usuario = await Checkout.findById(req.params.id);
      res.json({ usuario });
   
  }

  const searchName = async (req, res) => {
    
    const usuario = await Checkout.find({name: req.params.name});
    res.json({ usuario });
 
}

const searchSurname =async (req, res) => {
    
    const usuario = await Checkout.find({surname: req.params.surname});
    res.json({ usuario });
 
}
const searchAdress=async (req, res) => {
    
    const usuario = await Checkout.find({adress:req.params.adress});
    res.json({ usuario });
 
}
const searcCity = async (req, res) => {
    
    const usuario = await Checkout.find({city:req.params.city});
    res.json({ usuario });
 
}
const searchProvince =async (req, res) => {
    
    const usuario = await Checkout.find({province:req.params.province});
    res.json({ usuario });
 
}
const searchPostalcode =async (req, res) => {
    
    const usuario = await Checkout.find({postalCode:req.params.postalCode});
    res.json({ usuario });
 
}
const searchCountry =async (req, res) => {
    
    const usuario = await Checkout.find({country:req.params.country});
    res.json({ usuario });
 
}
const searchAge =async (req, res) => {
    
    const usuario = await Checkout.find({age:req.params.age});
    res.json({ usuario });
 
}
const searchEmail = async (req, res) => {
    
    const usuario = await Checkout.find({email:req.params.emil});
    res.json({ usuario });
 
}

  const crearUsuario = async (req, res) => {
    try {
      const error = validationResult(req);
      if (error.isEmpty()) {
        const guardar = new Checkout(req.body);
        await guardar.save();
        res.status(201).json(guardar);
      } else {
        res.status(501).json(error);
      }
    } catch (error) {
      res.status(501).json({ msg: "este usuario ya existe", error });
    }
  }

  const editarUsuario = async (req, res) => {
    try {
      const error = validationResult(req);
      if (error.isEmpty()) {
        const { id } = req.params;
        const editar = await Checkout.findByIdAndUpdate(id, req.body);
        res.status(201).json(editar);
      }
    } catch (error) {
      res.status(501).json({ msg: "no se puede editar el ususario", error });
    }
  }

  const eliminarUsuario = async (req, res) => {
    try {
      const error = validationResult(req);
      if (error.isEmpty()) {
        const eliminar = await Checkout.findByIdAndDelete(req.params.id);
        res.stauts(201).json({ mg: "usuario eliminado", eliminar });
      }
    } catch (error) {
      res.status(501).json({ msg: "no se puedo eliminar al usuario", error });
    }
  }

  const externalApi = async (req,res) =>{

    try
    {const respuesta = await axios.get("https://jsonplaceholder.typicode.com/users")
  res.json({status: respuesta.status, data: respuesta.data})}
    catch(error){ res.json({error: error.response.status, data: error.response.data})}
  }


;

module.exports = {verUsuarios,verUsuario,searchName,searchSurname,searchAdress,searcCity,searchProvince,searchPostalcode,searchCountry,searchAge,searchEmail,crearUsuario,editarUsuario,eliminarUsuario,externalApi};
