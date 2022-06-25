import image from "../../images/toskav3.png"

const Introduction = () => {
    return (
        <div className="flex justify-start items-start">
            <div className="flex flex-col px-52">
            <img src={image} alt="image" className="w-72 h-92" />
             </div>
        </div>
    );
}

export default Introduction;