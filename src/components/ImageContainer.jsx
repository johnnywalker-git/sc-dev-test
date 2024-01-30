import codeImage from "../components/images/code.jpg"


const ImageContainer = () => {

return(
    <div className="absolute bottom-0 right-0 m-10">
        <img src={codeImage} alt="image of some code on a screen." className="w-40 rounded shadow-xl"/>
    </div>
)

}

export default ImageContainer