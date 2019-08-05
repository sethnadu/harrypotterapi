import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AppRouter from "./AppRouter.js";

const useStyles = makeStyles({
  card: {
    width: "250px",
    height: "150px",
    margin: "20px",
    background: "linear-gradient( to right, #134b12 , #9c9c9c)",
    borderRadius: "10px",
    boxShadow: "5px 5px 10px #9c9c9c",
  },
  title: {
    fontSize: 14,
    textAlign: "left",
    color: "white"
  },
  pos: {
    marginBottom: 12,
    textAlign: "left",
    color: "white"
  },
  info: {
    textAlign: "left",
  },
  spanTitle: {
    color: "#f8c20e",
  },
  spanOther: {
    color: "#005092"
  },
  spanName: {
    fontWeight: "bold",
    fontFamily: "cursive",
    color: "white"
  }
});

function Spells({spellType}) {

  const classes = useStyles();

    // console.log(character)
  const {spell, type, effect} = spellType;
  return (
     <div>
      
       <Card className={classes.card}>
      <CardContent>
      <Typography className = {classes.spanName} variant="h5" component="h2">
          {spell}
      </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <span className={classes.spanTitle}>Type: </span>{type}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <span className={classes.spanTitle}> Effect: </span> {effect}
        </Typography>
      </CardContent>
    </Card>
   </div>
  );
}

export default Spells;
