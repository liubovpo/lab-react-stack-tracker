
import { Link } from "react-router-dom";
function HomePage(props) {
  // const {name, logo} = companies;
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <ul style = {{display: "flex", flexWrap:"wrap", justifyContent:"space-between"}}>
        {props.companies.map((oneCompany)=>(
          
          <Link key={oneCompany.id} to={`/company/${oneCompany.slug}`}>
          <li style = {{margin: "50px"}}>
          <h2>{oneCompany.name}</h2>
          <img src={oneCompany.logo} alt="Logo" style = {{width:"150px"}}/>
          </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
