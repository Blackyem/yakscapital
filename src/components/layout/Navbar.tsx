"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

type DropdownKey = "about" | "join" | null;

type DropdownItem = {
  label: string;
  href: string;
};

const aboutItems: DropdownItem[] = [
  { label: "What we do", href: "/about-us/what-we-do" },
  { label: "Our leadership", href: "/about-us/leadership" },
  { label: "Our responsibilities", href: "/about-us/our-responsibilities" },
  { label: "Our history", href: "/about-us/history" },
];

const joinItems: DropdownItem[] = [
  { label: "Join Our Team", href: "/join-us/careers" },
  { label: "Management", href: "/join-us/management" },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 20);
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const closeDropdown = () => setOpenDropdown(null);

  const toggleDropdown = (key: Exclude<DropdownKey, null>) => {
    setOpenDropdown((current) => (current === key ? null : key));
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
     sx={{
  bgcolor: scrolled ? "#052f28" : "transparent",
  borderTop: scrolled ? "4px solid #f5f5f0" : "4px solid transparent",
  boxShadow: "none",
  transition: "background-color 250ms ease, border-color 250ms ease",
  zIndex: 1200,
}}
    >
      <Container maxWidth={false} sx={{ px: { xs: 2.5, md: 4.5 } }}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 84, md: 95 },
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr auto",
              md: "240px 1fr 240px",
            },
            alignItems: "center",
          }}
        >
          <Link href="/" aria-label="YaksCapital home" onClick={closeDropdown}>
            <Box
              sx={{
                width: { xs: 160, md: 180 },
                height: 48,
                position: "relative",
              }}
            >
              <Image
                src="/YaksCapitalWhite.png"
                alt="YaksCapital logo"
                fill
                priority
                style={{
                  objectFit: "contain",
                  objectPosition: "left center",
                }}
              />
            </Box>
          </Link>

          <Box
            component="nav"
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
              gap: 5.5,
              height: "100%",
            }}
          >
            <TopNavLink href="/" onClick={closeDropdown}>
              Home
            </TopNavLink>

            <DropdownTrigger
              label="About us"
              dropdownKey="about"
              openDropdown={openDropdown}
              onToggle={toggleDropdown}
              onClose={closeDropdown}
              items={aboutItems}
            />

            <TopNavLink href="/news" onClick={closeDropdown}>
              News
            </TopNavLink>

            <DropdownTrigger
              label="Join us"
              dropdownKey="join"
              openDropdown={openDropdown}
              onToggle={toggleDropdown}
              onClose={closeDropdown}
              items={joinItems}
            />

            <TopNavLink href="/contact-us" onClick={closeDropdown}>
              Contact us
            </TopNavLink>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            <Button
              variant="contained"
              sx={{
                color: "#214d46",
                bgcolor: "#ffffff",
                minWidth: 146,
                height: 49,
                px: 3,
                fontSize: 14,
                boxShadow: "none",
                textTransform: "none",
                "&:hover": {
                  bgcolor: "#f2f2ed",
                  boxShadow: "none",
                },
              }}
            >
              Investor login
            </Button>
          </Box>

          <Button
            sx={{
              display: { xs: "inline-flex", md: "none" },
              color: "#ffffff",
              border: "1px solid rgba(255,255,255,0.45)",
              borderRadius: 999,
              px: 2,
              py: 1,
              justifySelf: "end",
              textTransform: "none",
            }}
          >
            Menu
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

type TopNavLinkProps = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
};

function TopNavLink({ href, children, onClick }: TopNavLinkProps) {
  return (
    <Link href={href} onClick={onClick}>
      <Box
        component="span"
        sx={{
          position: "relative",
          display: "inline-block",
          color: "#ffffff",
          fontSize: 15,
          lineHeight: 1,
          whiteSpace: "nowrap",
          cursor: "pointer",
          "&::after": {
            content: '""',
            position: "absolute",
            left: 0,
            right: 0,
            bottom: -3,
            height: "1px",
            bgcolor: "currentColor",
            transform: "scaleX(0)",
            transformOrigin: "left",
            transition: "transform 180ms ease",
          },
          "&:hover::after": {
            transform: "scaleX(1)",
          },
        }}
      >
        {children}
      </Box>
    </Link>
  );
}

type DropdownTriggerProps = {
  label: string;
  dropdownKey: Exclude<DropdownKey, null>;
  openDropdown: DropdownKey;
  onToggle: (key: Exclude<DropdownKey, null>) => void;
  onClose: () => void;
  items: DropdownItem[];
};

function DropdownTrigger({
  label,
  dropdownKey,
  openDropdown,
  onToggle,
  onClose,
  items,
}: DropdownTriggerProps) {
  const isOpen = openDropdown === dropdownKey;

  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        role="button"
        tabIndex={0}
        onClick={() => onToggle(dropdownKey)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onToggle(dropdownKey);
          }
        }}
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: 0.45,
          color: "#ffffff",
          fontSize: 15,
          lineHeight: 1,
          whiteSpace: "nowrap",
          cursor: "pointer",
          outline: "none",
          "&:hover .dropdown-label::after": {
            transform: "scaleX(1)",
          },
        }}
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        <Box
          component="span"
          className="dropdown-label"
          sx={{
            position: "relative",
            display: "inline-block",
            "&::after": {
              content: '""',
              position: "absolute",
              left: 0,
              right: 0,
              bottom: -3,
              height: "1px",
              bgcolor: "currentColor",
              transform: isOpen ? "scaleX(1)" : "scaleX(0)",
              transformOrigin: "left",
              transition: "transform 180ms ease",
            },
          }}
        >
          {label}
        </Box>

        <KeyboardArrowDownIcon
          sx={{
            fontSize: 18,
            mt: "1px",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 180ms ease",
          }}
        />
      </Box>

      {isOpen && <DropdownMenu items={items} onClose={onClose} />}
    </Box>
  );
}

type DropdownMenuProps = {
  items: DropdownItem[];
  onClose: () => void;
};

function DropdownMenu({ items, onClose }: DropdownMenuProps) {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "100%",
        left: "50%",
        transform: "translateX(-50%)",
        pt: 1.4,
        zIndex: 30,
      }}
    >
      <Box
        role="menu"
        sx={{
          width: 205,
          bgcolor: "#188a78",
          color: "#ffffff",
          boxShadow: "0 14px 40px rgba(0,0,0,0.22)",
          borderRadius: "4px",
          overflow: "hidden",
          py: 1,
        }}
      >
        {items.map((item) => (
          <Link key={item.href} href={item.href} onClick={onClose}>
            <Box
              role="menuitem"
              sx={{
                px: 2.4,
                py: 1.15,
                fontSize: 15,
                color: "inherit",
                cursor: "pointer",
                "&:hover .dropdown-text::after": {
                  transform: "scaleX(1)",
                },
              }}
            >
              <Box
                component="span"
                className="dropdown-text"
                sx={{
                  position: "relative",
                  display: "inline-block",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: -3,
                    height: "1px",
                    bgcolor: "currentColor",
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 180ms ease",
                  },
                }}
              >
                {item.label}
              </Box>
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
}