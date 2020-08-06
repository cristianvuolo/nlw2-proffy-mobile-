import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {AppLoading} from "expo";
import {Archivo_400Regular, Archivo_700Bold, useFonts} from "@expo-google-fonts/archivo/index";
import {Poppins_400Regular, Poppins_600SemiBold} from "@expo-google-fonts/poppins/index";
import AppStack from "./src/routes/AppStack";

export default function App() {
    let [fontLoaded] = useFonts({
        Archivo_400Regular,
        Archivo_700Bold,
        Poppins_400Regular,
        Poppins_600SemiBold,
    })
    if (!fontLoaded) {
        return <AppLoading/>
    } else {
        return (
            <>
                <StatusBar style="light"/>
                <AppStack/>
            </>
        );
    }

}

