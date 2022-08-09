import React from "react";

const About =() => {
    return (
     <div className="container">
        <div className="py-4">
            <h1>About Page</h1>
            <h3>5 Great Visual Studio Keyboard Shortcuts:-</h3>
            <p className="lead">Here are five of my favorite keyboard shortcuts in Visual Studio. There's a good chance at least one of them will be new to you.</p>

<h4>Move Code Alt+Up/Down</h4>
<p>
This keyboard shortcut is new in Visual Studio 2013. If you put the cursor on a line of code 
and use the Alt+Up Arrow keys, the line of code you've selected moves up. If you use the 
Alt+Down Arrow keys, the line of code selected moves down.</p>
<h4>Create Collapsible Region Ctrl+M+H/Ctrl+M+U</h4>
<p>
Chances are you've noticed the "+" and "-" symbols in the margins that let you collapse and expand
 your classes and functions. Did you know you can create your own collapsible regions? If 
 you select a section of code and then use the key sequence Ctrl+M+H, you turn that region 
 into a collapsible/expandable region. The key sequence Ctrl+M+U will remove the collapsible 
 region. It doesn't delete the code, it just removes the icon that lets you expand and collapse.
 </p>
<h4>Comment Code Block Ctrl+K+C/Ctrl+K+U</h4>
<p>
Whether it's because you're trying to track down a "but," or experimenting with code change, 
from time to time you'll want to comment and uncomment blocks of code. If you select a block 
of code and use the key sequence Ctrl+K+C, you'll comment out the section of code. 
Ctrl+K+U will uncomment the code.</p>
<h4>Peek Definition Alt+F12</h4>
<p>
When you're going through your code and you want to examine the code in the method you're calling, many programmers will use the F12 key or the pop-up menu option Go To Definition. Go To Definition will navigate to the called method; however, many times you don't need to navigate to the code. 
Sometimes, you just want a quick look at the method. If you've installed Visual Studio 2013, there's a new keyboard shortcut -- Alt+F12 -- that will give you a preview 
of the method being called inline. You can use the Esc key to close the preview.</p>
<h4>Navigate Forward/Backward Ctrl+–/Ctrl+Shift+–</h4>
<p>
When you have multiple files open at the same time, you might want a way to quickly move back and forth between two or three different locations in your code. If you've moved from one location to another you can use the keyboard sequence &lt;Ctrl&gt;+– to move to the previous location and then you can return using Ctrl+Shift+–.

Susan Ibach is a developer evangelist at Microsoft Canada. She loves to talk about Windows Phone, HTML5 and the cloud and has worked as a consultant doing programming, testing, data conversions, rollouts and also as a trainer teaching Oracle, SQL Server, SQL Server BI, and .NET programming. When she's not staring at an LCD screen, 
she's doing martial arts with her kids, out running or enjoying her husband's cooking.</p>
        </div>
     </div>
    );
  }

  export default About;