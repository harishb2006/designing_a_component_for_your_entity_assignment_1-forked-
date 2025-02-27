
import Img from "../assets/240_F_247193259_upeTuQAuV0wpjeuOJ8WItMHAQET2aJhL.jpg";

const Usercard = () => {
  
  const name = "Harish";
  const email = "imharish@gmail.com";
  const phone = "80722286633";
  const address = "Chennai";

  return (
    <div className="flex justify-center items-center mt-[100px] ">
      <div className="bg-white drop-shadow-2xl rounded-xl p-4  text-center border">
        <img
          src={Img}
          alt="Profile"
          
        />
        <h1 className="text-lg font-semibold">{name}</h1>
        <p className="text-gray-600">{email}</p>
        <p className="text-gray-600">{phone}</p>
        <p className="text-gray-600">{address}</p>
      </div>
    </div>
  );
};

export default Usercard;
