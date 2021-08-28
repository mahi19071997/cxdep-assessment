import { Box, MenuItem, TextField, Button, Container } from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core"
import {v4 as uuid} from "uuid"


const useStyles = makeStyles({

  root2:{
    marginTop:"70px",
    backgroundColor:"#4f4ff8",
    width:"50%",
    margin:"auto",
    borderRadius: "20px",
    padding: "0px",
    paddingTop: "27px"
  },
  root3:{
    display:"flex",
    width:"70%",
    justifyContent: "space-around",
    margin: "auto"

  },
  bind:{
    width:"30%",
    padding:"2px", 
    margin: "10%"
  },
  add:{
    backgroundColor:"#FFC0CB",
    height:"50px",
    marginTop:"10%",
    padding: "17px",
    color: "white",
  "&:hover":{
    backgroundColor:"#cf8756"

  }
  },
  col: {
    backgroundColor:"#638dc2"
  }

})

var options = ["Fruits", "Vegetables", "Books", "Movies", "Sports", "Misc"];
const obj={
  task:"",
  category:""

}

export function TodoInput({onclick}) {
  const classes = useStyles()
  const [data, setData] = React.useState(obj);
  const [category] = React.useState(options);

  const handleChange = (e) => {
    const {name,value}=e.target;
    setData({...data,[name]:value});
  };
  const handleClick = () => {
    var payload={
      title:data.task,
      category:data.category,
      id:uuid(),
      status: false
    }
    onclick(payload)
  };

  return (
    <div>
      <Container className={classes.root2}>
        <Box >
          <TextField name="task" className={classes.col} onChange={handleChange} placeholder="Apple" variant="outlined" />
        </Box>
        <Box className={classes.root3}>
          <TextField name="category" className={classes.col} select variant="outlined" placeholder="Category" onChange={handleChange}  className={classes.bind}>
            {category.map((el) => {
              return <MenuItem value={el}>{el}</MenuItem>;
            })}
          </TextField>
        <Button variant="outlined" onClick={handleClick} className={classes.add}>Add Something</Button>
        </Box>
      </Container>
    </div>
  );
}
