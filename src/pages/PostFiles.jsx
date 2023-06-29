import { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "@/configFirebase";
import { MdLibraryAdd } from "react-icons/md";
import { toast } from "react-toastify";

import Input from "@/components/Input";

const initialState = {
  ejercicioFiscal: "",
  numeroAdjudicacion: "",
  conceptoContrato: "",
  tipoAdjudicacion: "",
  requirente: "",
  numeroContrato: "",
  proveedorAdjudicado: "",
  numeroPadron: "",
  montoAsignado: "",
  partidaPresupuestal: "",
  montoEjercido: "",
  montoContratado: "",
  fechaContrato: "",
  vigenciaContrato: "",
  origenRecurso: "",
  programaPresupuestal: "",
};

const PostFiles = () => {
  const [file, setFile] = useState({ ...initialState });
  const {
    ejercicioFiscal,
    numeroAdjudicacion,
    conceptoContrato,
    tipoAdjudicacion,
    requirente,
    numeroContrato,
    proveedorAdjudicado,
    numeroPadron,
    montoAsignado,
    partidaPresupuestal,
    montoEjercido,
    montoContratado,
    fechaContrato,
    vigenciaContrato,
    origenRecurso,
    programaPresupuestal,
  } = file;

  const handleChange = (e) => {
    setFile({ ...file, [e.target.name]: e.target.value });
  };

  const postFile = async (e) => {
    e.preventDefault();
    console.log(file);

    try {
      const docRef = addDoc(collection(db, "expedientes"), {
        ejercicioFiscal: file.ejercicioFiscal,
        numeroAdjudicacion: file.numeroAdjudicacion,
        conceptoContrato: file.conceptoContrato,
        tipoAdjudicacion: file.tipoAdjudicacion,
        requirente: file.requirente,
        numeroContrato: file.numeroContrato,
        proveedorAdjudicado: file.proveedorAdjudicado,
        numeroPadron: file.numeroPadron,
        montoAsignado: file.montoAsignado,
        partidaPresupuestal: file.partidaPresupuestal,
        montoEjercido: file.montoEjercido,
        montoContratado: file.montoContratado,
        fechaContrato: file.fechaContrato,
        vigenciaContrato: file.vigenciaContrato,
        origenRecurso: file.origenRecurso,
        programaPresupuestal: file.programaPresupuestal,
        createdAt: Timestamp.now().toDate(),
        requisitos: [
          {
            titulo: "Programa Anual de Adquisiciones",
            estatus: false,
            urlFile: "",
            index: 0,
          },
          {
            titulo:
              "Requisición del bien, servicio y/ó arrendamiento (monto histórico)",
            estatus: false,
            urlFile: "",
            index: 1,
          },
          {
            titulo: "Oficio de solicitud de suficiencia presupuestal",
            estatus: false,
            urlFile: "",
            index: 2,
          },
          {
            titulo: "Oficio de autorización de suficiencia presupuestal",
            estatus: false,
            urlFile: "",
            index: 3,
          },
          {
            titulo:
              "Constancia de no existir trabajos relacionados (consultoría, asesoría, estudios e investigación)",
            estatus: false,
            urlFile: "",
            index: 4,
          },
          {
            titulo: "Solicitud de cotizaciones",
            estatus: false,
            urlFile: "",
            index: 5,
          },
          {
            titulo: "Cotizaciones (en su caso)",
            estatus: false,
            urlFile: "",
            index: 6,
          },
          {
            titulo:
              "Cuadro comparativo de al menos dos cotizaciones (en su caso)",
            estatus: false,
            urlFile: "",
            index: 7,
          },
          {
            titulo:
              "Dictamen de Justificación de excepción a la Licitación Pública",
            estatus: false,
            urlFile: "",
            index: 8,
          },
          {
            titulo: "Constancia de inscripción al padrón de proveedores",
            estatus: false,
            urlFile: "",
            index: 9,
          },
          {
            titulo: "Constancia de no inhabilitado",
            estatus: false,
            urlFile: "",
            index: 10,
          },
          {
            titulo: "Escritura constitutiva en el caso de persona moral",
            estatus: false,
            urlFile: "",
            index: 11,
          },
          {
            titulo:
              "Acta de nacimiento o carta de naturalización en el caso de persona fisica/CURP)",
            estatus: false,
            urlFile: "",
            index: 12,
          },
          {
            titulo: "Poder General del Representante Legal",
            estatus: false,
            urlFile: "",
            index: 13,
          },
          {
            titulo: "Identificación Oficial Vigente",
            estatus: false,
            urlFile: "",
            index: 14,
          },
          {
            titulo: "Comprobante de Domicilio",
            estatus: false,
            urlFile: "",
            index: 15,
          },
          {
            titulo:
              "Declaración escrita bajo protesta de decir verdad, no encontrarse en alguno se los supuestos establecidos por el articulo 77 de la LAASSPEM",
            estatus: false,
            urlFile: "",
            index: 16,
          },
          {
            titulo: "Inscripción al Registro Federal de Contribuyentes",
            estatus: false,
            urlFile: "",
            index: 17,
          },
          {
            titulo: "Carta de exclusividad en su caso",
            estatus: false,
            urlFile: "",
            index: 18,
          },
          {
            titulo: "Curriculum Empresarial",
            estatus: false,
            urlFile: "",
            index: 19,
          },
          {
            titulo:
              "Declaración de pago de impuestos federales correspondientes a ejercicios anuales, semestrales, trimestrales o mensuales y/ó informes de instituciones financieras",
            estatus: false,
            urlFile: "",
            index: 20,
          },
          {
            titulo: "Opinión de cumplimiento de obligaciones fiscales SAT",
            estatus: false,
            urlFile: "",
            index: 21,
          },
          {
            titulo:
              "Opinión de Cumplimiento en materia de seguridad social IMSS (en el caso de que aplique)",
            estatus: false,
            urlFile: "",
            index: 22,
          },
          {
            titulo:
              "Constancia de situación fiscal INFONAVIT (en el caso de que aplique)",
            estatus: false,
            urlFile: "",
            index: 23,
          },
          {
            titulo: "Notificación a la Contraloría",
            estatus: false,
            urlFile: "",
            index: 24,
          },
          {
            titulo:
              "Oficio de notificación al proveedor de bienes y/o servicios",
            estatus: false,
            urlFile: "",
            index: 25,
          },
          {
            titulo: "Contrato",
            estatus: false,
            urlFile: "",
            index: 26,
          },
          {
            titulo:
              "Oficio por el que se remiten al Comité Municipal, copias de los pedidos formalizados de los contratos que se celebren, de las modificaciones que a estos se realicen, así como de la fianza o garantía que se otorgue",
            estatus: false,
            urlFile: "",
            index: 27,
          },
          {
            titulo:
              "Oficio mediante el se comunica al Comité Municipal la recepción bienes, servicios y/ó arrendamientos",
            estatus: false,
            urlFile: "",
            index: 28,
          },
          {
            titulo: "Garantía del anticipo (para el caso que aplique)",
            estatus: false,
            urlFile: "",
            index: 29,
          },
          {
            titulo: "Garantía de cumplimiento y posibles vicios ocultos",
            estatus: false,
            urlFile: "",
            index: 30,
          },
          {
            titulo:
              "Documento en el que conste la recepción del bien, servicio y/o arrendamiento",
            estatus: false,
            urlFile: "",
            index: 31,
          },
          {
            titulo: "Entregables",
            estatus: false,
            urlFile: "",
            index: 32,
          },
          {
            titulo: "Reporte Fotográfico (para el caso que aplique)",
            estatus: false,
            urlFile: "",
            index: 33,
          },
          {
            titulo: "Orden de Pago",
            estatus: false,
            urlFile: "",
            index: 34,
          },
          {
            titulo: "Factura (s)",
            estatus: false,
            urlFile: "",
            index: 35,
          },
          {
            titulo: "Validación de la factura SAT",
            estatus: false,
            urlFile: "",
            index: 36,
          },
          {
            titulo: "Póliza contable",
            estatus: false,
            urlFile: "",
            index: 37,
          },
        ],
      });

      setFile({ ...initialState });

      toast.success("Expediente Creado");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <section className="container px-5 py-40 mx-auto flex flex-col items-center justify-between overflow-hidden ">
        <h1 className="sm:text-4xl text-3xl mb-10 text-primary">
          Crear Expediente
        </h1>

        <form className=" flex flex-col p-10 gap-4 w-full">
          <div className="grid grid-cols-2 gap-6 ">
            <Input
              label="Ejercicio fiscal"
              name="ejercicioFiscal"
              handleChange={handleChange}
              value={ejercicioFiscal}
            />
            <Input
              label="No. adjudicacion"
              name="numeroAdjudicacion"
              handleChange={handleChange}
              value={numeroAdjudicacion}
            />
          </div>
          <Input
            label="Concepto del contrato"
            name="conceptoContrato"
            handleChange={handleChange}
            value={conceptoContrato}
          />
          <Input
            label="Tipo de adjudicacion"
            name="tipoAdjudicacion"
            handleChange={handleChange}
            value={tipoAdjudicacion}
          />
          <div className="grid grid-cols-2 gap-6 ">
            <Input
              label="Requirente"
              name="requirente"
              handleChange={handleChange}
              value={requirente}
            />
            <Input
              label="No. de contrato"
              name="numeroContrato"
              handleChange={handleChange}
              value={numeroContrato}
            />
          </div>
          <div className="grid grid-cols-2 gap-6 ">
            <Input
              label="Proveedor adjudicado"
              name="proveedorAdjudicado"
              handleChange={handleChange}
              value={proveedorAdjudicado}
            />
            <Input
              label="No. Padrón Proveedores"
              name="numeroPadron"
              handleChange={handleChange}
              value={numeroPadron}
            />
          </div>
          <div className="grid grid-cols-2 gap-6 ">
            <Input
              label="Monto Asignado"
              name="montoAsignado"
              handleChange={handleChange}
              value={montoAsignado}
            />
            <Input
              label="Partida Presupuestal"
              name="partidaPresupuestal"
              handleChange={handleChange}
              value={partidaPresupuestal}
            />
          </div>
          <div className="grid grid-cols-2 gap-6 ">
            <Input
              label="Monto Contratado"
              name="montoContratado"
              handleChange={handleChange}
              value={montoContratado}
            />
            <Input
              label="Monto Ejercido"
              name="montoEjercido"
              handleChange={handleChange}
              value={montoEjercido}
            />
          </div>
          <div className="grid grid-cols-2 gap-6 ">
            <Input
              label="Fecha de Contratado"
              name="fechaContrato"
              handleChange={handleChange}
              value={fechaContrato}
            />
            <Input
              label="vigencia del contrato"
              name="vigenciaContrato"
              handleChange={handleChange}
              value={vigenciaContrato}
            />
          </div>
          <div className="grid grid-cols-2 gap-6 ">
            <Input
              label="Origen del Recurso"
              name="origenRecurso"
              handleChange={handleChange}
              value={origenRecurso}
            />
            <Input
              label="Programa Presupuesal"
              name="programaPresupuestal"
              handleChange={handleChange}
              value={programaPresupuestal}
            />
          </div>

          <button
            onClick={postFile}
            className="flex items-center justify-center gap-4 mt- 
                mt-10 text-white bg-black border-0 py-2 px-4 w-[130px] focus:outline-none  hover:scale-105 duration-300 rounded"
          >
            Crear
            <MdLibraryAdd />
          </button>
        </form>
      </section>
    </>
  );
};

export default PostFiles;
