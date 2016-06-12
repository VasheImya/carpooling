var PromoWrapper = React.createClass ({
    render : function (){
        return (
            <div className="promo-inner">
                <PromoWrapper title={'Куда едем?'} subtitle={'Сотни интересных мест ждут тебя'} />
            </div>
        );
    }
});
ReactDOM.render (
    <PromoWrapper />,
    document.getElementById("promo")
);
