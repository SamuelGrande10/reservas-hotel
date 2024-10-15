import { useEffect, useState } from "react";
import { useRef } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Pictures = () => {
  const [file, setFile] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [listUpdated, setListUpdated] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/users/seeImage")
      .then((res) => res.json())
      .then((res) => setImageList(res))
      .catch((err) => {
        console.error(err);
      });
    setListUpdated(false);
  }, [listUpdated]);

  const selectedHandlerTwo = (e) => {
    setFile(e.target.files[0]);
  };

  const sendHandler = () => {
    if (!file) {
      alert("You must upload file");
      return;
    }

    const formdata = new FormData();
    formdata.append("image", file);

    fetch("http://localhost:5000/api/users/editImage", {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.text())
      .then((res) => {
        console.log(res);
        setListUpdated(true);
      })
      .catch((err) => {
        console.error(err);
      });

    document.getElementById("fileInput").value = null;

    setFile(null);
  };

  const handleCancel = () => {
    if (!file) {
      alert("You must upload file");
      return;
    }
    // Limpiar el archivo seleccionado
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Limpiar el valor del input file
    }
    setFile(null);
  };

  return (
    <div>
      <Navbar />
      <h3 className="text-center">
        Comparte tus buenos momentos compartiendo buenas fotografías
      </h3>
      <div className="m-auto w-75">
        <div className="card p-3">
          <div className="row align-items-center">
            <div className="col-12 col-md-9 mb-2 mb-md-0">
              <input
                id="fileInput"
                onChange={selectedHandlerTwo}
                className="form-control"
                type="file"
                ref={fileInputRef}
              />
            </div>
            <div className="col-12 col-md-3 d-flex flex-column">
              <button
                className="btn btn-primary me-0 me-md-2 mb-2"
                type="button"
                onClick={sendHandler}
              >
                Guardar
              </button>
              <button
                className="btn btn-primary text-light"
                type="button"
                onClick={handleCancel}
              >
                Calcelar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items flex-wrap">
        {imageList.map((image) => (
          <div key={image} className="card m-2">
            <img
              src={"http://localhost:5000/" + image}
              alt="..."
              className="card-img-top"
              style={{ height: "200px", width: "300px" }}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Pictures;
