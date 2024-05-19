import { StyleSheet } from "@react-pdf/renderer";
import styled from "styled-components";

export const CardStyled = styled.div`
    height: 150px;
    background-color: #e9e7e7;
    color: red;
`

export const documentStyles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

export const ListStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const BlockObserver = styled.div`
    height: 40px;
    background-color: black;
`