import { Link, useParams } from "react-router-dom";
function CompanyPage(props) {

    let { companySlug } = useParams();
    const selectedCompany = props.companies.find((company)=>company.slug===companySlug)

  return (
    <div>
      <h1>Company Profile</h1>
      <img src={selectedCompany.logo} style = {{width:"100px"}}/>
      <h2>{selectedCompany.name}</h2>
      <p>{selectedCompany.description}</p>
      <div className = "techStack" >
        {props.companies.map((oneCompany)=>(
        <ul>
          <Link key={oneCompany.id} to={`/tech/${oneCompany.slug}`}>
          <li>
            <img src={oneCompany.logo} style = {{width:"50px"}}/>
            <h5>{oneCompany.name}</h5>
          </li>
          </Link>
        </ul>
        ))}
      </div>
    </div>
  );
}

export default CompanyPage;
