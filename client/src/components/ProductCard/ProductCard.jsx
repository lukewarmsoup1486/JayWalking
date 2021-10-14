import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import "./ProductCard.css";

export default function ProductCard(props) {
  const { _id, name, price, imgURL } = props;

  return (
    <Link 
      to={`/products/${_id}`}
      className="link-card"
    >
      <Card
        sx={{
          width: "100%",
          height: "100%",
        }}
        className="card-product-card"

      >
        <CardMedia
          className="card-media-img"
          component="img"
          src={imgURL}
          alt={name}
          sx={{
            height: "60%",
            p: 4,
            objectFit: "contain"
          }}
        />
      <CardContent
        sx={{
          position: "absolute",
          bottom: 0,
          width: "90%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: "2",
        }}
      >
        <Typography 
          gutterBottom
          noWrap="true"
          align="center"
          sx={{
            width: "90%"
          }}
        >
          {name}
        </Typography>
        <Typography 
          gutterBottom 
          color="text.secondary"
        >
          ${price}
        </Typography>
      </CardContent>
      </Card>
    </Link>
  );
}
