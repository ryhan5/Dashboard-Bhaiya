import React from "react";
import { Box, HStack, Stack, Icon, Text } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { Link } from "react-router-dom"; // Assuming you're using React Router

const Sidenav = () => {
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transactions",
      link: "/transactions",
    },
  ];

  return (
    <>
    <RxDashboard />
    <Stack>
      {navLinks.map((nav) => (
        <Link to={nav.link} key={nav.link}>
          <HStack>
            <RxDashboard />
            <Text>{nav.text}</Text>
          </HStack>
        </Link>
      ))}
    </Stack>

    </>
  );
};

export default Sidenav;


/*
Stack {
    display: flex,
    flex-direction: column
}

HStack {
    display: flex,
    alignItems: center;
}
*/
