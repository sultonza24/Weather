import React from 'react'

export default function WeatherScreen(route){
    return(
        <View>
            <Weather zipCode={route.parems.zipCode}/>
        </View>
    )
}