import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  flex: 1;
`;

const Detail = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  object-fit: cover; //To prevent doge deformation
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAeFBMVEX/////AAD/8fH/Jib/+vr/eXn/vr7/hob/RUX/c3P/UVH/VVX/9/f/3d3/qqr/19f/paX/bGz/MTH/Pj7/mZn/Skr/5eX/29v/zc3/x8f/t7f/n5//j4//fn7/Xl7/Tk7/IyP/GBj/DQ3/sbH/Nzf/u7v/YWH/KyuEdAApAAADjElEQVR4nO3da3OiMBSHcctVK16qFUG8212+/zdcsN0VOt12yImexj6/l95m8h+EcBKSXg8AAAAAAAAAAAAAAADAxxLP89JllkeVVVGs43gThuGgsn2s7Ur/Tbk7v7Ct36s+sonjdVGs6u/l2TKtfibRbsttBGk6iVan9WC4mM9Kf78/HB+Ejof93i9n88VwsD6tokmaBtqtvIJklE/DXd8/SOP6ysHv78JpPrqjAzLJw/61Y3uvH+b3kWAwnt86u1fz8R38jycznfBqs4l266WmeuHVptrtlwl103t4CLUTkFBPz+n8nrWzqz1rp2Aq007uVaadg5lAqcPy3tzN/ovyRffCzctvqR3bX6V2EiZy7dQucu0sDAy0Q7sYaGdhQFyLsueonUV3qXZmTal2Gp2NtSNrGmun0VmsHVlTrJ1GZ1vtyJq22ml0pp1Ym3YaXQXagbW5dt820Q6szbWyc6QdWFuknUdHhXZgbYV2Hh1ttANr22jn0dE3KNM3uVayX2gH1rbQzqMj04LB8TrDwq4VDYzbmT5fpVSjnUc3nnE7vV76ZDG2y8+6xLxcVbczsz+jyK2SlflNx+thcjrYS+7MrdsOaXzWh9jdis98nOjfScqz2nV0a7ToZNzOxjl+MrQX30kvCwPmf73WJTJ6sRWfWzNdzEv17R5GsD7Yic+tcr2t+KoukJ3x4p8aX3UKfCQ+QXy93q/9D4vP/L7r47srcfX16cYByNiOr5cIe4FuxWc+yvvfe/vRb0l8To30BuYd3k9KI5FguurQqaHKq8TXS6bG15DhzZpuQWBeq/+8MOeZDkEtXDr6AvOC3Vd1zZHZgd0nvjeRT3yC+Izm7BNfQ9p51j7xXXD0CeLj3CeI70dceen3iXDXIcE9rwwVFxHqfSJUm0UY6xBhpE2EcV4RZhmIMMdFhBlWIszvE2F2qQhzm0WEM+vtL9/k1sx6nuuQMW0mTxWd8UybCE9UivA8rwhPk4uwloEIK2mIsI6LCKsIyWgH1qadRmesoCbC+n0irB4pwtqlMqycK8K6zSKsGi7DmvUi7Jggwn4dMuwWI8NeRTLfoGTvWpm+RT0/p9NTv/y6edFtYI9KGXZIFWJ/Xil2h7aAvcntSTzPS5dZXu9wvyqKdRxvwjAcVLaPtV3pvyl35xe29XvVRzZxvC6KVf29PFum1c/c46EGAAAAAAAAAAAAAAAA2PEHSodX2ofU5XMAAAAASUVORK5CYII="
        />
        <Detail type={type}>
          <ChannelImage
            type={type}
            src="data:image/jpeg;base64,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"
          />
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>Lim Mao</ChannelName>
            <Info>660, 908 views・1 day ago</Info>
          </Texts>
        </Detail>
      </Container>
    </Link>
  );
};

export default Card;
