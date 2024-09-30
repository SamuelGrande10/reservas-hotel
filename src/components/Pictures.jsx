import { useEffect, useState } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Pictures = () => {
  const [file, setFile] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [listUpdated, setListUpdated] = useState(false);

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

  return (
    <div>
      <Navbar />
      <h3 className="text-center">
        Comparte tus buenos momentos compartiendo buenas fotografías
      </h3>
      <div className="container mb-2">
        <div className="card p-3">
          <div className="row">
            <div className="col-9">
              <input
                id="fileInput"
                onChange={selectedHandlerTwo}
                className="form-control"
                type="file"
              />
            </div>
            <div className="col-3">
              <button
                className="btn btn-primary col-12"
                type="button"
                onClick={sendHandler}
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container w-100 d-flex flex-wrap">
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
