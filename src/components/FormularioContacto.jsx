import { useState } from "react";

function FormularioContacto({ onAgregar }) {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    etiqueta: "",
  });

  const [errores, setErrores] = useState({
    nombre: "",
    telefono: "",
    correo: "",
  });

  const [enviando, setEnviando] = useState(false);
  const [mensajeOk, setMensajeOk] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function validarFormulario() {
    const nuevosErrores = { nombre: "", telefono: "", correo: "" };

    if (!form.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio.";
    }

    if (!form.telefono.trim()) {
      nuevosErrores.telefono = "El teléfono es obligatorio.";
    } else if (form.telefono.trim().length < 7) {
      nuevosErrores.telefono = "El teléfono debe tener mínimo 7 caracteres.";
    }

    if (!form.correo.trim()) {
      nuevosErrores.correo = "El correo es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(form.correo)) {
      nuevosErrores.correo = "El correo no tiene un formato válido.";
    }

    setErrores(nuevosErrores);

    return (
      !nuevosErrores.nombre &&
      !nuevosErrores.telefono &&
      !nuevosErrores.correo
    );
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    const esValido = validarFormulario();
    if (!esValido) return;

    try {
      setEnviando(true);
      setMensajeOk("");

      // Si el padre provee onAgregar, lo llamamos (puede ser async)
      if (onAgregar) {
        await onAgregar(form);
      } else {
        // Si no hay handler, guardamos temporalmente en localStorage
        const existentes =
          JSON.parse(localStorage.getItem("contactos") || "[]");
        existentes.push({ ...form, id: Date.now() });
        localStorage.setItem("contactos", JSON.stringify(existentes));
      }

      setForm({
        nombre: "",
        telefono: "",
        correo: "",
        etiqueta: "",
      });

      setErrores({
        nombre: "",
        telefono: "",
        correo: "",
      });

      setMensajeOk("Contacto guardado correctamente.");
      setTimeout(() => setMensajeOk(""), 3000);
    } catch (err) {
      console.error("Error guardando contacto:", err);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <form
      className="bg-white shadow-sm rounded-2xl p-6 space-y-4 mb-8"
      onSubmit={onSubmit}
    >
      <h2 className="text-lg font-semibold text-gray-900 mb-2">
        Nuevo contacto
      </h2>

      {mensajeOk && (
        <div className="p-2 bg-green-50 border border-green-200 text-green-800 rounded-md text-sm">
          {mensajeOk}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nombre *
        </label>
        <input
          type="text"
          className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
          name="nombre"
          value={form.nombre}
          onChange={onChange}
        />
        {errores.nombre && (
          <p className="mt-1 text-xs text-red-600">{errores.nombre}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Teléfono *
        </label>
        <input
          type="text"
          className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
          name="telefono"
          value={form.telefono}
          onChange={onChange}
        />
        {errores.telefono && (
          <p className="mt-1 text-xs text-red-600">{errores.telefono}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Correo *
        </label>
        <input
          type="email"
          className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
          name="correo"
          value={form.correo}
          onChange={onChange}
        />
        {errores.correo && (
          <p className="mt-1 text-xs text-red-600">{errores.correo}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Etiqueta (opcional)
        </label>
        <input
          type="text"
          className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300"
          name="etiqueta"
          value={form.etiqueta}
          onChange={onChange}
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={enviando}
          className="w-full md:w-auto bg-purple-600 hover:bg-purple-700
            disabled:bg-purple-300 disabled:cursor-not-allowed
            text-white px-6 py-3 rounded-xl font-semibold shadow-sm"
        >
          {enviando ? "Guardando..." : "Agregar contacto"}
        </button>
      </div>
    </form>
  );
}

export default FormularioContacto;