import React, { useState, useEffect } from "react";
import { GiFruitBowl } from "react-icons/gi";
import { IoAddCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { create } from "../../actions/cmsActions";

function AddProduct() {
  const { action, status, data } = useSelector((state) => state.cmsReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    titleBook: "",
    desc: "",

    author: "",
    publisher: "",
    stock: 0,
    price: 0,
  });

  const [images, setImages] = useState([]);

  const addProductHandler = () => {
    let formData = new FormData();
    formData.append("titleBook", form.titleBook);
    formData.append("desc", form.desc);

    formData.append("author", form.author);
    formData.append("publisher", form.publisher);
    formData.append("stock", form.stock);
    formData.append("price", form.price);

    if (images.length !== 0) {
      for (const image of images) {
        formData.append("filename", image);
      }
    }
    dispatch(create(formData));
  };

  useEffect(() => {
    if (action === "CREATE" && status === "data") {
      navigate("/cms/dashboard");
    }
  }, [data]);

  const addImagesHandler = (files) => {
    setImages([...images, ...files]);
  };

  return (
    <div className="mx-auto lg:w-5/5 md:w-3/5 sm:w-96 bg-white rounded-md overflow-scroll max-h-screen py-5 no-scrollbar">
      <div className="p-5">
        <div className="py-2 text-2xl font-bold text-darkColor text-center">
          Add Product
        </div>
        <hr className="border-green-800 mx-5" />
        <div className="px-5 py-5">
          <div className="overflow-x-scroll flex space-x-8">
            {images !== undefined ? (
              Array.from(images).map((img, index) => {
                return (
                  <div
                    className="flex-shrink-0 my-5 w-36 h-36 bg-gray-100 shadow-gray-600 shadow-md text-gray-500 p-2 rounded-md cursor-pointer"
                    key={index}
                  >
                    <label
                      className="cursor-pointer custom-file-upload"
                      htmlFor="file-upload"
                    >
                      <div className="text-7xl">
                        <img
                          className="object-cover w-32 h-32"
                          src={
                            img
                              ? URL.createObjectURL(img)
                              : "https://www.w3schools.com/howto/img_avatar.png"
                          }
                        />
                      </div>
                    </label>
                    <input
                      className="hidden"
                      type="file"
                      multiple="multiple"
                      accept="image/*"
                      name="filename"
                      id="file-upload"
                      onChange={(e) =>
                        setImages([...images, ...e.target.files])
                      }
                    />
                  </div>
                );
              })
            ) : (
              <></>
            )}

            <div className="flex-shrink-0 my-5 w-36 h-36 bg-gray-100 shadow-gray-600 shadow-md text-gray-500 p-2 rounded-md cursor-pointer">
              <label
                className="cursor-pointer custom-file-upload"
                htmlFor="file-upload"
              >
                <div className="text-2xl">
                  <IoAddCircleOutline />
                </div>
                <div className="text-7xl">
                  <GiFruitBowl className="m-auto" />
                </div>
                <p className="text-center">Add photos</p>
              </label>
              <input
                className="hidden"
                type="file"
                multiple="multiple"
                accept="image/*"
                name="filename"
                id="file-upload"
                onChange={(e) => addImagesHandler(e.target.files)}
              />
            </div>
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
          ></textarea>
        </div>

        <div className="px-5 py-2">
          <label className="block text-darkColor text-lg font-bold pb-2">
            Author
          </label>
          <input
            type="text"
            className="border hover:border-green-800 focus:border-darkColor p-2 rounded-md bg-lightColor w-full"
            onChange={(e) => setForm({ ...form, author: e.target.value })}
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
          ></input>
        </div>

        <div className="px-5 py-5">
          <button
            className="text-xl py-2 border text-darkColor hover:border-midColor focus:border-midColor bg-midColor p-2 rounded-md w-full font-semibold"
            name="condition"
            id="condition"
            onClick={() => {
              addProductHandler();
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
