import React from "react";
import SingleDrink from "@/components/SingleDrink";
import Link from "next/link";

const SingleDrinkPage = ({ params }) => {
  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        back to drinks
      </Link>
      <SingleDrink params={params} />
    </div>
  );
};

export default SingleDrinkPage;
