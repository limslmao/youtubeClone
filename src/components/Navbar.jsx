import React from "react";
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutLinedIcon from "@mui/icons-material/SearchOutlined";

const Container = styled.div``;
const Wrapper = styled.div``;
const Search = styled.div``;
const Input = styled.input``;
const Button = styled.button`
  padding: 5px 15px;
  border-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <SearchOutLinedIcon />
        </Search>
        <Button>
          <AccountCircleOutlinedIcon />
          SIGN IN
        </Button>
      </Wrapper>
    </Container>
  );
};
