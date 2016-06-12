var TripSearchButton = React.createClass ({
    render : function (){
        return (
            <button className="go-btn">{'Поехали!'}</button>
        );
    }
});

ReactDOM.render (
        <TripSearchButton />,
    document.getElementById("button")
);