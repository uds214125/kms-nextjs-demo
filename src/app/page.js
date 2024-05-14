// 'use client'

import HomeLayout from "./home/layout";
import Home from "./home/page";

// // import Image from 'next/image'
// // import styles from './page.module.css'
// // import Container from '@mui/material/Container';
// // export default function Home() {
// //   return (
// //     <React.Fragment>
// //     <CssBaseline />
// //     <Container maxWidth="sm">
// //       <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
// //     </Container>
// //     </React.Fragment>
// //   )
// // }
// import * as React from 'react';
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import HomeIcon from '@mui/icons-material/Home';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import ListAltIcon from '@mui/icons-material/ListAlt';
// import TextsmsIcon from '@mui/icons-material/Textsms';
// import PeopleIcon from '@mui/icons-material/People';
// import Face5Icon from '@mui/icons-material/Face5';
// import SettingsIcon from '@mui/icons-material/Settings';
// import HomeWorkIcon from '@mui/icons-material/HomeWork';

// const drawerWidth = 240;

// const Main = styled('main')(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: `-${drawerWidth}px`,
//     ...(open && {
//       transition: theme.transitions.create('margin', {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     }),
//   }),
// );

// const AppBar = styled(MuiAppBar)(({ theme, open }) => ({
//   transition: theme.transitions.create(['margin', 'width'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: 'flex-end',
// }));
// const TopHeader = styled('div')(()=>({
//   display: 'flex',
//   flexDirection: 'row',
//   justifyContent: 'space-between',
//   alignItems: 'center'
// }));
// const MainMenu = styled('div')(()=>({
//   display: 'flex',
//   flexDirection: 'colmun',  
//   alignItems: 'center',
//   height: '70%'
// }));
// const FooterMenu = styled('div')(()=>({
//   display: 'flex',
//   flexDirection: 'column'
// })); 
// export default function Home() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(true);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };
//   const mainMenus = [{name:'Home', icon: <HomeWorkIcon />}, {name:'Calendar', icon: <CalendarMonthIcon />}, {name:'Curriculum', icon: <ListAltIcon />}, {name:'Messages', icon: <TextsmsIcon />},{name:'Educators', icon: <PeopleIcon />},{name:'Children', icon: <Face5Icon />}];
//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{ mr: 2, ...(open && { display: 'none' }) }}
//           >
//             <MenuIcon />
//           </IconButton>
//           {/* <Typography variant="h6" noWrap component="div">
//             Persistent drawer
//           </Typography> */}
//           <TopHeader>
            
//               <Typography variant="h6" noWrap component="div">
//                 Cancel
//               </Typography>
            
//               <Typography variant="h6" noWrap component="div">
//                 User
//               </Typography>
            
//           </TopHeader>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         sx={{
//           // backgroundColor: '#094e0b !important',
//           // color: '#fff',
//           width: drawerWidth,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//             boxSizing: 'border-box',
//           },
//         }}
//         variant="persistent"
//         anchor="left"
//         open={open}
//       >
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <MainMenu>
//         <List>
//           {mainMenus.map((menu, index) => (
//             <ListItem key={menu.name} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                    {menu.icon}
//                 </ListItemIcon>
//                 <ListItemText primary={menu.name} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//         </MainMenu>
//         <FooterMenu>
//         <Divider />
//         <List>
//           {[{name:'Settings', icon: <SettingsIcon />}, {name: 'ECD centers', icon: <HomeIcon />}].map((menu, index) => (
//             <ListItem key={menu.name} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   {menu.icon}
//                 </ListItemIcon>
//                 <ListItemText primary={menu.name} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//         </FooterMenu>
//       </Drawer>
//       <Main open={open}>
//         <DrawerHeader />         
//       </Main>
//     </Box>
//   );
// }
export default function Page() {
  return <>
    <h1>Hello, Next.js! App Router</h1>
    <Home />
  </>
}