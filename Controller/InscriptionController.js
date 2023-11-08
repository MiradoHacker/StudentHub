const inscription = require("../Model/inscription");
const Class = require("../Model/Class");

const saveStudent = (async (req, res, className) => {
  try {
    const search = await Class.findOne({ class: className });
    if (!search) {
      res.status(404).json({ message: `La classe ${className} n'existe pas.` });
      return;
    }

    const student = new inscription({
      class_id: search.id,
      name: req.body.name,
      given_name: req.body.given_name,
      age: req.body.age,
      date_of_birth: req.body.date_of_birth,
      city: req.body.city,
      object: req.body.object,
      grade: className,
      dad_name: req.body.dad_name,
      dad_contact: req.body.dad_contact,
      dad_profession: req.body.dad_profession,
      mom_name: req.body.mom_name,
      mom_contact: req.body.mom_contact,
      mom_profession: req.body.mom_profession,
      tutor_name: req.body.tutor_name,
      tutor_contact: req.body.tutor_contact,
      tutor_profession: req.body.tutor_profession,
    });

    if (req.file) {
      student.profil = req.file.path;
    }

    await student.save();
    res.json({ message: "Les données ont été enregistrées avec succès." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Une erreur s'est produite lors de l'enregistrement des données." });
  }
});

const Inscript = async (req, res, next) => {
//   switch (req.body.class) {
//     case "seconde":
//       await saveStudent(req, res, req.body.class);
//       break;

//     case "premiere":
//       await saveStudent(req, res, req.body.class);
//       break;
//     case "tl":
//         await saveStudent(req, res, req.body.class)
//         break;
//         case "ts":
//       await saveStudent(req, res, req.body.class);
//       break;

//     case "tose":
//       await saveStudent(req, res, req.body.class);
//       break;

//     // Gérez d'autres cas ici si nécessaire

//     default:
//       res.status(400).json({ message: "Classe non reconnue." });
//       break;
//   }
if(req.body.grade == "second"){
  await saveStudent(req, res, req.body.grade);
} else if(req.body.grade == "premiere"){
  await saveStudent(req, res, req.body.grade);
} else if(req.body.grade == "terminal l"){
  await saveStudent(req, res, req.body.grade);
} else if(req.body.grade == "terminal s"){
  await saveStudent(req, res, req.body.grade);
} else if(req.body.grade == "terminal ose"){
  await saveStudent(req, res, req.body.grade);
} else {
  console.log(req.body);
  res.json({message: `${req.body.grade}C'est introuvable!!`})
}

}

const getAllStudent = (async (req, res) =>{
  const search = await inscription.findOne({class_id: req.params.id})
  if(!search) {
    throw new Error('Class not found')
  }
  res.json(search)
});

const updateStudent = (async (req, res) => {
  const search = await inscription.findById(req.params.id)
  if(!search){
    throw new Error('Student not found')
  } 
  try{
    const update = await inscription.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new: true}
    )
    res.json(update)
  } catch(err) {
    res.json({message: "An error on update"})
  }
})

module.exports = { Inscript, getAllStudent, updateStudent };











