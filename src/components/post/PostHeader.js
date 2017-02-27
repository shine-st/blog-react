import React from 'react';
import ReactDOM from 'react-dom';

// class PostHeader extends React.Component {
//     // 若是需要綁定 this.方法或是需要在 constructor 使用 props，定義 state，就需要 constructor。若是在其他方法（如 render）使用 this.props 則不用一定要定義 constructor
//     constructor(props) {
//         // 對於 OOP 物件導向程式設計熟悉的讀者應該對於 constructor 建構子的使用不陌生，事實上它是 ES6 的語法糖，骨子裡還是 prototype based 物件導向程式語言。透過 extends 可以繼承 React.Component 父類別。super 方法可以呼叫繼承父類別的建構子
//         super(props);
//         console.log('post header component');
//         console.log(props);
//         props.initPost(props.path);
//         // console.log(content);
//         // console.log(path);
//         // this.state = {}
//     }
//
//     // render 是唯一必須的方法，但如果是單純 render UI 建議使用 Functional Component 寫法，效能較佳且較簡潔
//     render() {
//         let backgroundImage = {
//             backgroundImage: "url('../res/img/post-bg.jpg')"
//         }
//
//         return (
//             <div className="intro-header" style={backgroundImage}>
//                 post header
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
//                             <div className="post-heading">
//                                 <h1>Man must explore, and this is exploration at its greatest</h1>
//                                 <h2 className="subheading">Problems look mighty small from 150 miles up</h2>
//                                 <span className="meta">Posted by <a
//                                     href="#">Start Bootstrap</a> on August 24, 2014</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default PostHeader;

// subtitle

const PostHeader = ({title, subtitle, createAt}) => {
    let backgroundImage = {
        backgroundImage: "url('res/img/post_bg.jpg')"
    }

    return (
        <div className="intro-header" style={backgroundImage}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                        <div className="post-heading">
                            <h1>{title}</h1>
                            <h2 className="subheading">{subtitle}</h2>
                            <span className="meta">Posted by <a
                                href="#">shinest</a> on {createAt}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PostHeader;