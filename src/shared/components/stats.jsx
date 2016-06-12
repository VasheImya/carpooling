var StatsTripSearch = React.createClass ({
    render : function (){
        return (
            <div className="stats-item">
                <StatsTripSearch {this.props.number}{this.props.symbol}{this.props.text}/>
            </div>
        );
    }
});
ReactDOM.render (
    <div>
        <StatsTripSearch number="5" text="водителей"/>
        <StatsTripSearch number="23" text="похожих направления"/>
        <StatsTripSearch number="40" symbol="$" text="средняя стоимость"/>
        <StatsTripSearch number="4" symbol="+" text="комфорт"/>
    </div>,
    document.getElementById("stats")
);
