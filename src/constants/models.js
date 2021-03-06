/**
 * Created by shinest on 29/12/2016.
 */

import Immutable from 'immutable';
import auth from '../utils/auth'

export const UiState = Immutable.fromJS({
    spinnerVisible: false,
    errorMessageVisible: false
});

export const HomeState = Immutable.fromJS({
    currentPage: {
        page: '',
        post_meta_list: [],
        query_at: '',
        seo: {}
    }
});

export const PostState = Immutable.fromJS({
    post: {
        post_meta_data: {},
        content: '',
        query_at: '',
        seo: {}
    }
});

export const AboutState = Immutable.fromJS({
    title: '',
    content: '',
    query_at: ''
});

export const CategoriesState = Immutable.fromJS({
    page: '',
    postMetaList: [],
    queryAt: '',
    seo: {}
});

export const CategoriesCountState = Immutable.fromJS({
    display: '',
    description: '',
    postCount: ''
});

export const LoginState = Immutable.fromJS({
    loginForm: {
        id: '',
        password: ''
    },
    isLogin: auth.isLogin()
})

export const EditState = Immutable.fromJS({
    posts: [],
    post: {
        id: 'new',
        title: '',
        path: '',
        subtitle: '',
        categoryId: [],
        md: '',
        content: ''
    }
});