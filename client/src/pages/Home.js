import React from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { Grid } from "semantic-ui-react";
import Post from "../components/Post";

function Home() {
  const { loading, data } = useQuery(FETCH_DATA);
  const { getPosts: posts } = { ...data };
  return (
    <Grid columns={3} divided>
      <Grid.Row>
        <h1>Recent Posts</h1>
      </Grid.Row>
      <Grid.Row>
        {loading ? (
          <h1>Loading posts...</h1>
        ) : (
          posts &&
          posts.map((post) => (
            <Grid.Column key={post.id}>
              <Post post={post} />
            </Grid.Column>
          ))
        )}
      </Grid.Row>
    </Grid>
  );
}

const FETCH_DATA = gql`
  {
    getPosts {
      id
      body
      username
      createdAt
      comments {
        id
        createdAt
        username
        body
      }
      likes {
        username
      }
      likeCount
      commentCount
    }
  }
`;
export default Home;
