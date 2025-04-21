"use client";
import { useGetMYProfileQuery } from "@/redux/api/myProfile";
import { Box, Container, Grid, styled } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Image from "next/image";


// const StyleInformationBox = styled(Box)(({ theme}) => {
//     backgroundColor: theme.palette.background.paper,
// })

const Profile = () => {
    const {data, isLoading} = useGetMYProfileQuery({})
    console.log(data);
    
    return (
      <Container>
        <Grid2 container spacing={2}>
            <Grid xs={4}>
                <Box sx={{ width: '100%', height: '300', borderRadius:1, overflow:"hidden", backgroundColor: 'grey.300' }}>
                        {/* <Image height={300} width={400} src={}/> */}
                </Box>
            </Grid>
            <Grid xs={8}>

            </Grid>
        </Grid2>
      </Container>
    );
  };
  
  export default Profile;
  