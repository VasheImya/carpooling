var Menu = React.createClass ({
    render : function (){
        return (
            <li className = "menu">
                <div className = "menu-item"> this.props.item</div>
            </li>
        );
    }
});
ReactDOM.render (
    <div>
        <Menu item = "Самое интересное"/>
        <Menu item = "Сообщения"/>
        <Menu item = "Мои поездки"/>
        <Menu item = "Помощь"/>
    </div>,
    document.getElementById("header")
);

var Logo = React.createClass ({
    render : function (){
        return (
            <div className = "Logotype">this.props.image</div>
        );
    }
});
ReactDOM.render (
   <Logo />, 
    document.getElementById("header")
);