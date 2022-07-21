import styled from "styled-components";

export const Container = styled.div`
    display:grid;
    // justify-content:center;
    align-content:center;
    width:450px;
    margin:50px auto;
    grid-template-column:repeat(4,100px);
    grid-template-rows:minmax(120px,auto) repeat(5,100px);
    // grid-template-columns: repeat(4, 1fr);
    grid-template-columns: 1fr 1fr 1fr 1fr;
    box-shadow:2px 2px 50px #333;
    border-radius:10px;
    
`;

export const Screen = styled.div`
    grid-column:1/-1;
    background-color:rgba(253, 165, 164, 0.8);
    display:flex;
    justify-content:space-around;
    flex-direction:column;
    padding:10px;
    word-wrap:word-break;
    word-break:break-all;
    text-align:right;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
`;

export const Previous = styled.div`
    color:rgba(255,255,255,0.75);
    font-size:1.3rem;
`;

export const Current = styled.div`
    color:white;
    font-size:2.5rem;
`;

export const Button = styled.button`
    cursor:pointer;
    font-size:2rem;
    outline:none;
    border:1px outset white;
    background-color:rgba(239,229,234,0.8);
    &:hover{
        background-color:white;
        color:black;
    };
    ${function({gridSpan}){
        if(gridSpan){
            return `grid-column:span ${gridSpan};`;
        }
    }};
    ${({operation}) => operation && `background-color:black;color:white;`};
    ${({control}) => control && `background-color:rgba(120, 239, 254, 0.8);`};
    ${({equals}) => equals && `background-color:rgba(87, 238, 114, 0.8);border-bottom-right-radius:10px;`};
    ${({decimal}) => decimal && `background-color:rgba(238, 192, 87, 0.8);border-bottom-left-radius:10px;`};
    ${({dele}) => dele && `background-color:rgba(236, 6, 4, 0.8);`};
`;
