import React from "react";
import styled, { keyframes } from "styled-components";

export default function Progress(props) {
  const anim = keyframes`
  from { width : 0%; }
  to { width: ${props.width}%; }
`;

  const Bar = styled.div`
    height: 2px;
    line-height: 8px;
    background-color: #7dc079;
    box-shadow: none;
    position: relative;
    animation: ${anim} 5s;
    animation-fill-mode: forwards;
  `;

  return (
    <>
      <Bar role="progressbar" />
      <span className="pourcent">{props.width} %</span>
    </>
  );
}
