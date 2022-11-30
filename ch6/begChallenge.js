document.body.style = `
font-family:Tahoma,Arial;
margin:0;
`;
// header creating
let header = document.createElement("header");
let logo = document.createElement("div");
logo.append("Mustafa");
logo.className = "logo";
let nav = document.createElement("ul");
nav.className = "links";
let linkText = ["Home", "about", "Service", "contact"];
for (let i = 0; i < linkText.length; i++) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.append(linkText[i]);
    a.href = "#";
    li.append(a);
    nav.append(li);
}
header.append(logo, nav);
document.body.prepend(header);
// content creating
let content = document.createElement("div");
content.className = "content";
for (let i = 0; i < 25; i++) {
    let prod = document.createElement("div");
    let span = document.createElement("span");
    span.append(i + 1);
    prod.append(span, "product");
    prod.className = "product";
    content.append(prod);
}
header.after(content);

// footer creating
let footer = document.createElement("footer");
footer.append("made with <3 by mustafa Esmail");
footer.className = "footer";
content.after(footer);

/*styleing section */
// header styling
let myStyle = document.createElement("style");
let headerStyle = `
header{
    display:flex;
    padding:10px;
    justify-content:space-between;
    align-items:center;
    height:70px;
}
*{
box-sizing:border-box;

}`;
myStyle.append(headerStyle);
let logostyle = `
.logo{
    color:#009688;
    font-weight:bold;
    font-size:1.5rem;
    cursor:pointer;
}`;
myStyle.append(logostyle);
let linkstyle = `
.links {
    list-style:none;
    display:flex;
    gap:10px;
   
}
.links li a{
    text-decoration:none;
    color:#009699;
}`;
myStyle.append(linkstyle);
document.head.after(myStyle);
// content styling
let contStyle = `
.content{
    display:grid;
    grid-template-columns:repeat(auto-fill,minmax(250px,1fr));
    background-color:rgb(236,236,236);
    padding:15px;
    gap:15px;
    min-height:calc(100vh - (61px + 70px));
    grid-template-rows: repeat(auto-fill,90px) 

}`;

myStyle.append(contStyle);
let productStyle = `
.content .product{ 
    background-color:#fff;
    padding:15px;
    display:flex;
    align-items:center;
    flex-direction:column;
    color:#777;
    border-radius:7px;
    box-shadow:1px 1px 10px -5px inset;
}
.content .product span{
    color:black;
    font-size:1.7rem;
    margin-bottom:5px;
    font-weight:500;
}`;
myStyle.append(productStyle);

// footer styling
let footerStyle = `
footer{
    background-color:rgb(35,169,110);
    padding:15px;
    text-align:center;
    font-size:1.6rem;
    color:white;
    height:61px;
}`;

myStyle.append(footerStyle);

//link this fill to any empty bage to create the testing web site
