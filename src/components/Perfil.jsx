import Navbar from "./Navbar";
import FondoPerfil from "../assets/images/login.jpg";

const Perfil = () => {
  return (
    <>
      <Navbar />
      <div>
        <section>
          <img src={FondoPerfil} alt="Perfil foto" style={{ width: 300 }} />
        </section>
        <section>
          <h3>Nombre usuario</h3>
          <p>@usuario</p>
          <p>active 6 minutes ago</p>

          <h3>Basic Info</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};

export default Perfil;
