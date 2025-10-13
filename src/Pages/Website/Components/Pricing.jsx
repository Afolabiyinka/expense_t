import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import CustomBotton from "./CustomBotton";
import Box from "@mui/material/Box";
import paymentSvg from "../../../assets/undraw_pay-online_806n.svg";

export default function PricingCard() {
  return (
    <Card
      sx={{
        maxWidth: 360,
        borderRadius: 4,
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
        background: "linear-gradient(135deg, #f0f4ff 0%, #d9e4ff 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 4,
        border: "1px solid #d9e4ff",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 14px 30px rgba(0,0,0,0.2)",
        },
      }}
    >
      <CardMedia
        component="img"
        image={paymentSvg}
        alt="Free pricing"
        sx={{
          borderRadius: 3,
          mb: 3,
          width: "100%",
          objectFit: "cover",
          height: "200px",
        }}
      />
      <CardContent sx={{ textAlign: "center", p: 0, mb: 3 }}>
        <Typography
          variant="h3"
          component="div"
          sx={{
            fontWeight: "bold",
            color: "#2a3eb1",
            mb: 1,
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          $0
          <span style={{ fontSize: "1.2rem", fontWeight: "normal" }}>
            {" "}
            / month
          </span>
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontSize: "1.1rem" }}
        >
          Totally free forever. No hidden fees.
        </Typography>
      </CardContent>
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <CustomBotton path={`/onboarding`} text={`Try it now`} />
      </Box>
    </Card>
  );
}
