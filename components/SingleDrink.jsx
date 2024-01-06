import React from "react";
import Link from "next/link";
import drinkImg from "./drink.jpg";
import Image from "next/image";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getSingleDrink = async (id) => {
  const response = await fetch(`${url}${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch drink");
  }
  const data = await response.json();
  return data;
};

const SingleDrink = async ({ params }) => {
  const data = await getSingleDrink(params.id);
  console.log(data);
  const title = data?.drinks[0]?.strDrink;
  const imgSrc = data?.drinks[0]?.strDrinkThumb;

  return (
    <>
      <h1 className="text-4xl mb-8">{title}</h1>
      <Image
        src={imgSrc}
        width={300}
        height={300}
        className="w-48 h-48 shadow-lg rounded-lg mb-4"
        priority
        alt={title}
      />
      {/* <Image src={drinkImg} className="w-48 h-46 rounded" alt="" /> */}
    </>
  );
};

export default SingleDrink;
