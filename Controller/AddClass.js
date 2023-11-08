const { response } = require("express")
const Class = require("../Model/Class");


// const Class = require('votre-module-class'); // Assurez-vous d'importer correctement le modèle Class

const grades = async (req, res) => {
    try {
        const count = await Class.countDocuments({});
        
        if (count === 0) {
            // La collection est vide, vous pouvez exécuter la fonction grades
            let Seconde = new Class({
                class: "seconde"
            })
            await Seconde.save();
            console.log('Classe Seconde créée');

            let Premiere = new Class({
                class: "premiere"
            })
            await Premiere.save()
            .then(response => {
                console.log('Classe Première créée')
            })
            .catch(error => {
                console.log("An error occured: ",error)
            });
            
            let Terminal_L = new Class({
                class: "terminal l"
            })
            await Terminal_L.save()
            .then(response => {
                console.log('Classe Terminal_L créée')
            })
            .catch(error => {
                console.log("An error occured: ",error)
            });
            
            let Terminal_S = new Class({
                class: "terminal s"
            })
            await Terminal_S.save()
            .then(response => {
                console.log('Classe Terminal_S créée')
            })
            .catch(error => {
                console.log("An error occured: ",error)
            });
            
            let Terminal_OSE = new Class({
                class: "terminal ose"
            })
            await Terminal_OSE.save()
            .then(response => {
                console.log('Classe Terminal_OSE créée')
            })
            .catch(error => {
                console.log("An error occured: ",error)
            });
            

        } else {
            console.log('Les données existent déjà dans la collection, "grades" ne sera pas exécutée.');
        }
    } catch (error) {
        console.error("Une erreur s'est produite lors de la vérification de la collection :", error);
    }
}

// Appelez la fonction grades() lorsque vous exécutez votre application



// Appelez la fonction grades() lorsque vous exécutez votre application





// // Définissez une variable de drapeau pour garder une trace de l'exécution de la fonction
// let gradesInitialized = false;

// const grades = (req, res) => {
//     if (!gradesInitialized) {
//         let Seconde = new Class({
//         class: "Seconde"
//     })
//     Seconde.save()
//     .then(response => {
//         console.log('Classe Seconde créée')
//     })
//     .catch(error => {
//         console.log("An error occured: ",error)
//     });
    
//     let Premiere = new Class({
//         class: "Première"
//         })
//         Premiere.save()
//         .then(response => {
//             console.log('Classe Première créée')
//         })
//         .catch(error => {
//             console.log("An error occured: ",error)
//         });
        
//     let Terminal_L = new Class({
//         class: "Terminal L"
//         })
//         Terminal_L.save()
//         .then(response => {
//             console.log('Classe Terminal_L créée')
//         })
//         .catch(error => {
//             console.log("An error occured: ",error)
//         });
        
//         let Terminal_S = new Class({
//             class: "Terminal S"
//         })
//         Terminal_S.save()
//         .then(response => {
//             console.log('Classe Terminal_S créée')
//         })
//         .catch(error => {
//             console.log("An error occured: ",error)
//         });
        
//         let Terminal_OSE = new Class({
//             class: "Terminal OSE"
//         })
//         Terminal_OSE.save()
//         .then(response => {
//             console.log('Classe Terminal_OSE créée')
//         })
//         .catch(error => {
//             console.log("An error occured: ",error)
//         });

//         // Mettez à jour la variable de drapeau pour indiquer que la fonction a été exécutée
//         gradesInitialized = true;
//     } else {
//         console.log('La fonction "grades" a déjà été exécutée.');
//     }
// }

// Vous pouvez appeler la fonction grades() chaque fois que vous en avez besoin, mais elle ne s'exécutera qu'une seule fois.


module.exports = grades