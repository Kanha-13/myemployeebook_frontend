import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/AboutUs";
import Navbar from "./components/Layouts/Navbar";
import Login from "./components/pages/Login"
import Signup from "./components/pages/SignUp";
import EmployeeDetail from "./components/pages/EmployeeDetail";
import EmployeeEdit from "./components/controllers/EditEmp"
import Footer from "./components/Layouts/Footer"
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddEmp from "./components/pages/AddEmployee";

const App = () => {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/employee/add" component={AddEmp} />
          <Route exact path="/employee/:id" component={EmployeeDetail} />
          <Route exact path="/employee/edit/:id" component={EmployeeEdit} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
/* Refactor deleteTodo function - 2024-12-31 22:32:41.255831 */
/* Update Todo List placeholder text - 2024-12-31 22:32:41.349578 */
/* Update Todo List placeholder text - 2024-12-31 22:32:42.037082 */
/* Update Todo List placeholder text - 2024-12-31 22:32:42.208956 */
/* Refactor deleteTodo function - 2024-12-31 22:32:42.380828 */
/* Update Todo List placeholder text - 2024-12-31 22:32:42.755832 */
/* Update Todo List placeholder text - 2024-12-31 22:32:42.870945 */
/* Update Todo List placeholder text - 2024-12-31 22:32:42.957605 */
/* Update Todo List placeholder text - 2024-12-31 22:32:43.379490 */
/* Refactor deleteTodo function - 2024-12-31 22:32:43.723242 */
/* Update Todo List placeholder text - 2024-12-31 22:32:44.160740 */
/* Update Todo List placeholder text - 2024-12-31 22:32:44.582619 */
/* Update Todo List placeholder text - 2024-12-31 22:32:44.676367 */
/* Refactor deleteTodo function - 2024-12-31 22:32:44.848245 */
/* Refactor deleteTodo function - 2024-12-31 22:32:45.505197 */
/* Refactor deleteTodo function - 2024-12-31 22:32:46.020824 */
/* Update Todo List placeholder text - 2024-12-31 22:32:46.098950 */
/* Refactor deleteTodo function - 2024-12-31 22:32:46.192699 */
/* Update Todo List placeholder text - 2024-12-31 22:32:46.520975 */
/* Refactor deleteTodo function - 2024-12-31 22:32:47.052226 */
/* Refactor deleteTodo function - 2024-12-31 22:32:47.130352 */
/* Refactor deleteTodo function - 2024-12-31 22:32:47.325300 */
/* Refactor deleteTodo function - 2024-12-31 22:32:47.676896 */
/* Refactor deleteTodo function - 2024-12-31 22:32:47.973773 */
/* Update Todo List placeholder text - 2024-12-31 22:32:48.051896 */
/* Refactor deleteTodo function - 2024-12-31 22:32:48.145646 */
/* Refactor deleteTodo function - 2024-12-31 22:32:48.317530 */
/* Update Todo List placeholder text - 2024-12-31 22:32:48.645647 */
/* Update Todo List placeholder text - 2024-12-31 22:32:48.911270 */
/* Update Todo List placeholder text - 2024-12-31 22:32:49.348770 */
/* Refactor deleteTodo function - 2024-12-31 22:32:49.531706 */
/* Update Todo List placeholder text - 2024-12-31 22:32:50.237936 */
/* Refactor deleteTodo function - 2024-12-31 22:32:50.566062 */
/* Refactor deleteTodo function - 2024-12-31 22:32:50.737942 */
/* Refactor deleteTodo function - 2024-12-31 22:32:51.159810 */
/* Update Todo List placeholder text - 2024-12-31 22:32:52.143139 */
/* Update Todo List placeholder text - 2024-12-31 22:32:52.658763 */
/* Refactor deleteTodo function - 2024-12-31 22:32:53.533764 */
/* Refactor deleteTodo function - 2024-12-31 22:32:53.877510 */
/* Refactor deleteTodo function - 2024-12-31 22:32:53.983845 */
/* Update Todo List placeholder text - 2024-12-31 22:32:54.346363 */
/* Refactor deleteTodo function - 2024-12-31 22:32:54.861988 */
/* Refactor deleteTodo function - 2024-12-31 22:32:54.955738 */
/* Update Todo List placeholder text - 2024-12-31 22:32:55.611989 */
/* Refactor deleteTodo function - 2024-12-31 22:32:55.783866 */
/* Refactor deleteTodo function - 2024-12-31 22:32:55.955736 */
/* Update Todo List placeholder text - 2024-12-31 22:32:56.232231 */
/* Update Todo List placeholder text - 2024-12-31 22:32:56.766885 */
/* Refactor deleteTodo function - 2024-12-31 22:32:57.266885 */
/* Update Todo List placeholder text - 2024-12-31 22:32:57.610635 */
/* Refactor deleteTodo function - 2024-12-31 22:32:57.782510 */
/* Refactor deleteTodo function - 2024-12-31 22:32:57.954388 */
/* Update Todo List placeholder text - 2024-12-31 22:32:58.329389 */
/* Refactor deleteTodo function - 2024-12-31 22:32:59.048353 */
/* Update Todo List placeholder text - 2024-12-31 22:32:59.142099 */
/* Update Todo List placeholder text - 2024-12-31 22:32:59.313976 */
/* Refactor deleteTodo function - 2024-12-31 22:32:59.563974 */
/* Update Todo List placeholder text - 2024-12-31 22:32:59.642101 */
/* Refactor deleteTodo function - 2024-12-31 22:32:59.813973 */
/* Update Todo List placeholder text - 2024-12-31 22:32:59.985859 */
/* Update Todo List placeholder text - 2024-12-31 22:33:00.407723 */
/* Update Todo List placeholder text - 2024-12-31 22:33:00.595223 */
/* Update Todo List placeholder text - 2024-12-31 22:33:00.799175 */
/* Refactor deleteTodo function - 2024-12-31 22:33:01.054922 */
/* Refactor deleteTodo function - 2024-12-31 22:33:01.148673 */
/* Refactor deleteTodo function - 2024-12-31 22:33:01.304919 */
/* Update Todo List placeholder text - 2024-12-31 22:33:01.570546 */
/* Update Todo List placeholder text - 2024-12-31 22:33:01.914304 */
/* Refactor deleteTodo function - 2024-12-31 22:33:02.429930 */
/* Refactor deleteTodo function - 2024-12-31 22:33:02.508040 */
/* Update Todo List placeholder text - 2024-12-31 22:33:02.601791 */
/* Refactor deleteTodo function - 2024-12-31 22:33:02.886584 */
/* Update Todo List placeholder text - 2024-12-31 22:33:03.694753 */
/* Update Todo List placeholder text - 2024-12-31 22:33:03.866633 */
/* Refactor deleteTodo function - 2024-12-31 22:33:04.038502 */
/* Refactor deleteTodo function - 2024-12-31 22:33:04.382259 */
/* Update Todo List placeholder text - 2024-12-31 22:33:04.616626 */
/* Update Todo List placeholder text - 2024-12-31 22:33:04.694751 */
/* Refactor deleteTodo function - 2024-12-31 22:33:04.960381 */
/* Update Todo List placeholder text - 2024-12-31 22:33:05.523710 */
/* Update Todo List placeholder text - 2024-12-31 22:33:06.617913 */
/* Update Todo List placeholder text - 2024-12-31 22:33:06.711663 */
/* Refactor deleteTodo function - 2024-12-31 22:33:06.789790 */
/* Update Todo List placeholder text - 2024-12-31 22:33:07.305414 */
/* Update Todo List placeholder text - 2024-12-31 22:33:07.407027 */
/* Update Todo List placeholder text - 2024-12-31 22:33:07.507906 */
/* Update Todo List placeholder text - 2024-12-31 22:33:07.679678 */
/* Refactor deleteTodo function - 2024-12-31 22:33:08.585933 */
/* Refactor deleteTodo function - 2024-12-31 22:33:08.757805 */
/* Refactor deleteTodo function - 2024-12-31 22:33:09.007804 */
/* Update Todo List placeholder text - 2024-12-31 22:33:09.085928 */
/* Update Todo List placeholder text - 2024-12-31 22:33:09.834293 */
/* Update Todo List placeholder text - 2024-12-31 22:33:10.006166 */
/* Refactor deleteTodo function - 2024-12-31 22:33:10.178043 */
/* Update Todo List placeholder text - 2024-12-31 22:33:11.318669 */
/* Update Todo List placeholder text - 2024-12-31 22:33:11.969653 */
/* Update Todo List placeholder text - 2024-12-31 22:33:12.128719 */
/* Refactor deleteTodo function - 2024-12-31 22:33:13.066221 */
/* Refactor deleteTodo function - 2024-12-31 22:33:13.159968 */
/* Refactor deleteTodo function - 2024-12-31 22:33:13.238094 */
/* Update Todo List placeholder text - 2024-12-31 22:33:13.503720 */
/* Update Todo List placeholder text - 2024-12-31 22:33:13.784971 */
/* Refactor deleteTodo function - 2024-12-31 22:33:14.097033 */
/* Refactor deleteTodo function - 2024-12-31 22:33:14.300749 */
/* Update Todo List placeholder text - 2024-12-31 22:33:14.410133 */
/* Update Todo List placeholder text - 2024-12-31 22:33:15.097955 */
/* Refactor deleteTodo function - 2024-12-31 22:33:15.269830 */
/* Update Todo List placeholder text - 2024-12-31 22:33:15.613579 */
/* Update Todo List placeholder text - 2024-12-31 22:33:15.707329 */
/* Update Todo List placeholder text - 2024-12-31 22:33:16.301080 */
/* Refactor deleteTodo function - 2024-12-31 22:33:16.408875 */
/* Update Todo List placeholder text - 2024-12-31 22:33:16.503997 */
/* Refactor deleteTodo function - 2024-12-31 22:33:16.675886 */
/* Refactor deleteTodo function - 2024-12-31 22:33:17.175884 */
/* Update Todo List placeholder text - 2024-12-31 22:33:17.597760 */
/* Update Todo List placeholder text - 2024-12-31 22:33:17.769637 */
/* Refactor deleteTodo function - 2024-12-31 22:33:18.019635 */
/* Refactor deleteTodo function - 2024-12-31 22:33:18.363383 */
/* Refactor deleteTodo function - 2024-12-31 22:33:19.019194 */
/* Update Todo List placeholder text - 2024-12-31 22:33:19.191065 */
/* Update Todo List placeholder text - 2024-12-31 22:33:19.566070 */
/* Update Todo List placeholder text - 2024-12-31 22:33:19.831692 */
/* Update Todo List placeholder text - 2024-12-31 22:33:19.925445 */
/* Update Todo List placeholder text - 2024-12-31 22:33:20.113352 */
/* Update Todo List placeholder text - 2024-12-31 22:33:20.207106 */
/* Update Todo List placeholder text - 2024-12-31 22:33:21.112074 */
/* Update Todo List placeholder text - 2024-12-31 22:33:21.455824 */
/* Update Todo List placeholder text - 2024-12-31 22:33:21.705824 */
/* Refactor deleteTodo function - 2024-12-31 22:33:21.877700 */
/* Refactor deleteTodo function - 2024-12-31 22:33:21.971450 */
/* Refactor deleteTodo function - 2024-12-31 22:33:22.987074 */
/* Refactor deleteTodo function - 2024-12-31 22:33:23.092238 */
/* Refactor deleteTodo function - 2024-12-31 22:33:23.177165 */
/* Refactor deleteTodo function - 2024-12-31 22:33:23.266821 */
/* Update Todo List placeholder text - 2024-12-31 22:33:23.344937 */
/* Update Todo List placeholder text - 2024-12-31 22:33:23.594937 */
/* Update Todo List placeholder text - 2024-12-31 22:33:23.969937 */
/* Refactor deleteTodo function - 2024-12-31 22:33:24.048061 */
/* Refactor deleteTodo function - 2024-12-31 22:33:24.126185 */
/* Refactor deleteTodo function - 2024-12-31 22:33:24.719936 */
/* Refactor deleteTodo function - 2024-12-31 22:33:25.141812 */
/* Refactor deleteTodo function - 2024-12-31 22:33:25.219937 */
/* Update Todo List placeholder text - 2024-12-31 22:33:25.579212 */
/* Refactor deleteTodo function - 2024-12-31 22:33:25.922962 */
/* Update Todo List placeholder text - 2024-12-31 22:33:26.030030 */
/* Update Todo List placeholder text - 2024-12-31 22:33:26.326418 */
/* Update Todo List placeholder text - 2024-12-31 22:33:26.682169 */
/* Refactor deleteTodo function - 2024-12-31 22:33:26.872839 */
/* Update Todo List placeholder text - 2024-12-31 22:33:28.026666 */
/* Update Todo List placeholder text - 2024-12-31 22:33:28.119023 */
/* Refactor deleteTodo function - 2024-12-31 22:33:28.285671 */
/* Refactor deleteTodo function - 2024-12-31 22:33:28.751693 */
/* Update Todo List placeholder text - 2024-12-31 22:33:29.075320 */
/* Refactor deleteTodo function - 2024-12-31 22:33:29.389514 */
/* Refactor deleteTodo function - 2024-12-31 22:33:29.790932 */
/* Refactor deleteTodo function - 2024-12-31 22:33:29.965005 */
/* Refactor deleteTodo function - 2024-12-31 22:33:30.043124 */
/* Refactor deleteTodo function - 2024-12-31 22:33:30.465002 */
/* Update Todo List placeholder text - 2024-12-31 22:33:30.543129 */
/* Update Todo List placeholder text - 2024-12-31 22:33:30.636873 */
/* Refactor deleteTodo function - 2024-12-31 22:33:30.748420 */
/* Refactor deleteTodo function - 2024-12-31 22:33:31.657668 */
/* Refactor deleteTodo function - 2024-12-31 22:33:32.206388 */
/* Update Todo List placeholder text - 2024-12-31 22:33:32.454990 */
/* Refactor deleteTodo function - 2024-12-31 22:33:32.572474 */
/* Refactor deleteTodo function - 2024-12-31 22:33:32.689281 */
/* Update Todo List placeholder text - 2024-12-31 22:33:32.785309 */
/* Update Todo List placeholder text - 2024-12-31 22:33:32.873200 */
/* Update Todo List placeholder text - 2024-12-31 22:33:33.050119 */
/* Refactor deleteTodo function - 2024-12-31 22:33:33.201818 */
/* Update Todo List placeholder text - 2024-12-31 22:33:33.545057 */
/* Update Todo List placeholder text - 2024-12-31 22:33:33.935085 */
/* Update Todo List placeholder text - 2024-12-31 22:33:35.040819 */
/* Refactor deleteTodo function - 2024-12-31 22:33:35.584613 */
/* Refactor deleteTodo function - 2024-12-31 22:33:35.886329 */
/* Refactor deleteTodo function - 2024-12-31 22:33:36.911322 */
/* Update Todo List placeholder text - 2024-12-31 22:33:37.255811 */
/* Refactor deleteTodo function - 2024-12-31 22:33:37.388756 */
/* Update Todo List placeholder text - 2024-12-31 22:33:37.848266 */
/* Refactor deleteTodo function - 2024-12-31 22:33:37.953475 */
/* Update Todo List placeholder text - 2024-12-31 22:33:38.276610 */
/* Refactor deleteTodo function - 2024-12-31 22:33:38.868400 */
/* Update Todo List placeholder text - 2024-12-31 22:33:40.330666 */
/* Update Todo List placeholder text - 2024-12-31 22:33:40.464763 */
/* Refactor deleteTodo function - 2024-12-31 22:33:40.967265 */
/* Refactor deleteTodo function - 2024-12-31 22:33:42.006100 */
/* Update Todo List placeholder text - 2024-12-31 22:33:42.306934 */
/* Refactor deleteTodo function - 2024-12-31 22:33:42.769234 */
/* Update Todo List placeholder text - 2024-12-31 22:33:43.097235 */
/* Refactor deleteTodo function - 2024-12-31 22:33:43.190588 */
/* Refactor deleteTodo function - 2024-12-31 22:33:43.860950 */
/* Refactor deleteTodo function - 2024-12-31 22:33:43.977108 */
/* Refactor deleteTodo function - 2024-12-31 22:33:44.081158 */
/* Refactor deleteTodo function - 2024-12-31 22:33:44.221783 */
/* Update Todo List placeholder text - 2024-12-31 22:33:44.300211 */
/* Update Todo List placeholder text - 2024-12-31 22:33:44.753113 */
/* Update Todo List placeholder text - 2024-12-31 22:33:45.025844 */
/* Refactor deleteTodo function - 2024-12-31 22:33:45.393669 */
/* Update Todo List placeholder text - 2024-12-31 22:33:45.904000 */
/* Update Todo List placeholder text - 2024-12-31 22:33:46.016878 */
/* Update Todo List placeholder text - 2024-12-31 22:33:46.784161 */
/* Update Todo List placeholder text - 2024-12-31 22:33:46.871625 */
/* Update Todo List placeholder text - 2024-12-31 22:33:46.956572 */
/* Update Todo List placeholder text - 2024-12-31 22:33:47.284519 */
/* Update Todo List placeholder text - 2024-12-31 22:33:47.378258 */
/* Update Todo List placeholder text - 2024-12-31 22:33:47.457014 */
/* Update Todo List placeholder text - 2024-12-31 22:33:47.878582 */
/* Update Todo List placeholder text - 2024-12-31 22:33:48.049968 */
/* Refactor deleteTodo function - 2024-12-31 22:33:49.622752 */
/* Refactor deleteTodo function - 2024-12-31 22:33:49.737791 */
/* Update Todo List placeholder text - 2024-12-31 22:33:50.082124 */
/* Refactor deleteTodo function - 2024-12-31 22:33:51.221830 */
/* Update Todo List placeholder text - 2024-12-31 22:33:51.867424 */
/* Update Todo List placeholder text - 2024-12-31 22:33:51.956232 */
/* Update Todo List placeholder text - 2024-12-31 22:33:52.487563 */
/* Refactor deleteTodo function - 2024-12-31 22:33:53.475009 */
