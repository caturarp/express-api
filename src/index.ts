import express, {Application} from "express";
import morgan from "morgan";
import Router from "./routes";
import SwaggerUi from "swagger-ui-express";
import { Sequelize } from "sequelize";
const PORT = process.env.PORT || 8000;

const sequelize = new Sequelize('postgres://postgres:root@localhost:9951/Indosat') // postgres

const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));

app.use(
    "/docs",
    SwaggerUi.serve,
    SwaggerUi.setup(undefined, {
        swaggerOptions: {
            url: "/swagger.json"
        },
    })
);

// app.use("/auth", this.authController.router)


app.use(Router);

// Manually send message for connect test 

// app.get("/ping", async (_req,res) => {  
//     res.send({
//         message: "Alhamdulillah",
//     });
// });

app.listen(PORT, ()=>{
    console.log("Server is running on", PORT);    
});