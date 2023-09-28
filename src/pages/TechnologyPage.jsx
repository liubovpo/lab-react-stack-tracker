import { Link, useParams,useSearchParams } from "react-router-dom";

function TechnologyPage(props) {
    let { slug } = useParams();
    const [searchParams] = useSearchParams()
    const selectedTech = props.technologies.find((technology) => technology.slug === slug);
    const previousCompany = searchParams.get('previousCompany')
    console.log(previousCompany)
    if (!selectedTech) {
        // Handle the case where the technology is not found (e.g., show an error message).
        return (
            <div>
                <h1>Technology Not Found</h1>
                <p>The requested technology does not exist.</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Technology Details</h1>
            <h2>{selectedTech.name}</h2>
            <img src={selectedTech.image} style={{height:"100px"}}/>
            <p>{selectedTech.description}</p>
            <Link to={`/company/${previousCompany}`}>
            <button>Back</button>
            </Link>
        </div>
    );
}

export default TechnologyPage;
