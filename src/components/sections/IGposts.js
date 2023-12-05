import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Post = () => {
  const posts = useStaticQuery(
    graphql`
      query {
        allInstaNode(
          sort: { fields: timestamp, order: DESC }
          filter: { mediaType: { ne: "VIDEO" } }
        ) {
          edges {
            node {
              id
              permalink
              timestamp
              caption
              mediaType
              localFile {
                publicURL
              }
            }
          }
        }
      }
    `
  ).allInstaNode.edges;

  return (
    <div>
      <Feed>
        {posts.map(({ node }) => {
          const { id, caption, permalink, localFile, timestamp, mediaType } =
            node;

          return (
            <div className="post" key={id}>
              <a href={permalink}>
                <img
                  className="image"
                  src={localFile.publicURL}
                  alt={caption}
                />
              </a>

              {/* <div className="caption">
              <p>{caption}</p>
              <a href={permalink} target="_blank" rel="noopener noreferrer">
                View on Instagram
              </a>
            </div> */}
            </div>
          );
        })}
      </Feed>
    </div>
  );
};
export default Post;

export const Feed = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .post {
    margin: irem;
    width: calc(25% - 2rem);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;

    .image {
      width: 100%;
      height: auto;
      display: block;
    }

    &:hover {
      transform: scale(1.05);
    }

    .caption {
      padding: irem;
    }
  }
`;
