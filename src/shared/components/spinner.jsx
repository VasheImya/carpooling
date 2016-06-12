var TripSearchSpinner = React.createClass ({
    render : function (){
        return (
            <div className="spinner-element">
               <i className="Spinner-dot"></i>
            </div>
        );
    }
});

ReactDOM.render (
    <div>
        <TripSearchSpinner />
        <TripSearchSpinner />
        <TripSearchSpinner />
        <TripSearchSpinner />
        <TripSearchSpinner />
    </div>,
    document.getElementById("spinner")
);