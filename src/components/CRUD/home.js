import axios from "axios";





  return (
    <>
      <div className="pt-5">
        <table className="table">
          <thead>
            <tr className="bg-dark text-white">
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody className="table-group-divider ">
           
              <tr>
                <th scope="row"> {index + 1} </th>
                <td></td>
                <td>l;kj;k</td>
                <td> hgfjjk</td>
                <td>
                  <Link className="btn btn-primary m-2" to="#">
                    addUsers
                  </Link>
                  <Link
                    className="btn btn-primary"
                    to="#"
                  >
                    EditUsers
                  </Link>

                  <Link className="btn btn-danger m-2" to="#">
                    DeleteUsers
                  </Link>
                </td>
              </tr>
          
          </tbody>
        </table>
      </div>
    </>
  );

export default Home;
