import { createGlobalStyle } from "styled-components"

export const CSSVariables = createGlobalStyle`
:root{
	--primary-color:rgba(25, 147, 150, 1);
	--primary-color-text: rgba(220,137,59,.8);
	--primary-color-hover:rgba(220,137,59,1);
	--secondary-color:rgba(117, 144, 141, 1);
	--secondary-color-text:rgba(4,40,41,0.8);
	--secondary-color-hover:rgba(4,40,41,1);
	--third-color:rgba(220,137,59,1);
	--third-color-text:rgba(124,145,143,0.8);
	--third-color-hover:rgba(124,145,143,1);
	



}
`

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
	font-family:"Rubik";
	font-weight:400;
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
 /* background: rgb(2,0,36); */
/* background: linear-gradient(rgba(2,0,36,1) 0%, rgba(25,147,150,1) 35%, rgba(117,144,141,1) 100%); */ 


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
    font-display:block;
  src: url('/fonts/Progress.woff2')format('woff2'),
  url('/fonts/Progress.woff')format('woff'),
  url('/fonts/Progress.ttf') format('ttf');

 
} 


 @font-face {
  font-family:"Disgracefull Demo";
   font-display:block;
  src: url("/fonts/Disgracefull-Demo.woff2") format('woff2'),
   url('/fonts/Disgracefull-Demo.woff')format('woff'),
  url('/fonts/Disgracefull-Demo.ttf') format('ttf');
   
  
} 

@font-face {
  font-family:"Ayus";
  src: url("/fonts/Ayus.woff2") format('woff2'),
   url('/fonts/Ayus.woff')format('woff'),
  url('/fonts/Ayus.ttf') format('ttf');
  
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
	font-weight:300;
}

a{
	font-size:1.3em;
	text-decoration:none;
}



`
