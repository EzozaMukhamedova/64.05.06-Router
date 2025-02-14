import React, { useState, useEffect, useContext } from "react";
import trampImage from "../../assets/tramp.jpg";
import tramniImage from "../../assets/tramni.jpg";
import daitouryouSanImage from "../../assets/daitouryou_san.jpg";
import yonnoshashinImage from "../../assets/yonnoshashin.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { useNameContext } from "../../context";
import Navbar from "../Navbar/index";

export default function Cards() {
  const [items, setItems] = useState([]);
  const { isDark } = useNameContext();

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("https://dummyjson.com/posts?limit=10");
      const data = await response.json();
      const shortenedPosts = data.posts.map((post, index) => ({
        ...post,
        body:
          post.body.length > 100 ? post.body.slice(0, 100) + "..." : post.body,
        imageUrl: [
          trampImage,
          tramniImage,
          daitouryouSanImage,
          yonnoshashinImage,
        ][index % 4],
        likes: post.likes,
        dislikes: post.dislikes,
      }));
      setItems(shortenedPosts);
    }

    fetchPosts();
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center m-4 ">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="p-4 m-2 transition duration-300 ease-in-out bg-white border border-gray-300 rounded-lg shadow-lg cursor-pointer hover:shadow-xl hover:scale-102"
            style={{
              maxWidth: "300px",
              backgroundColor: isDark ? "#172B33" : "#E2F1F6",
            }}
          >
            <img
              className="object-cover w-full h-48 rounded-t-lg"
              src={item.imageUrl}
              alt="Post Image"
            />
            <div className="p-4 w-[250px]">
              <h3 className="text-lg font-bold truncate">{item.title}</h3>
              <p className="text-gray-600">{item.body}</p>
              <div className="flex items-center justify-between mt-4">
                <button
                  className="flex items-center text-blue-500 hover:text-blue-400"
                  onClick={() => alert("Liked!")}
                >
                  <FontAwesomeIcon icon={faThumbsUp} className="mr-2" />{" "}
                  {item.likes}
                </button>
                <button
                  className="flex items-center text-red-500 hover:text-red-400"
                  onClick={() => alert("Disliked!")}
                >
                  <FontAwesomeIcon icon={faThumbsDown} className="mr-2" />{" "}
                  {item.dislikes}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
