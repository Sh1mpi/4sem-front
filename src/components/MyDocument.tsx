import { Document, Image, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import { FC } from "react";
import { documentStyles } from "./styles/styles";
import { IDoc } from "../models/IDoc";

const  MyDocument: FC<IDoc> = ({ name, picture }) => {
    return (
        <Document>
            <Page size="A4" style={documentStyles.page} wrap>
                <View style={documentStyles.section}>
                    <Text>{name}</Text>
                </View>
                <View style={documentStyles.section}>
                    {picture && <Image src={picture} />}
                    </View>
            </Page>
        </Document>
    )
}

export default MyDocument;