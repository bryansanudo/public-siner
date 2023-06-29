import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/configFirebase";
import spinnerImg from "@/assets/spinner.jpg";
import Section from "@/components/common/Section";
import Requirements from "@/components/Requirements";
import Label from "@/components/Label";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
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
  } = product;

  const getProduct = async () => {
    const docRef = doc(db, "expedientes", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const obj = {
        id,
        ...docSnap.data(),
      };
      setProduct(obj);
    } else {
      console.log("No such document !");
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      {product === null ? (
        <img src={spinnerImg} alt="Loaing..." className="pt-72 mx-auto" />
      ) : (
        <>
          <div className="container px-5 py-40 mx-auto flex flex-col items-center justify-between ">
            <div className="w-full text-left pl-12 md:pl-24 mb-6">
              <Link to="/get-files">&larr; Volver a expedientes</Link>
            </div>
            <div className="h-full p-6 rounded-lg flex flex-col relative overflow-hidden shadow-gray-400 w-[full] shadow-md items-center gap-5 ">
              <p className="text-3xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                <span className="mr-2">{conceptoContrato}</span>
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                <Label label="Ejercicio Fiscal" dataLabel={ejercicioFiscal} />
                <Label
                  label="No. de adjudicacion"
                  dataLabel={numeroAdjudicacion}
                />
                <Label
                  label="Tipo de adjudicacion"
                  dataLabel={tipoAdjudicacion}
                />
                <Label label="Requirente" dataLabel={requirente} />
                <Label label="No. de contrato" dataLabel={numeroContrato} />
                <Label
                  label="Proveedor adjudicado"
                  dataLabel={proveedorAdjudicado}
                />
                <Label
                  label="No. de registro de padron de proveedores"
                  dataLabel={numeroPadron}
                />
                <Label label="Monto asignado" dataLabel={montoAsignado} />
                <Label
                  label="Partida presupuestal"
                  dataLabel={partidaPresupuestal}
                />
                <Label label="Monto contratado" dataLabel={montoContratado} />
                <Label label="Monto Ejercido" dataLabel={montoEjercido} />
                <Label label="Fecha del contrato" dataLabel={fechaContrato} />
                <Label
                  label="Vigencia del contrato"
                  dataLabel={vigenciaContrato}
                />
                <Label label="Origen del recurso" dataLabel={origenRecurso} />
                <Label
                  label="Programa presupuestal"
                  dataLabel={programaPresupuestal}
                />
              </div>
            </div>
            <Requirements id={id} />
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetails;
