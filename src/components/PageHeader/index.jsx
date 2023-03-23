import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography
} from "@mui/material"
import Image from "next/image"
import React, { useState } from "react"
import logo from "@Public/logo.png"
import Link from "next/link"
import MuiLink from "@mui/material/Link"
import { useTheme } from "@emotion/react"

function PageHeader() {
  const [links, setLinks] = useState([
    { name: "Courses", path: "/courses" },
    { name: "Admission", path: "/admission" },
    { name: "Open days", path: "/open-days" },
    { name: "About us", path: "/about-us" },
    { name: "News", path: "/news" }
  ])

  const theme = useTheme()

  return (
    <AppBar position="static" color="default">
      <Container>
        <Toolbar disableGutters>
          <Avatar variant="square" src="/logo.png" alt="logo" />
          <Typography variant="h6" component="h1" ml={1}>
            The Sheffield College
          </Typography>
          <Stack
            direction="row"
            alignItems="baseline"
            spacing={2}
            sx={{ ml: "auto" }}
          >
            {links.map((link, index) => (
              <MuiLink
                component={Link}
                key={index}
                href={link.path}
                sx={{
                  color: theme.palette.text.primary,
                  textDecoration: "none",
                  "&:hover": {
                    color: theme.palette.primary.main,
                    textDecoration: "underline"
                  }
                }}
              >
                {link.name}
              </MuiLink>
            ))}
            <Button>Apply now</Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default PageHeader
