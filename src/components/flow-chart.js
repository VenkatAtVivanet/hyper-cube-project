import React from "react";
import "./flow-chart.css";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: true,
});

mermaid.flowchartConfig = {
  width: '100%'
}


class Mermaid extends React.Component {
  componentDidMount() {
    mermaid.contentLoaded();
  }
  render() {
    return <div className="mermaid">{this.props.chart}</div>;
  }
}

// class Mermaid1 extends React.Component {
//   componentDidMount() {
//     var hack = Math.random().toString(36).substring(7).replace(/\d/, "a");
//     // mermaid.render(hack, this.props.chart);

//     //    mermaid.contentLoaded();
//     //setTimeout(() => mermaid.contentLoaded(), 100);
//   }

//   render() {
//     return <div style={{ width: 500, height: 300 }}>{this.props.chart}</div>;
//   }
// }

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
          id1((${nodeData1}))--> id2((${nodeData2}));
          id2-->|${textData}| id3[Action];
          id3-->|Text|id4{{Acceptance}};
          id3-->|Text|id5[(Stakeholders)];         
          id3-->|Text| id6[Supporting Element];          
          id3-->id7((Risks));
          id3-->|Text| id8[Sol];
          id7-->id9([node1]) & id10([node2]);
          id6-->id11{{res}};
          id5-->id4 & id12{{needs}};
          id12-->id13{{System Requirements}};
          id11-->id13;
          id9 & id10 --> id13;

          class id1,id2,id4,id6,id8,id11,id12,id13 moving
          classDef moving fill:#ffc93c,stroke:#155263,stroke-width:1px,color:#155263

          style id7 fill:#ff0000,stroke:#155263,stroke-width:1px,color:#155263
          style id3 fill:#f07810,stroke:#155263,stroke-width:1px,color:#155263
          
        `}
      />
      <br /><br /><br />
      <p className="flowChartHeading">FlowChart in Top-Down orientation</p>
      <Mermaid
        chart={`graph TD;
          id1((${nodeData1}))--> id2((${nodeData2}));
          id2-->|${textData}| id3[Action];
          id3-->|Text|id4{{Acceptance}};
          id3-->|Text|id5[(Stakeholders)];         
          id3-->|Text| id6[Supporting Element];          
          id3-->id7((Risks));
          id3-->|Text| id8[Sol];
          id7-->id9([node1]) & id10([node2]);
          id6-->id11{{res}};
          id5-->id4 & id12{{needs}};
          id12-->id13{{System Requirements}};
          id11-->id13;
          id9 & id10 --> id13;

          class id1,id2,id4,id6,id8,id11,id12,id13 moving
          classDef moving fill:#ffc93c,stroke:#155263,stroke-width:1px,color:#155263

          style id7 fill:#ff0000,stroke:#155263,stroke-width:1px,color:#155263
          style id3 fill:#f07810,stroke:#155263,stroke-width:1px,color:#155263
          
        `}
      />
      <br /><br /><br />
           
    </div>
  );
}
export default FlowChart;
