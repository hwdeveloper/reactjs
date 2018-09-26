import React from "react";
import {render}from "react-dom";
import FeaturedView from "./FeaturedView.js"

render(
    <FeaturedView list = {list}></FeaturedView>,
    document.getElementById("app-featured")
)