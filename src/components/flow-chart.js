import React from "react";
import "./flow-chart.css";
import mermaid from "mermaid";
import ActorImg from "../images/actor.png";
import NoteImg from "../images/note-yellow1.png";
import OvalImg from "../images/oval-yellow1.png";
import RedOvalImg from "../images/oval-red.png";


mermaid.initialize({
  startOnLoad: true,
});


class Mermaid extends React.Component {
  componentDidMount() {
    mermaid.contentLoaded();
  }
  render() {
    return <div className="mermaid">{this.props.chart}</div>;
  }
}

function FlowChart() {
  var nodeData1 = "Start";
  var nodeData2 = "Stage";
  var textData = "Text";

  console.log(nodeData1);
  return (
    <div className="main">
      <br /><br /><br />
      <p className="flowChartHeading">FlowChart in Left-Right orientation</p>
      <Mermaid
        chart={`graph LR;
          id1(<img src=${OvalImg} width='100px' height='60px'/><br/> ${nodeData1})--> id2(<img src=${OvalImg} width='75px' height='45px'/><br/> ${nodeData2});
          id2-->|${textData}| id3[Action];
          id3-->|Text| id4(<img src=${NoteImg} width='100px' height='50px' /><br/>Acceptance);
          id3-->|Text| id5(<img src=${ActorImg} width='100px' height='70px' /><br/>Stakeholders);
          id3-->|Text| id6[Supporting Element];
          id3-->id7(<img src=${RedOvalImg} width='100px' height='60px' /><br/>Risks);
          id3-->|Text| id8[Sol];
          id7-->id9([node1]) & id10([node2]);
          id6-->id11(<img src=${NoteImg} width='75px' height='37px' /><br/>res);
          id5-->id4 & id12(<img src=${NoteImg} width='75px' height='37px' /><br/>needs);
          id12-->id13(<img src=${NoteImg} width='150px' height='75px' /><br/>System Requirements);
          id11-->id13;
          id9 & id10 --> id13;

          class id6,id8 moving
          classDef moving fill:#ffc93c,stroke:#155263,stroke-width:1px,color:#155263

          class id1,id2,id4,id5,id7,id11,id12,id13 clear
          classDef clear fill:#ffffff,stroke:#ffffff,stroke-width:1px,color:#155263

          style id3 fill:#ff9a3c,stroke:#155263,stroke-width:1px,color:#155263
          
        `}
      />
      <br /><br /><br />
           
    </div>
  );
}
export default FlowChart;
