import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from '../blog/MainFeaturedPost';
import FeaturedPost from '../blog/FeaturedPost';
import Sidebar from '../blog/Sidebar';
import Footer from '../blog/Footer';    
import Header from '../blog/Header';
import { useFetch, useLazyFetch } from '../hooks';
import Divider from '@mui/material/Divider';
import LastPosts from '../blog/LastPosts';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import {witsHTTPSettings} from '../data/witsHTTPSettings';

const mainFeaturedPost = {
  title: 'Stay curious',
  description:
    "Discover stories, thinking, and expertise from writers on any topic.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Start reading',
};

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const theme = createTheme();

export default function Home() {
  const [pageNumber, setPageNumber] = React.useState(0);
  
  const posts = useLazyFetch(witsHTTPSettings.posts,pageNumber);
  const trendingPosts = useFetch(witsHTTPSettings.trendingPosts)
  const sections = useFetch(witsHTTPSettings.sections)
  
  const observer = React.useRef();
  const lastPostElement = React.useCallback((node)=>{
    if (posts.loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries=>{
      if (entries[0].isIntersecting && posts.hasMore){
        setPageNumber(prevPageNumber =>prevPageNumber+1)
      }
    })
    if (node) observer.current.observe(node)
  },[posts.loading,posts.hasMore]);

  

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header posts={posts} sections={sections.data.sort((a, b) => 0.5 - Math.random()).slice(0,10)}/>

        <main>
          <MainFeaturedPost post={mainFeaturedPost} />

          <div className='flex flex-row justify-between items-center mb-10'>
            <div className='w-5/12 border-t-2 border-black border-solid ml-10 mr-10'></div>
            <h1 className=' w-80 font-bold text-2xl'>TRENDING ON WITS</h1>
            <div className='w-5/12 border-t-2 border-black border-solid ml-10 mr-10'></div>
          </div>

          <Grid container spacing={4}>
            {trendingPosts.data.map((post) => (
              <FeaturedPost key={post.title} post={post}/>
            ))}
          </Grid>

          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Grid
              item
              md={8}
            >
              <Divider />
              {posts.data.map((post,index) => {
                if (posts.data.length === index+1){
                  return(
                    <div className=' my-7' ref={lastPostElement} key={post.title}>
                      <LastPosts post={post}/>
                    </div>
                  )
                }else{
                  return(
                    <div className=' my-7' key={post.title}>
                      <LastPosts key={post.title} post={post}/>
                    </div>
                  )
                }
                
              })}
              {posts.loading && 
                <Box sx={{ display:'flex',justifyContent:'space-between' }} key='squelettePost'>
                  <Box>
                    <Skeleton variant="rounded" width={500} height={40} sx={{ my:1,mx:2 }}/>
                    <Skeleton variant="rounded" width={500} height={130} sx={{ mx:2 }}/>
                  </Box>
                  <Skeleton sx={{ height: 190,width:160 }} animation="wave" variant="rectangular" />
                </Box>
              }
            </Grid>

            
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sections.data}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>

      <Footer
        title=""
        description=""
      />
    </ThemeProvider>
  );
}
