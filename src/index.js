import app from "./app.js";
import { sequelize } from "./database/database.js";
import { PORT } from "./config.js";


// async function main(){
//    try {
//       await sequelize.sync({ alter: false });  // true si hay cambios en el schemas, false si no hay cambios
//       console.log("✅ Base de datos sincronizada correctamente en Supabase");

//       app.listen(PORT, () => {
//          console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
//       });

//    } catch (error) {
//       console.error("❌ Error al iniciar el servidor:", error);
//    }
// }
//  main();

//USO LOCAL

async function main(){
   try { 
      await sequelize.sync();
      app.listen(3000, () => {
         console.log("Server running on port 3000")
      })
   } catch (error) {
      console.error("Error starting server: ", error)
   }
}

main()