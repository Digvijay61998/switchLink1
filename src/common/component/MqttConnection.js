import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getMQTTswitchSuccess } from '../../redux/state/Mqtt/Action';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Paho from 'paho-mqtt';

const MqttConnection = (props) => {
    const client = new Paho.Client(
        "3.7.137.31",
        Number(8080),
        `mqtt-async-test-${parseInt(Math.random() * 100)}`
    );
    
    const dispatch = useDispatch();
    const [value, setValue] = useState();
  console.log("value",value);
    function onMessage(message) {
      console.log("message",message);
        if (message.destinationName === "9812b7b3-9490-4342-9dff-0ea28b9e604e")
            setValue(JSON.parse(message.payloadString));
            props.sendData(value)
    }
  
    useEffect(() => {
      client.connect( {
        onSuccess: () => { 
        console.log("Connected!");
        client.subscribe("9812b7b3-9490-4342-9dff-0ea28b9e604e");
        client.onMessageArrived = onMessage;
      },
      onFailure: () => {
        console.log("Failed to connect!"); 
      }
    });
    }, [])
  
  // dispatch(
  //   getMQTTswitchSuccess({
  //     response: {
  //       data: value
  //     }
  //   }),
  // );
}

export default MqttConnection

