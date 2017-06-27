/**
 * Created by shinest on 30/12/2016.
 */
import HomeHeader from '../components/home/HomeHeader'
import BackendHeader from '../components/backend/BackendHeader'
import { connect } from 'react-redux'
import React, { PropTypes } from 'react'
import { changeLoginForm, login} from '../actions';
import Login from '../components/backend/Login'
import { bindActionCreators } from 'redux'
import ErrorMessage from '../components/ui/ErrorMessage'
import * as uiActions from '../actions/uiActions';

class LoginContainer extends React.Component {

    constructor(props) {
        super(props);
        console.log('backend ')
        console.log(props);
        // props.getHomePosts(props.page, props.update);
    }

    // handleNextPage = (page) => (e) => {
    //     this.props.getHomePosts(page, false);
    // }


    render() {
        return (<div>
            <Login
                actions={this.props.actions}
                loginForm={this.props.loginForm}
            />
            <ErrorMessage
                visible={this.props.errorMessageVisible}
                handleAlertDismiss={this.props.actions.hideErrorMessage}
                message={this.props.errorMessage}
            />
        </div>);
    }
}


const mapStateToProps = (state, ownProps) => (
    {
        loginForm: state.getIn(['login', 'loginForm']),
        errorMessage:state.getIn(['ui', 'errorMessage']),
        errorMessageVisible: state.getIn(['ui', 'errorMessageVisible']),
    }
)


const mapDispatchToProps = (dispatch) => {
    return {actions: bindActionCreators(Object.assign({}, {changeLoginForm}, {login}, uiActions), dispatch)}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer)
