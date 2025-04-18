"use client"

import { Box, Container, Grid, Typography, Link as MuiLink, Divider, Paper } from "@mui/material"
import Link from "next/link"
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  Email as MailIcon,
  Phone as PhoneIcon,
  LocationOn as MapPinIcon,
  AccessTime as ClockIcon,
} from "@mui/icons-material"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <Box component="footer" sx={{ py: 6, bgcolor: "primary.light", color: "common.white" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Hospital Info */}
          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              City General Hospital
            </Typography>
            <Box component="ul" sx={{ p: 0, m: 0, listStyle: "none" }}>
              <Box component="li" sx={{ display: "flex", alignItems: "flex-start", mb: 1.5 }}>
                <MapPinIcon sx={{ mr: 1, fontSize: "1.25rem", flexShrink: 0 }} />
                <Typography variant="body2">123 Healthcare Avenue, Medical District, City, 12345</Typography>
              </Box>
              <Box component="li" sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                <PhoneIcon sx={{ mr: 1, fontSize: "1.25rem", flexShrink: 0 }} />
                <Typography variant="body2">+1 (555) 123-4567</Typography>
              </Box>
              <Box component="li" sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                <MailIcon sx={{ mr: 1, fontSize: "1.25rem", flexShrink: 0 }} />
                <Typography variant="body2">info@citygeneralhospital.com</Typography>
              </Box>
              <Box component="li" sx={{ display: "flex", alignItems: "center" }}>
                <ClockIcon sx={{ mr: 1, fontSize: "1.25rem", flexShrink: 0 }} />
                <Typography variant="body2">24/7 Emergency Services</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>
            <Box component="ul" sx={{ p: 0, m: 0, listStyle: "none" }}>
              {[
                { title: "About Us", href: "/about" },
                { title: "Our Services", href: "/services" },
                { title: "Our Doctors", href: "/doctors" },
                { title: "Book an Appointment", href: "/appointments" },
                { title: "Careers", href: "/careers" },
                { title: "Contact Us", href: "/contact" },
              ].map((link) => (
                <Box component="li" key={link.href} sx={{ mb: 1 }}>
                  <MuiLink
                    component={Link}
                    href={link.href}
                    color="inherit"
                    underline="hover"
                    sx={{ display: "inline-block" }}
                  >
                    {link.title}
                  </MuiLink>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Departments */}
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Departments
            </Typography>
            <Box component="ul" sx={{ p: 0, m: 0, listStyle: "none" }}>
              {[
                { title: "Cardiology", href: "/departments/cardiology" },
                { title: "Neurology", href: "/departments/neurology" },
                { title: "Orthopedics", href: "/departments/orthopedics" },
                { title: "Pediatrics", href: "/departments/pediatrics" },
                { title: "Oncology", href: "/departments/oncology" },
                { title: "All Departments", href: "/departments/all" },
              ].map((link) => (
                <Box component="li" key={link.href} sx={{ mb: 1 }}>
                  <MuiLink
                    component={Link}
                    href={link.href}
                    color="inherit"
                    underline="hover"
                    sx={{ display: "inline-block" }}
                  >
                    {link.title}
                  </MuiLink>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Emergency Contact */}
          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Emergency
            </Typography>
            <Paper
              elevation={0}
              sx={{
                p: 2,
                bgcolor: "error.light",
                color: "error.contrastText",
                borderRadius: 2,
              }}
            >
              <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                24/7 Emergency Hotline
              </Typography>
              <Typography variant="h6" fontWeight="bold">
                +1 (555) 911-0000
              </Typography>
              <Typography variant="caption" sx={{ display: "block", mt: 1 }}>
                Always open for emergencies
              </Typography>
            </Paper>

            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                Follow Us
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                <MuiLink href="https://facebook.com" color="inherit" aria-label="Facebook">
                  <FacebookIcon />
                </MuiLink>
                <MuiLink href="https://twitter.com" color="inherit" aria-label="Twitter">
                  <TwitterIcon />
                </MuiLink>
                <MuiLink href="https://instagram.com" color="inherit" aria-label="Instagram">
                  <InstagramIcon />
                </MuiLink>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Divider sx={{ my: 3, borderColor: "primary.dark" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", md: "flex-start" },
            gap: 2,
          }}
        >
          <Typography variant="body2">© {currentYear} City General Hospital. All rights reserved.</Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <MuiLink component={Link} href="/privacy-policy" color="inherit" underline="hover">
              <Typography variant="body2">Privacy Policy</Typography>
            </MuiLink>
            <MuiLink component={Link} href="/terms-of-service" color="inherit" underline="hover">
              <Typography variant="body2">Terms of Service</Typography>
            </MuiLink>
            <MuiLink component={Link} href="/accessibility" color="inherit" underline="hover">
              <Typography variant="body2">Accessibility</Typography>
            </MuiLink>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
