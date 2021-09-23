import styled from "styled-components";

export const InputField = styled.input`
    /* opacity: 0; */
`;
export const InputLabel = styled.label``;
export const TabContainer = styled.div`
    border: 1px solid red;
    display: inline-flex;
    width: 100px;
    
    ${InputField} {
        &:checked {
            border-bottom: 2px solid green;
        }
    }
`;