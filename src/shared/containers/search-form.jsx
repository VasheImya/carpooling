import React, { Component } from 'react';
import { connect  } from 'react-redux';
import SearchForm from '../components/search-form';

class SearchFormContainer extends Component {
    render() {
        return (
            <SearchForm />
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(SearchFormContainer);
