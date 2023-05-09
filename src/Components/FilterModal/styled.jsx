import { Box, Typography } from "@mui/material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import styled from "styled-components";

export const ModalWrapper = styled(Box)`
    display: flex;
    align-items: center;
    max-width: 80%;
    width: 60%;
    height: 70%;
    background: #FFFFFF;
    margin: 0 auto;
    border-radius: 24px;
    margin: 0 auto;
    position: absolute;
    top: 15%;
    left: 20%;
    // transform: translate(0, -50%);
`
export const ModalImgBox = styled(Box)`
    width: 50%;
    height: 100%;
    padding: 50px;
`
export const ModalForm = styled.form`
    width: 50%;
    height: 100%;
    padding: 20px;
    display: grid;
    align-content: space-between;
`
export const ModalFormTop = styled.div`
    display: flex;
    align-items: center;
`
export const ModalTitle = styled(Typography)`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    color: #191919;
`
export const ModalInfoIcon = styled(InfoOutlinedIcon)`
    width: 24px;
    height: 24px;
    color: #A5A5A5;
    margin-left: auto;
`