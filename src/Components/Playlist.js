import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import projectData from "./data";

const Playlist = () => {
  return (
    <div className="container">
      <h2 className="text-center mt-2">Projects</h2>
      <div className="card_div">
        <div className="row d-flex justify-content-around align-items-center">
          {
            projectData.map((el,index)=>{
              return(
                <>
                 <Card style={{ width: "20rem" , height:"18rem" }} className="mt-4 mb-4">
            <Card.Img variant="top" style={{ width: "20rem",marginLeft:-13 }} src={el.imgsrc} />
            <Card.Body className="d-flex justify-content-center flex-column">
              <Card.Title className="text-center">{el.projectName}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary"><a href={el.demo} className="text-decoration-none text-light" >Live Demo</a></Button>
            </Card.Body>
          </Card>
                </>
              )
            })
          }
         
        </div>
      </div>
    </div>
  );
};

export default Playlist;
