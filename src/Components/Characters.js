import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AppRouter from "./AppRouter.js";

const useStyles = makeStyles({
  card: {
    width: "300px",
    height: "300px",
    margin: "20px",
    background: "linear-gradient( to right, #8d0901, #f8c20e)",
    borderRadius: "10px",
    boxShadow: "5px 5px 10px"
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

function Characters({character}) {

  const classes = useStyles();

    // console.log(character)
  const {name, house, role, bloodStatus, school, deathEater, dumbledoresArmy, orderOfThePhoenix, species} = character;
  return (
     <div>
      
       <Card className={classes.card}>
      <CardContent>
      <Typography className = {classes.spanName} variant="h5" component="h2">
          {name}
      </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <span className={classes.spanTitle}>Role: </span>{role}
          <br />
          <span className={classes.spanTitle}> House: </span> {house}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <span className={classes.spanTitle}> School: </span> {school}
          <br />
          <span className={classes.spanTitle}> Species: </span> {species}
          <br />
          <span className={classes.spanTitle}> Blood Status: </span> {bloodStatus}
        </Typography>
        <Typography variant="body2" component="p" className={classes.info}>
        <span className={classes.spanOther}> DeathEater: </span> {`${deathEater}`}
          <br />
        <span className={classes.spanOther}>Dumbledore's Army: </span>{`${dumbledoresArmy}`}
          <br />
        <span className={classes.spanOther}>Order of the Phoenix: </span>{`${orderOfThePhoenix}`}
        </Typography>
      </CardContent>
    </Card>
   </div>
  );
}

export default Characters;
