




function customRender(reactElement,conainer){
    const domElement=document.createElement(
        reactElement.type
    )
    domElement.innerHTML=reactElement.Children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    //should be done by loops
    for(const prop in reactElement.props){
        if(prop==='children'){
            continue;
        }
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    conainer.appendChild(domElement);

}
const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    Children:'click here to visit google'
}
const mainContainer=document.querySelector('#root');

customRender(reactElement,mainContainer);

