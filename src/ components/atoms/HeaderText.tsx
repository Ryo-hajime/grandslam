import styled from "styled-components"

type HeaderTextType = {
    children: React.ReactNode;
};

export const HeaderText = (props: HeaderTextType) => {
    const {children} = props;
    return (
        <Text>{children}</Text>
  )
}

const Text = styled.p`
    padding-top: 50px;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
`
