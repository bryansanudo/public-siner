import React, { useEffect, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { db, storage } from "@/configFirebase";
import { HiOutlineCloudArrowUp } from "react-icons/hi2";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { MdLibraryAdd } from "react-icons/md";
import { ImEyePlus } from "react-icons/im";
import { GoDesktopDownload } from "react-icons/go";
import { FaExchangeAlt } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { v4 } from "uuid";
import { toast } from "react-toastify";

const Requirements = ({ id }) => {
  const [data, setData] = useState({});

  const [titulo, setTitulo] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [urlFile, setUrlFile] = useState("");

  const getData = async () => {
    const docRef = doc(db, "expedientes", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setData(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  const uploadFile = async () => {
    /* const storageRef = ref(storage, v4());

    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
 */

    const x = { ...data };
    console.log(x);

    const productEdit = x.requisitos.find((item) => item.titulo === titulo);
    let index = productEdit.index;

    console.log(urlFile);

    x.requisitos[index].urlFile = urlFile;
    x.requisitos[index].estatus = true;

    console.log(x);

    try {
      setDoc(doc(db, "expedientes", id), x);

      toast.success("Requisito actualizado con exito");
    } catch (error) {
      toast.error(error.message);
    }
    setTitulo("");
    setUploadProgress(0);
  };

  const handleImageChange = (e) => {
    setTitulo(e.target.name);
    const file = e.target.files[0];

    const storageRef = ref(storage, `requisitos/${Date.now()}${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        toast.error(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUrlFile(downloadURL);
          toast.success("Documento subido con exito");
        });
      }
    );
  };

  const deleteFile = (e) => {
    let titleDelete = e.target.id;

    const y = { ...data };

    const productEdit = y.requisitos.find(
      (item) => item.titulo === titleDelete
    );

    console.log(productEdit);
    let index = productEdit.index;

    let deleteURL = y.requisitos[index].urlFile;

    y.requisitos[index].urlFile = "";
    y.requisitos[index].estatus = false;

    try {
      setDoc(doc(db, "expedientes", id), y);
      const storageRef = ref(storage, deleteURL);
      deleteObject(storageRef);

      toast.success("Requisito eliminado del expediente");
    } catch (error) {
      toast.error(error.message);
    }
    setTitulo("");
  };

  useEffect(() => {
    getData();
  }, [data]);

  return (
    <>
      <div className="container px-5 py-20 mx-auto flex flex-col items-center justify-between ">
        <div className=" w-full flex flex-col gap-8 items-stretch ">
          {uploadProgress === 0 ? null : (
            <div className="bg-[#aaa] border-[1px] border-[solid] rounded-[10px] w-[600px] mx-auto">
              <div
                className="bg-primary border-[1px] border-[solid] rounded-[10px] text-white text-sm font-semibold py-0 px-[1rem]"
                style={{ width: `${uploadProgress}%` }}
              >
                {uploadProgress < 100
                  ? `Subiendo ${uploadProgress}%`
                  : `Subida completada ${uploadProgress}%`}
              </div>
            </div>
          )}
          {data.requisitos?.map((r) => (
            <div
              key={r.titulo}
              className="flex flex-col md:flex-row p-4 rounded-xl justify-start md:justify-between items-start md:items-center mx-auto shadow-gray-400 shadow-md gap-6 "
            >
              <div className="w-[150px]">{r.titulo}</div>

              <div className="flex items-center gap-2">
                <article className="flex items-center justify-center gap-2">
                  Doc:
                  {r.estatus ? (
                    <>
                      <div className="bg-green-500 w-4 h-4 rounded-full" />
                      <span className="text-green-500">Disponible</span>
                    </>
                  ) : (
                    <>
                      <div className="bg-red-500 w-4 h-4 rounded-full" />
                      <span className="text-red-500">No Disponible</span>
                    </>
                  )}
                </article>
              </div>

              {/* <div className="w-[200px] bg-red-500 rounded-tr-xl text-center rounded-br-xl ">
                Solv. NO
              </div> */}
              <div className="flex items-center gap-4 ">
                {r.estatus ? (
                  ""
                ) : (
                  <>
                    <input
                      type="file"
                      className="file-input file-input-primary"
                      onChange={(e) => handleImageChange(e)}
                      name={r.titulo}
                    />
                  </>
                )}

                {r.estatus ? (
                  ""
                ) : (
                  <div
                    onClick={uploadFile}
                    className="bg-gray-200 p-3 rounded-full cursor-pointer hover:scale-125 duration-700"
                  >
                    <HiOutlineCloudArrowUp className="text-3xl" />
                  </div>
                )}
                {r.estatus ? (
                  <div className="flex items-center justify-center gap-4">
                    <a
                      href={r.urlFile}
                      target="_blank"
                      className="bg-gray-200 p-3 rounded-full cursor-pointer hover:scale-125 duration-700"
                    >
                      <ImEyePlus className="text-3xl" />
                    </a>
                    <div
                      id={r.titulo}
                      onClick={deleteFile}
                      className="bg-gray-200 p-3 rounded-full cursor-pointer hover:scale-125 duration-700 group text-[20px] "
                    >
                      {/* <RiDeleteBin6Line className="text-3xl group" /> */}🗑
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Requirements;
