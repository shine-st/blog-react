import React from 'react';
import ReactDOM from 'react-dom';
import Home from './HomeContent'

// class HomeHeader extends React.Component {
//     // 若是需要綁定 this.方法或是需要在 constructor 使用 props，定義 state，就需要 constructor。若是在其他方法（如 render）使用 this.props 則不用一定要定義 constructor
//     constructor() {
//         // 對於 OOP 物件導向程式設計熟悉的讀者應該對於 constructor 建構子的使用不陌生，事實上它是 ES6 的語法糖，骨子裡還是 prototype based 物件導向程式語言。透過 extends 可以繼承 React.Component 父類別。super 方法可以呼叫繼承父類別的建構子
//         super(props);
//         // console.log(props.params.title);
//         this.state = {}
//     }
//
//     // render 是唯一必須的方法，但如果是單純 render UI 建議使用 Functional Component 寫法，效能較佳且較簡潔
//     render() {
//         let hr = React.createElement('hr', '', '');
//         let backgroundImage = {
//             backgroundImage: "url('../res/img/home-bg.jpg')"
//         }
//
//         return (
//             <div className="intro-header" style={backgroundImage} >
//                 home header
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
//                             <div className="site-heading">
//                                 <h1>shinest</h1>
//                                 <hr className="small" />
//                                 <span className="subheading">A Clean B Theme by Start Bootstrap</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
//
// export default HomeHeader;

const HomeHeader = () => {
    let hr = React.createElement('hr', '', '');
    let backgroundImage = {
        backgroundImage: "url('/images/home_bg.jpg')"
    }

    return (
        <div className="intro-header" style={backgroundImage}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                        <div className="site-heading">
                            <h1>shinest blog</h1>
                            <hr className="small"/>
                            <span className="subheading">Scala & Data Science</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomeHeader;