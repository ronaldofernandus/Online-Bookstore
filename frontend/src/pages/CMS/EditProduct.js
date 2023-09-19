import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { update, getProductById } from "../../actions/cmsActions";

import base_url from "../../helpers/base_url";

function EditProduct() {
  const { action, status, data } = useSelector((state) => state.cmsReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const id = Number(useParams().id);
  const url = base_url;

  const [form, setForm] = useState({
    titleBook: "",
    desc: "",
    category: "anak",
    author: "",
    publisher: "",
    stock: 0,
    price: 0,
  });

  useEffect(() => {
    if (action === "GET_PRODUCT_BY_ID" && status === "data") {
      setForm({
        titleBook: data.titleBook,
        desc: data.desc,
        category: data.category,
        author: data.author,
        publisher: data.publisher,
        stock: data.stock,
        price: data.price,
      });
    }
    // else if (action === "UPDATE" && status === "data") {
    //   dispatch(getUser());
    // }
  }, [data, dispatch]);

  useEffect(() => {
    if (action === "UPDATE" && status === "data") {
      navigate(`/cms/details/${id}`);
    }
  });

  const [images, setImages] = useState();

  const editProductHandler = () => {
    let formData = new FormData();
    console.log(form);
    formData.append("titleBook", form.titleBook);
    formData.append("desc", form.desc);
    formData.append("category", form.category);
    formData.append("author", form.author);
    formData.append("publisher", form.publisher);
    formData.append("stock", form.stock);
    formData.append("price", form.price);

    // if (images.length !== 0) {
    //   for (const image of images) {
    //     formData.append("filename", image);
    //   }
    // }

    // console.log(formData);

    dispatch(update(form, id));
  };

  useEffect(() => {
    dispatch(getProductById(id));
  }, [id]);

  return (
    <div className="mx-auto lg:w-5/5 md:w-3/5 sm:w-96 bg-white rounded-md overflow-scroll max-h-screen py-5 no-scrollbar">
      <div className="p-5">
        <div className="py-2 text-2xl font-bold text-darkColor text-center">
          Edit Product
        </div>
        <hr className="border-green-800 mx-5" />
        <div className="px-5 py-5">
          <div className="overflow-x-scroll flex space-x-8">
            {data.ProductImages !== undefined ? (
              data.ProductImages.map((img, index) => {
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 my-5 w-36 h-36 bg-gray-100 shadow-gray-600 shadow-md text-gray-500 p-2 rounded-md"
                  >
                    {/* <label
                      className="cursor-pointer custom-file-upload"
                      htmlFor="file-upload"
                    > */}
                    <div className="text-7xl">
                      <img
                        className="w-32 h-32 object-cover"
                        src={
                          img
                            ? url + "/images/" + img.filename
                            : "https://www.w3schools.com/howto/img_avatar.png"
                        }
                      />
                    </div>
                    {/* </label>
                    <input
                      className="hidden"
                      type="file"
                      multiple="multiple"
                      accept="image/*"
                      name="filename"
                      id="file-upload"
                      onChange={(e) => setImages(e.target.files)}
                    /> */}
                  </div>
                );
              })
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className="px-5 py-2">
          <label className="block text-darkColor text-lg font-bold pb-2">
            Nama Buku
          </label>
          <input
            type="text"
            className="border hover:border-green-800 focus:border-darkColor p-2 rounded-md bg-lightColor w-full"
            onChange={(e) => setForm({ ...form, titleBook: e.target.value })}
            value={form.titleBook || ""}
          ></input>
        </div>
        <div className="px-5 py-2">
          <label className="block text-darkColor text-lg font-bold pb-2">
            Description
          </label>
          <textarea
            rows="4"
            className="border hover:border-green-800 focus:border-darkColor p-2 rounded-md bg-lightColor w-full"
            onChange={(e) => setForm({ ...form, desc: e.target.value })}
            value={form.desc || ""}
          ></textarea>
        </div>
        <div className="px-5 py-2">
          <label className="block text-darkColor text-lg font-bold pb-2">
            Category
          </label>
          <select
            className="border hover:border-green-800 focus:border-darkColor p-2 rounded-md bg-lightColor w-2/5"
            name="category"
            id="category"
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            value={form.category}
          >
            <option value="parts">Anak</option>
            <option value="apparels">Remaja</option>
            <option value="apparels">Dewasa</option>
          </select>
        </div>
        <div className="px-5 py-2">
          <label className="block text-darkColor text-lg font-bold pb-2">
            Author
          </label>
          <input
            type="text"
            className="border hover:border-green-800 focus:border-darkColor p-2 rounded-md bg-lightColor w-full"
            onChange={(e) => setForm({ ...form, author: e.target.value })}
            value={form.author || ""}
          ></input>
        </div>
        <div className="px-5 py-2">
          <label className="block text-darkColor text-lg font-bold pb-2">
            Publisher
          </label>
          <input
            type="text"
            className="border hover:border-green-800 focus:border-darkColor p-2 rounded-md bg-lightColor w-full"
            onChange={(e) => setForm({ ...form, publisher: e.target.value })}
            value={form.publisher || ""}
          ></input>
        </div>
        <div className="px-5 py-2">
          <label className="block text-darkColor text-lg font-bold pb-2">
            Stock
          </label>
          <input
            type="number"
            className="border hover:border-green-800 focus:border-darkColor p-2 rounded-md bg-lightColor w-full"
            onChange={(e) => setForm({ ...form, stock: e.target.value })}
            value={form.stock || ""}
          ></input>
        </div>
        <div className="px-5 py-2">
          <label className="block text-darkColor text-lg font-bold pb-2">
            Price
          </label>
          <input
            type="number"
            className="border hover:border-green-800 focus:border-darkColor p-2 rounded-md bg-lightColor w-full"
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            value={form.price || ""}
          ></input>
        </div>

        <div className="px-5 py-5">
          <button
            className="text-2xl py-2 border text-darkColor hover:border-midColor focus:border-midColor bg-midColor p-2 rounded-md w-full font-semibold"
            name="condition"
            id="condition"
            onClick={() => {
              editProductHandler();
              // navigate("/cms/dashboard");
            }}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
