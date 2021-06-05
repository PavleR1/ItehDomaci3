import axios from "axios";
let data = {
	"events": [
	  {
			"description": "Najbolji dogadjaj",
			  "ticketsAvailable": 9,
			  "ticketPrice": "1000",
			  "image": "http://regata.rs/drina/wp-content/uploads/2018/06/Regata-web1-1.png",
			  "type": "regata",
			  "id": 1,
			  "ticketsSold": 20000,
			  "date": "2021-02-10",
			  "time": "14:52",
			  "title": "Drinska Regata"
	  },
	  {	"description": "Naji dogadjaj",
		  "ticketsAvailable": 9,
		  "ticketPrice": "1000",
		  "image": "http://regata.rs/drina/wp-content/uploads/2018/06/Regata-web1-1.png",
		  "type": "regata",
		  "id": 2,
		  "ticketsSold": 20000,
		  "date": "2021-02-10",
		  "time": "14:52",
		  "title": "Drinska Regata"
  }
	]
  }

export const getAll = async () => {
	return data.events
};

export const getById = async (id) => {
	return data.events[id];
};

export const save = async (event) => {
	data.events.push(event);
	data.events[data.events.length - 1].id = data.events.length
	return ;
};

export const update = async (event) => {
	data.events[event.id -1] = event;
	return ;
};

export const deleteById = async (id) => {
	data.events = data.events.splice(id-1,1);
	return;
};