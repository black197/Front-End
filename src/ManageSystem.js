import React from 'react';

import StaffHeader from './StaffHeader.js';
import StaffItemPanel from './StaffItemPanel.js';
import StaffFooter from './StaffFooter.js';
import StaffDetail from './StaffDetail.js';
import Staff from './STAFF.js';

import './style.css';

export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            staff : new Staff,
            staffDetail: null
        };
    }
    
    addStaffItem(item){
        this.setState({
            staff: this.state.staff.addStaffItem(item)
        });
    }

    removeStaffItem(key){
	    this.setState({
		    staff: this.state.staff.removeStaffItem(key)
		});
	}

	detailStaffItem(key){
	    this.setState({
		    staffDetail: this.state.staff.staff.filter(item => {
			    return item.key==key;
			})[0]
		});
	}
	
	closeDetail(){
	    this.setState({
		    staffDetail: null
		});
	}
	
	editDetail(item){
	    this.setState({
		    staff : this.state.staff.editStaffItem(item)
		});
	}
	
	sortStaff(sortType) {
	    this.setState({
		    staff: this.state.staff.sortStaff(sortType) 
		});
	}
	
	filtStaff(filtType) {
	    this.setState({
		    staff: this.state.staff.filtStaff(filtType)
		});
	}

    searchStaff(word) {
        this.setState({
            staff: this.state.staff.searchStaff(word)
        });
    }

    render(){
        return (
          <div>
            <StaffHeader sortStaff={this.sortStaff.bind(this)} filtStaff={this.filtStaff.bind(this)} searchStaff={this.searchStaff.bind(this)}/>
            <StaffItemPanel items={this.state.staff.staff} removeStaffItem={this.removeStaffItem.bind(this)} detailStaffItem={this.detailStaffItem.bind(this)}/>
            <StaffFooter addStaffItem={this.addStaffItem.bind(this)}/>
            <StaffDetail staffDetail={this.state.staffDetail} closeDetail={this.closeDetail.bind(this)} editDetail={this.editDetail.bind(this)}/>
          </div>
        );
    }
}