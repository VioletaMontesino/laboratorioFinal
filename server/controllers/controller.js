const User = require('../model/user');
//const { users } = require('../services/render');

// Listar usuarios
exports.find = async (req,res) => {
    try {
        const users = await User.find();
        res.json(users)
    } catch {
        console.log(error);
        res.status(500).send("hubo un error");
    }
}

// Listar un usuario
exports.findOne = (req,res) => {
    const id = req.params.id;
    User.findById(id)
    .then(data =>{
        if(!data){
            res.status(404).send({ message : "No se ha encontrado el usuario con el id "+ id})
        }else{
            res.send(data)
        }
    })
    .catch(err =>{
        res.status(500).send({ message: "Error al encontrar el usuario con id " + id})
    })
}

// Crear un nuevo usuario
exports.create = (req,res) => {
     if(!req.body) {
        res.status(400).send({message: "La petición no puede ir vacía"});
        return;
    } else {

        // Creamos nuevo usuario a partir de los datos del formulario
        const user = new User({
            Nombre: req.body.Nombre,
            Apellidos: req.body.Apellidos,
            Edad: req.body.Edad,
            Dni: req.body.Dni,
            Cumpleanos: req.body.Cumpleanos,
            ColorFav: req.body.ColorFav,
            Sexo: req.body.Sexo
        });

        // Enviamos el usuario a MongoDB
        user.save(user).then(data=> {
            res.redirect('/')
        }).catch(err=>{
            res.status(500).send({
                message: err.message || "Error al crear el usuario"
            });
        });
    } 
}

// Actualizar un usuario
exports.update = async (req, res) => {

    try {
        const { Nombre, Apellidos, Edad, Dni, Cumpleanos, ColorFav, Sexo } = req.body;
        let user = await User.findById(req.params.id);

        if(!user) {
            res.status(404).json({ msg: 'No existe el usuario' })
        }

        user.Nombre = Nombre;
        user.Apellidos = Apellidos;
        user.Edad = Edad;
        user.Dni = Dni;
        user.Cumpleanos = Cumpleanos;
        user.ColorFav = ColorFav;
        user.Sexo = Sexo;

        user = await User.findOneAndUpdate({ _id: req.params.id },user, { new: true} )
        res.json(user);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


// Borrar un usuario
exports.delete = (req, res)=>{
    const id = req.params.id;

    User.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `No se puede borrar el usuario con id ${id}`})
            }else{
                res.send({
                    message : "Usuario borrado correctamente!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "No se puede encontrar el usuario con id" + id
            });
        });
}

