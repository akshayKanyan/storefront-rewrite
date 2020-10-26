import React from "react";
import { H1, H2, H3, P1, P2, P3 } from "../../components/reusableComponents/typography";
import axios from "axios";
export const getStaticProps = async (context) => {
  let productData = await axios
    .get(
      `https://3pupscript.globexcorp.net/wp-json/wp/v2/pages/?slug=treatment-for-hairloss`
    )
    .then((_) => {
      let { data = [] } = _;
      console.log("abcd", data);
      let { ACF } = data[0];
      return ACF || {};
    });

  return {
    revalidate: 10,
    props: {
        productData,
    },
  };
};

export async function getStaticPaths() {
    return {
      paths: [
         // See the "paths" section below
      ],
      fallback: true // See the "fallback" section below
    };
}

export default function Product( { productData= {} } ) {
    console.log("sss", productData);
    return (
        <div>
            <H1>abcd</H1>
            <H2>efgh</H2>
            <H3>ijkl</H3>
            <P1>mnop</P1>
            <P2>qrst</P2>
            <P3>uvwx</P3>
        </div>
    );
}
