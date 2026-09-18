import Clientes from "../models/Clientes";

export const mostrarClientes = async (req, res) => {
    try {
        const clientes = await Clientes.find().lean();

        // AQUÍ ESTABA EL ERROR: debes enviar 'clientes' a la vista
        res.render("clientesView", { clientes });
    } catch (error) {
        console.log(error);
    }
};

export const agregarCliente = async (req, res) => {
    try {
        const cliente = new Clientes(req.body);
        await cliente.save();

        res.redirect("/clientes");
    } catch (error) {
        console.log(error);
        res.redirect("/clientes");
    }
};

export const eliminarCliente = async (req, res) => {
    try {
        await Clientes.findByIdAndDelete(req.params.id);
        res.redirect("/clientes");
    } catch (error) {
        console.log(error);
        res.redirect("/clientes");
    }
};

export const mostrarEditarCliente = async (req, res) => {
    try {
        const cliente = await Clientes.findById(req.params.id).lean();
        res.render("editarCliente", { cliente });
    } catch (error) {
        console.log(error);
        res.redirect("/clientes");
    }
};

export const actualizarCliente = async (req, res) => {
    try {
        await Clientes.findByIdAndUpdate(req.params.id, req.body);
        res.redirect("/clientes");
    } catch (error) {
        console.log(error);
        res.redirect("/clientes");
    }
};