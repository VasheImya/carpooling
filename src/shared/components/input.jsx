var SearchForm = React.createClass ({
    render : function (){
        return (
                <div className="field">
                    {this.props.name}
                    <input type="text" className="input" />
                </div>
        );
    }
});

ReactDOM.render (
    <div>
        <SearchForm name="из"/>
        <SearchForm name="в"/>
        <SearchForm />
        <SearchForm />
    </div>,
    document.getElementById("input")
);