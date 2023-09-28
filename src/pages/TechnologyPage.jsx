import { Link, useParams } from "react-router-dom";

function TechnologyPage(props) {
    let { slug } = useParams();
    const selectedTech = props.technologies.find((technology) => technology.slug === slug);
console.log(slug)
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
            <img src={selectedTech.image} />
            <p>{selectedTech.description}</p>
        </div>
    );
}

export default TechnologyPage;
