// import Image from "next/image";
// import Link from "next/link";
// import facebookIcon from "@/assets/landing_page/facebook.png";
// import instagramIcon from "@/assets/landing_page/instagram.png";
// import twitterIcon from "@/assets/landing_page/twitter.png";
// import linkedinIcon from "@/assets/landing_page/linkedin.png";

import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from "@/assets/landing_page/facebook.png";
import instagramIcon from "@/assets/landing_page/instagram.png";
import twitterIcon from "@/assets/landing_page/twitter.png";
import linkedIcon from "@/assets/landing_page/linkedin.png";
import logo from "@/assets/logo.png"

const Footer = () => {
  return (
    <Box bgcolor="rgb(17, 26, 34)" py={5}>
      <Container>
        <Stack direction="row" gap={4} justifyContent="center">
          <Typography color="#fff" component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography color="#fff">Health Plans</Typography>
          <Typography color="#fff">Medicine</Typography>
          <Typography color="#fff">Diagnostics</Typography>
          <Typography color="#fff">NGOs</Typography>
        </Stack>

        <Stack direction="row" gap={2} justifyContent="center" py={3}>
          <Image src={facebookIcon} width={30} height={30} alt="facebook" />
          <Image src={instagramIcon} width={30} height={30} alt="facebook" />
          <Image src={twitterIcon} width={30} height={30} alt="facebook" />
          <Image src={linkedIcon} width={30} height={30} alt="facebook" />
        </Stack>
        {/* <div className="border-b-[1px] border-dashed"></div> */}
        <Box
          sx={{
            border: "1px dashed lightgray",
          }}
        ></Box>

        <Stack
          direction="row"
          gap={2}
          justifyContent="space-between"
          alignItems="center"
          py={3}
        >
          <Typography component="p" color="white">
            &copy;2024 Ph HealthCare. All Rights Reserved.
          </Typography>
          <Image
            src={logo}
            width={180}
            height={180}
            alt="doctor3"
          />
          {/* <Typography
            variant="h4"
            component={Link}
            href="/"
            fontWeight={600}
            color="white"
          >
            P
            <Box component="span" color="primary.main">
              H
            </Box>{" "}
            Health Care
          </Typography> */}
          <Typography component="p" color="white">
            Privacy Policy! Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;



// const Footer = () => {
//   const currentYear = new Date().getFullYear();
//   return (
//     <footer className="bg-primary-muted pt-20 pb-10">
//       <div className="container space-y-12">
//         <div className="flex items-center justify-between">
//           <h1 className="text-3xl font-bold text-primary-base">
//             Grammo Hospital
//           </h1>
//           <ul className="flex items-center gap-6">
//             <Link className="text-lg font-medium" href="/">
//               Consultrations
//             </Link>
//             <Link className="text-lg font-medium" href="/">
//               Health Plan
//             </Link>
//             <Link className="text-lg font-medium" href="/">
//               Medicine
//             </Link>
//             <Link className="text-lg font-medium" href="/">
//               Diagnostics
//             </Link>
//             <Link className="text-lg font-medium" href="/">
//               NGOs
//             </Link>
//           </ul>
//         </div>
//         <ul className="flex items-center justify-center gap-6  border-b border-dashed border-b-[#999] pb-12">
//           <Link href="/">
//             <Image
//               width={40}
//               height={30}
//               src={facebookIcon}
//               alt="social icons"
//             />
//           </Link>
//           <Link href="/">
//             <Image
//               width={40}
//               height={30}
//               src={twitterIcon}
//               alt="social icons"
//             />
//           </Link>
//           <Link href="/">
//             <Image
//               width={40}
//               height={30}
//               src={instagramIcon}
//               alt="social icons"
//             />
//           </Link>
//           <Link href="/">
//             <Image
//               width={40}
//               height={30}
//               src={linkedinIcon}
//               alt="social icons"
//             />
//           </Link>
//         </ul>
//         <div className="text-center">
//           <span>
//             &copy; {currentYear} Grammo Hospital. All Rights Reserveds
//           </span>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
