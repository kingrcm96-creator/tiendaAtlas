import { Router } from "express";

import {
    mostrarClientes,
    agregarCliente,
    eliminarCliente,
    mostrarEditarCliente,
    actualizarCliente
} from "../controllers/clientesController";

const router = Router();

router.get("/", mostrarClientes);

router.post("/agregar", agregarCliente);

router.get("/eliminar/:id", eliminarCliente);

router.get("/editar/:id", mostrarEditarCliente);

router.post("/editar/:id", actualizarCliente);

export default router;