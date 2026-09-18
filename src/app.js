import express from "express";
import indexRoutes from './routes/indexRoutes';
import exphbs from "express-handlebars";
import path, { extname } from "path"; //modulo de node
import morgan from "morgan";
import clientesRoutes from "./routes/clientes";


const app = express();

app.set("views", path.join(__dirname, "views"));
app.engine(
    ".hbs",
    exphbs({
        layoutsDir: path.join(app.get("views"), "layouts"),
        partialsDir: path.join(app.get("views"), "partials"),
        defaultLayout: "main",
        extname: ".hbs",
    })
);
app.set("view engine", "hbs");

//middleware intermediario cliente-servidor
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false}));


//RUTAS
app.use(indexRoutes);
app.use("/clientes", clientesRoutes);

//archivos estaticos
app.use(express.static(path.join(__dirname, "frontend")))

export default app; //exporto el objeto app