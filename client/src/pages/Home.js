import React from "react";
import { useQuery } from "@apollo/client";
import { Grid } from "semantic-ui-react";
import Post from "../components/Post";
import { useAuth } from "../authContext";
import CreatePost from "../components/CreatePost";
import { FETCH_POSTS } from "../util/graphql";

function Home() {
  const { loading, data } = useQuery(FETCH_POSTS);
  const { getPosts: posts } = { ...data };
  const { user } = useAuth();
  return (
    <Grid columns={3}>
      <Grid.Row>
        {user !== null && (
          <Grid.Column className="createPost">
            <CreatePost />
          </Grid.Column>
        )}
      </Grid.Row>
      <Grid.Row className="page-title">
        <h1>Recent Posts</h1>
      </Grid.Row>
      <Grid.Row>
        {loading ? (
          <h1>Loading posts...</h1>
        ) : (
          posts &&
          posts.map((post) => (
            <Grid.Column key={post.id} style={{ marginBottom: 30 }}>
              <Post post={post} />
            </Grid.Column>
          ))
        )}
      </Grid.Row>
    </Grid>
  );
}

export default Home;
