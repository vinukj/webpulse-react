var MyClass = React.createClass({
    render: function() {
      return (
        <div>
          {/* Global site tag (gtag.js) - Google Analytics 
  
  
  */}
          <meta charSet="UTF-8" />
          <title>FAN Engagement</title>
          {/**/}
          {/*<link rel="stylesheet" href="./style.css"> */}
          <style dangerouslySetInnerHTML={{__html: "\n    body {\n        font: 16px Verdana, sans-serif;\n    }\n\n    .dot{\n        width: 52px;\n        height: 52px;\n        background-color: #f00;\n        border-radius: 50%;\n        position: fixed;\n    }\n    \n    .predicdot{\n        width: 30px;\n        height: 30px;\n        background-color: #ffab56;\n        border-radius: 50%;\n        position:fixed;\n    }\n    " }} />
          {/* Player carousel */}
          <table style={{width: '100%'}}>
            <tbody><tr>
                <td><canvas id="output" style={{display: 'inline-flex'}} /></td>
                <td>
                  {/*     <h1 style="text-align: center;">Heartrate </h1> */}
                  <p id="heartrate">Calibrating...</p>         
                </td> 
              </tr>
            </tbody></table>
          <video hidden playsInline autoPlay />
          {/* <p id="heartrate">Calibrating...</p> */}   
          <canvas id="myChart" height="70%" />  
          {/* partial 
     */}
        </div>
      );
    }
  });