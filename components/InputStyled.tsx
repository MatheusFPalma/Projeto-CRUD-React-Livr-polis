import styled from "styled-components";

const InputStyled = styled.div`

    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
    border: 10px;
    border color: #red;
    background image: url(../assets/parchmen)
    > label {
    font-weight: bold;
    margin-bottom: 4px;
    }
    > input {
    padding: 10px;
    aling-itens: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    }

    > button.submit-button {
    padding: 10px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    }

    > button.submit-button:hover {
    background-color: red;
}
`

export default InputStyled;