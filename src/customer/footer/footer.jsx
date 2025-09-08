import React from "react";
import { Grid, Typography, TextField, Button, Box, Link } from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{ bgcolor: "#111", color: "white", px: 6, py: 8 }}>
            <Grid container spacing={6}>
                {/* Column 1 - Brand */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                        E-Shop
                    </Typography>
                    <Typography variant="body2" color="gray">
                        Your one-stop destination for fashion, electronics, and more.
                    </Typography>
                </Grid>

                {/* Column 2 - About Section */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" gutterBottom>
                        About
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                        {["About", "Blog", "Press", "Jobs", "Partners"].map((text) => (
                            <Button
                                key={text}
                                variant="text"
                                sx={{
                                    color: "gray",
                                    justifyContent: "flex-start",
                                    textTransform: "none",
                                    "&:hover": { color: "white" },
                                }}
                            >
                                {text}
                            </Button>
                        ))}
                    </Box>
                </Grid>

                {/* Column 3 - Customer Service */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" gutterBottom>
                        Customer Service
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                        {["FAQ", "Shipping", "Returns", "Privacy Policy"].map((text) => (
                            <Button
                                key={text}
                                variant="text"
                                sx={{
                                    color: "gray",
                                    justifyContent: "flex-start",
                                    textTransform: "none",
                                    "&:hover": { color: "white" },
                                }}
                            >
                                {text}
                            </Button>
                        ))}
                    </Box>
                </Grid>

                {/* Column 4 - Newsletter */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" gutterBottom>
                        Subscribe
                    </Typography>
                    <Typography variant="body2" color="gray" gutterBottom>
                        Get the latest updates and offers.
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1 }}>
                        <TextField
                            size="small"
                            variant="outlined"
                            placeholder="Enter your email"
                            sx={{
                                bgcolor: "white",
                                borderRadius: 1,
                                flex: 1,
                            }}
                        />
                        <Button variant="contained" color="primary">
                            Subscribe
                        </Button>
                    </Box>
                </Grid>
            </Grid>

            {/* Bottom line */}
            <Box
                sx={{
                    mt: 6,
                    borderTop: "1px solid #333",
                    pt: 3,
                    textAlign: "center",
                    color: "gray",
                }}
            >
                <Typography variant="body2">
                    © {new Date().getFullYear()} E-Shop. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
