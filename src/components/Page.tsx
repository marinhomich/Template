// material
import Box from "@mui/material/Box";
import React from "react";
import { Helmet } from "react-helmet-async";

interface PageProps {
  children: React.ReactNode;
  title: string;
}

export default function Page({ children, title = "", ...other }: PageProps) {
  return (
    <Box {...other}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </Box>
  );
}
