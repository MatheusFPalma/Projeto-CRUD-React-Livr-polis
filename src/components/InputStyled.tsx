import styled from "styled-components";

const InputStyled = styled.div`

    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;

    > label {
    font-weight: bold;
    margin-bottom: 4px;
    }
    > input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
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
    background-color: #2980b9;
}
`
export default InputStyled;