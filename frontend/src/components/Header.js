import { Button } from "antd";
import React from "react";
import "./Header.css";

export default class Header extends React.Component {
    root = () => {
        const isLoggedIn = localStorage.getItem("username") && localStorage.getItem("token");
        
        if (isLoggedIn) {
            this.props.history.push("/products");
        } else {
            this.props.history.push("/");
        }
    };
    

    explore = () => {
        this.props.history.push("/products");
    };

    register = () => {
        this.props.history.push("/register");
    };

    login = () => {
        this.props.history.push("/login");
    };

    logout = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("token");
        this.props.history.push("/");
    };

    render() {
        return (
            <div>
                <div className="header d-flex flex-row justify-content-between align-items-center">
                    {/* Shows Qkart title image */}
                    <div className="header-title" onClick={this.root}>
                        <img src="icon.svg" alt="QKart-icon"></img>
                    </div>



                    {/* Display links based on if the user's logged in or not */}
                    <div className="header-action">
                        {localStorage.getItem("username") ? (
                            <>
                                <img
                                    src="avatar.png"
                                    alt="profile"
                                    className="profile-image"
                                ></img>

                                <div className="header-info">
                                    {localStorage.getItem("username")}
                                </div>

                                <Button type="primary" onClick={this.logout}>
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <>
                                <div className="header-link" onClick={this.explore}>
                                    Explore
                                </div>

                                <div className="header-link" onClick={this.login}>
                                    Login
                                </div>

                                <div className="header-link">
                                    <Button type="primary" onClick={this.register}>
                                        Register
                                    </Button>
                                </div>
                            </>
                        )}
                    </div>

                </div>
                <hr />
                <div className="header-search">
                    {this.props.children}
                </div>

            </div>
        );
    }
}
