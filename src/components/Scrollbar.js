import React from "react";
import { useInView } from "react-intersection-observer";

export default function Scrollbar(){

    return(
        <div className="scrollbar">
            <div className="circle--filled">

            </div>
            <div className="circle--filled">

            </div>
            <div className="circle--filled">

            </div>
            <div className="circle--filled">

            </div>
        </div>
    )
}