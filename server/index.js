const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 3976;
const { API_VERSION, IP_SERVER, PORT_DB } = require("./config");

mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);

mongoose.connect(
  `mongodb://${IP_SERVER}:${PORT_DB}/course-factory`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log("La conexion a la base de datos es correcta.");

      app.listen(port, () => {
        console.log("######################");
        console.log("###### API REST ######");
        console.log("######################");
        console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}/`);
      });
    }
  }
);



// const mongoose = require("mongoose");
// const app = require("./app");
// const port = process.env.PORT || 3977;
// const { API_VERSION, IP_SERVER, PORT_DB } = require("./config");

// const URI = `mongodb://${IP_SERVER}:${PORT_DB}/course-factory`;

// mongoose.connect(URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false},
//   (err, res) => {
//     if (err) {
//       throw err;
//     } else {
//       console.log("Conexión realizada a base de datos");

//       app.listen(port, () => {
//         console.log("###### API REST ######");
//         console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}/`);
//       });
//     }
//   }
// );