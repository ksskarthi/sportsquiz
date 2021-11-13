import SubjectCard from "../components/SubjectCard";
import Header from "../components/Header";

import geoIcon from "../images/cricket.png";
import histIcon from "../images/hockey.png";
import sciIcon from "../images/badminton.png";
import spaceIcon from "../images/kabbadi.png";

function Home(props) {
    const onClick = props.onClick;
    return (
        <div>
            <Header>Choose a category to get started:</Header>
            <div className="flex flex-row flex-wrap justify-center mt-16">
                <SubjectCard
                    imgSrc={geoIcon}
                    imgAlt="An illustration of a globe"
                    subject="Cricket"
                    onClick={onClick}
                />
                <SubjectCard
                    imgSrc={histIcon}
                    imgAlt="An illustration of a shield"
                    subject="Hockey"
                    onClick={onClick}
                />
                <SubjectCard
                    imgSrc={sciIcon}
                    imgAlt="An illustration of a beaker"
                    subject="Badminton"
                    onClick={onClick}
                />
                <SubjectCard
                    imgSrc={spaceIcon}
                    imgAlt="An illustration of a meteor"
                    subject="Kabaddi"
                    onClick={onClick}
                />
            </div>
        </div>
    );
}

export default Home;
