import { createGlobalStyle } from "styled-components"

export const GlobalStyleReset = createGlobalStyle`
html{
	font-size:16px;
	
}

 html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	box-sizing:border-box;
	font-family:"Roboto";
	font-weight:100;
	/* font-size:100%; */
	/* font-size: 100%; */
	/* font: inherit; */
	/* vertical-align: baseline; */
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
 background: rgb(2,0,36);
background: linear-gradient(rgba(2,0,36,1) 0%, rgba(25,147,150,1) 35%, rgba(117,144,141,1) 100%); */
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`
export const GlobalStyleFonts = createGlobalStyle`

    @font-face {
  font-family:"PROGRESS PERSONAL USE";
  src: url("../assets/fonts/Progress.ttf") format('ttf');
} 


 @font-face {
  font-family:"Disgracefull Demo";
  src: url("../assets/fonts/Disgracefull-Demo.ttf") format('ttf');
} 
h1{
    
font-size:3.5em;
   
    
    
    
}
h2{
font-size:2.5em;	
	
}

h3{
	font-size:1.5em;
}

p{
	font-size:1.3em;
}

a{
	font-size:1.3em;
	text-decoration:none;
}



`