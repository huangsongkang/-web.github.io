let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');
// querySelector函数获取标题的引用，并存储在myHeading变量中
myButton.onclick=function(){
    setUserName();
}
function setUserName(){
    let myName=prompt('请输入主人您的名字');
    // prompt是会话提示框需要用户输入数据
    if(!myName){
        setUserName();
        
    
    }else{
    localStorage.setItem('name',myName);
    放物品放入lcoalStorage
    myHeading.textContent= 'Hello,' +myName;}
    // 之后，把 myHeading 变量的属性 textContent （标题内容）修改为“Hello ??!” 。
           }

if(!localStorage.getItem('name')){
    setUserName();

}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent='Hello,' +storedName;
}




// let myVariable;
// myVariable= '李磊';
// document.querySelector('html').onclick = function(){
//     alert('别戳我，怕疼');
// }
let myImage = document.querySelector('img');
// 查询img元素放在myImage里，才可以获取img的属性src
myImage.onclick=function(){
    let mySrc=myImage.getAttribute('src');
    if(mySrc === '../images/百度logo.png'){
        myImage.setAttribute('src' ,'../images/火狐logo.png');
    
    }else{
        myImage.setAttribute('src', '../images/百度logo.png');
    }
}
// 等价于
// let myHTML = document.querySelector('html');
// myHTML.onclick = function() {};