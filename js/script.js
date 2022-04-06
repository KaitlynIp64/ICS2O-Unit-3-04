// Copyright (c) 2022 Kaitlyn Ip All rights reserved
//
// Created by: Kaitlyn Ip
// Created on: Apr 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates Celsius from Fahrenheit.
 */
function calculate () {
  // input
  const fahrenheit = parseFloat(document.getElementById("fahrenheit").value)

  // process
  const celsius = (fahrenheit - 32) x 5.0 / 9.0

  // output
  document.getElementById('celsius').innerHTML = 'celsius is: ' + celsius.toFixed(2) + ' °C'
}
