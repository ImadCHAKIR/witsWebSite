import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import LastPosts from './LastPosts';

function Main(props) {
  const { posts, title } = props;

  return (
    <Grid
      item
      md={8}
    >
      <Divider />
      {posts.map((post) => (
        <div className=' my-7'>
          <LastPosts key={post.title} post={post}/>
        </div>
      ))}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;
