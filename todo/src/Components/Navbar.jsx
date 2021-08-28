import React from "react";
import {Typography,Toolbar,AppBar,Button} from "@material-ui/core"
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
    root: {
        backgroundColor:"#0000A3",
        borderBottomLeftRadius:"90%",
        borderBottomRightRadius:"0%",
        height: "100px"
        
    },
    title:{
        fontSize:"42px",
        textAlign:"center",
        marginLeft:"80%",
        marginTop:"1%",

    }


})
export function Navbar() {
    const classes = useStyles()
  return (
    <div>
      <AppBar position="static" className={classes.root} >
        
          <Typography variant="h6" className={classes.title}>
            Todo-List
          </Typography>
       
      </AppBar>
    </div>
  );
}
