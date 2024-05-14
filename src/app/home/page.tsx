import FontText from "../../shared/components/FontText";
import ImageComponent from "../../shared/components/Image";
import nextImg from "../../../public/next.svg";
import DataComponent from "../../shared/components/DataComponent";
const TODO_API= "https://jsonplaceholder.typicode.com/todos";
const Home = () =>{
    return (
        <>
            <FontText bold fSize8 color="green">
            Home Page
            </FontText>
            <ImageComponent imgsrc={nextImg} altText="ImageDemo"/>
            <br/><br/><br/>
            <DataComponent dataurl={TODO_API} />
        </>
    )
}
export default Home;