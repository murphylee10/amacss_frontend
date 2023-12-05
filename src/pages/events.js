import React from "react";
import { graphql } from "gatsby";

import Loadable from "react-loadable";
import Post from "../components/sections/IGposts";

import Layout from "@common/Layout";
import Navbar from "@common/Navbar";
import Footer from "@sections/Footer";

const Calendar = Loadable({
  loader: () => import("../components/sections/Schedule"),
  loading() {
    return <div>Loading Calendar!</div>;
  },
});

const EventsPage = ({ data }) => (
  <Layout>
    <Navbar />
    <Calendar />
    <Post />
    <Footer />
  </Layout>
);

<<<<<<< Updated upstream
export const query = graphql`
    query {
        allInstaNode (
            sort: {fields: timestamp, order: DESC}
            filter: {mediaType: {eq: "IMAGE"} } 
            ) {
            edges {
                node {
                    id
                    permalink
                    timestamp
                    caption
                    mediaType
                    localFile {
                        childImageSharp {
                            fluid(maxWidth: 600) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    }
`;
=======
// export const query = graphql`
//   query {
//     allInstaNode(
//       sort: { fields: timestamp, order: DESC }
//       filter: { mediaType: { ne: "VIDEO" } }
//     ) {
//       edges {
//         node {
//           id
//           permalink
//           timestamp
//           caption
//           mediaType
//           localFile {
//             childImageSharp {
//               fluid(maxWidth: 600) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;
>>>>>>> Stashed changes

export default EventsPage;
