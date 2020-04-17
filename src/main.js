import $ from "jquery";
import 'bootstrap';
import './styles.css';
import { ageCalculator } from "./../src/superGalCal.js";

$(document).ready(function () {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let userInput= $("#age").val();
   
  // newAge = new ageCalculator;
  });
});