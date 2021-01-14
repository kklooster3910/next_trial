import React from "react";
import { useRouter } from "next/router";

// catch all routes pattern

const Page = () => {
  const router = useRouter();
  const { params } = router?.query;

  const allRoutes = params?.map((r, i) => <div key={i}>{r}</div>);
  const returnString = `Note page with query param:`;

  return (
    <div>
      {returnString}
      <div>{allRoutes}</div>
    </div>
  );
};

export default Page;
