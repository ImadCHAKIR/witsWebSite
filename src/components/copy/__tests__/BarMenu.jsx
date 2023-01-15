import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import GroupIcon from '@mui/icons-material/Group';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const menuList = [
    {'text':'Inbox'             ,'balise':<InboxIcon />}, 
    {'text':'New message'       ,'balise':<MailIcon />}, 
    {'text':'All normal users'  ,'balise':<PeopleOutlineIcon/>}, 
    {'text':'All premium users' ,'balise':<GroupIcon />},
    {'text':'statistics'        ,'balise':<InsertChartIcon />},
    {'text':'Spam'              ,'balise':<ReportGmailerrorredIcon />}, 
    {'text':'Drafts'            ,'balise':<InsertDriveFileOutlinedIcon />}
  ]

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menuList.map((item) => (
          <div>
            <ListItem key={item.text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {item.balise}
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
            <Divider/ >
          </div>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 0 }}
            >
              <MenuIcon />
            </IconButton>  
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}