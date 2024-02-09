import styled from "styled-components"

type SearchButtonType = {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
};

export const SearchButton = (props: SearchButtonType) => {
    const {onClick, children} = props
    return (
        <Button onClick={onClick}>{children}</Button>
    )
}

const Button = styled.button`
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 100px;
    padding: 5px 20px;
    background-color: #267c75;
    color: #fff;
    transition: .3s;
    :hover{
        opacity: .8;
    }
`
