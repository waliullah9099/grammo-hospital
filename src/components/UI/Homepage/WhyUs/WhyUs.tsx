"use client";
import assets from "@/assets";
import Image from "next/image";
import whyUs from "@/assets/choose-us.png";
import { Box, Container, Grid, Typography } from "@mui/material";

const WhyUs = () => {
  const servicesData = [
    {
      imageSrc: assets.svgs.award,
      title: "Award Wining Service",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, doloribus nobis nemo repudiandae minus aut similique dolore odit. Qui, suscipit!",
    },
    {
      imageSrc: assets.svgs.award,
      title: "Award Wining Service",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, doloribus nobis nemo repudiandae minus aut similique dolore odit. Qui, suscipit!",
    },
    {
      imageSrc: assets.svgs.award,
      title: "Award Wining Service",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, doloribus nobis nemo repudiandae minus aut similique dolore odit. Qui, suscipit!",
    },
    {
      imageSrc: assets.svgs.award,
      title: "Award Wining Service",
      description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, doloribus nobis nemo repudiandae minus aut similique dolore odit. Qui, suscipit!",
    },
  ];
  return (
    <Container>
      <Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            color="primary"
            variant="h6"
            component="h1"
            fontWeight={700}
          >
            Why Us
          </Typography>
          <Typography variant="h4" component="h1" fontWeight={700}>
            Why Choose Us
          </Typography>
        </Box>
        <Grid container spacing={2} my={5} alignItems="center">
          <Grid item md={6}>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                backgroundColor: "rgba(245, 245, 245,1)",
                padding: "15px",
                alignItems: "center",
                borderRadius: "10px 10px 100px 10px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "15px",
                  borderRadius: "10px",
                }}
              >
                <Image src={servicesData[0].imageSrc} width={50} alt="award" />
              </Box>
              <Box>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h1"
                  fontWeight={600}
                >
                  {servicesData[0].title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {servicesData[0].description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                backgroundColor: "rgba(245, 245, 245,1)",
                padding: "15px",
                alignItems: "center",
                borderRadius: "10px 100px 10px 10px",
                margin: "20px 0px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image src={servicesData[1].imageSrc} width={50} alt="award" />
              </Box>
              <Box>
                <Typography variant="h6" component="h6" fontWeight={600}>
                  {servicesData[1].title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {servicesData[1].description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                backgroundColor: "rgba(245, 245, 245,1)",
                padding: "15px",
                alignItems: "center",
                borderRadius: "10px 10px 100px 10px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image src={servicesData[2].imageSrc} width={50} alt="award" />
              </Box>
              <Box>
                <Typography variant="h6" component="h6" fontWeight={600}>
                  {servicesData[2].title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {servicesData[2].description}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                backgroundColor: "rgba(245, 245, 245,1)",
                padding: "15px",
                alignItems: "center",
                borderRadius: "10px 100px 10px 10px",
                marginTop: "20px",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Image src={servicesData[3].imageSrc} width={50} alt="award" />
              </Box>
              <Box>
                <Typography variant="h6" component="h6" fontWeight={600}>
                  {servicesData[3].title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {servicesData[3].description}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image src={whyUs} width={400} alt="choose us" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default WhyUs;
