import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();
        
        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: []
        };
        this.handleFilter = this.handleFilter.bind(this);
        // this.getPortfolioItems = this.getPortfolioItems.bind(this);
    }

    handleFilter(filter) {
        if (filter === 'Clear_Filters') {
            this.getPortfolioItems();
        } else {
           this.getPortfolioItems(filter);
        }
        

    }

    getPortfolioItems(filter = null) {
        axios
        .get('https://jtompa.devcamp.space/portfolio/portfolio_items')
        .then(response => {
            if (filter) {
                this.setState({
                    data: response.data.portfolio_items.filter(item => {
                        return item.category === filter;
                    })
                });
            } else {
                this.setState({
                    data: response.data.portfolio_items
                });
            }
          
        })
        .catch(error => {
            console.log(error);
        });
    
    }
    portfolioitems() {
        return this.state.data.map(item => {
            return <PortfolioItem key={item.id} item={item} />;
        });
    }

    componentDidMount() {
        this.getPortfolioItems();
    }
    
    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }

        return (
            <div className="homepage-wrapper">
                <div className="filter-links">
                    <button className="btn" onClick={() => this.handleFilter('Rifleman')}>Rifleman</button>
                    <button className="btn" onClick={() => this.handleFilter('Laborer')}>Laborer</button>
                    <button className="btn" onClick={() => this.handleFilter('Groundsman')}>Groundsman</button>
                    <button className="btn" onClick={() => this.handleFilter('Clear_Filters')}>All</button>
                </div>
                <div className="portfolio-items-wrapper">{this.portfolioitems()}</div>
            </div>
        );
    }
}

// {title: "USMC", category: "Rifleman", slug: "usmc"}, 
                // {title: "Park N' Shade", category: "Laborer", slug: "park-nshade"}, 
                // {title: "SunShade", category: "Groundsman", slug: "sunshade"}
                // console.log("response data", response);

                //  portfolio items* // Data needed:
        // - background image: thumb_img url
        // - logo
        // - description: description
        // -id: id 

        //  getPortfolioItems()  add- on > .finally(function () {
    //   });
    //  console.log("portfolio item", item);