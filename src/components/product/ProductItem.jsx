import { Link } from "react-router-dom";
import Label from "@/components/Label";
import { TbListDetails } from "react-icons/tb";
const ProductItem = ({
  product,
  grid,
  id,
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
}) => {
  const shortenText = (text, n) => {
    if (text.length > n) {
      const shortenedText = text.substring(0, n).concat("...");
      return shortenedText;
    }
    return text;
  };
  {
    /* <Link to={`/product-details/${id}`}> */
  }
  return (
    <>
      <div
        key={numeroAdjudicacion}
        className="h-full p-6 rounded-lg flex flex-col  relative overflow-hidden shadow-gray-400 w-[full] shadow-md items-center justify-between "
      >
        <p className="text-3xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
          {conceptoContrato}
        </p>

        <div className="grid grid-cols-1 ">
          <Label
            label="Ejercicio Fiscal"
            dataLabel={ejercicioFiscal}
            className={"flex gap-2 items-center justify-end"}
          />
          <Label
            label="Numero de adjudicacion"
            dataLabel={numeroAdjudicacion}
            className={"flex gap-2 items-center justify-end"}
          />
          <Label
            label="Requirente"
            dataLabel={requirente}
            className={"flex gap-2 items-center justify-end"}
          />
          <Label
            label="Numero de contrato"
            dataLabel={numeroContrato}
            className={"flex gap-2 items-center justify-end"}
          />
          <Label
            label="Tipo de adjucicacions"
            dataLabel={tipoAdjudicacion}
            className={"flex gap-2 items-center justify-end"}
          />
        </div>

        <div className="flex items-center gap-8 mt-10">
          <div className="flex flex-col text-center gap-2 mt-4">
            <p className="font-bold">Integracion Documental</p>
            <progress
              className="progress progress-error w-full "
              value={50}
              max="100"
            />
            <span className="text-error font-bold">{50}%</span>
          </div>
          <Link to={`/product-details/${id}`}>
            <button
              className="flex items-center justify-center gap-4 
                  mt-4 text-white bg-black border-0 py-2 px-4 w-[130px] focus:outline-none  hover:scale-105 duration-300 rounded"
            >
              Detalles
              <TbListDetails />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
