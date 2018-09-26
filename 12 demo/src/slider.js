import React from "react";
import {render}from "react-dom";
import SliderView from "./SliderView.js"

let url='http://localhost:8888/slider';
render(
    <SliderView url = {url}></SliderView>,
    document.getElementById("app-slider")
)