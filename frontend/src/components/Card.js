import React from "react";
// import { useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import intToRupiah from "../helpers/rupiah";
import base_url from "../helpers/base_url";

function Card(props) {
  // const [showOptions, setShowOptions] = useState(false);
  // const navigate = useNavigate();
  const data = props.product;
  const url = base_url;
  return (
    <div>
      <div className="w-48 h-80 bg-lightColor rounded-md shadow-sm shadow-neutral-500 hover:shadow-inner hover:inner cursor-pointer mx-auto">
        <img
          className="w-48 h-48 rounded-t-md object-cover"
          alt=""
          src={`${url}/images/${data.ProductImages[0].filename}`}
        />
        <ul>
          <li>Judul Buku : {data.titleBook}</li>
          <li>Author :{data.author} </li>
          <li>Publisher :{data.publisher} </li>
          <li>Stock : {data.stock}</li>
          <li>Price :{data.price}</li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
