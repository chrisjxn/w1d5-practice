import React, { Component } from 'react';
import './App.css';
import Timer from './Timer'


class App extends Component {
  render() {
    return (
      <body>
        <section class="main_wrapper">
          <header class="main_header">
            <h2 class="header_text">Header text</h2>
            <nav class="main_nav">
              <ul>
                <li>Menu</li>
                <li>Items</li>
                <li>Go</li>
                <li>Here</li>
                <li>Bruh</li>
              </ul>
            </nav>
          </header>
          <section class="content_section">
            <h1 class="main_text">User update-able main text</h1>
            <button class="clicker">Click to update something (background image?)</button>
            <p class="list_text">User update-able running list</p>
            <form class="form_text">
              <p>Update main text</p>
              <input type="text" name="contentText" class="input_text"/>
            </form>
            <form class="form_text">
              <p>Add to running list</p>
              <input type="text" name="contentText" class="input_text"/>
            </form>
            <form class="form_radio">
              <p>Choose a background</p>
              <p id="radio_button_text">
                <input type="radio" name="chooseBackground" value="Cat" class="radio_button" checked /> Cat
                <input type="radio" name="chooseBackground" value="Airplane" class="radio_button" /> Airplane
                <input type="radio" name="chooseBackground" value="Nature" class="radio_button" /> Nature
              </p>
            </form>
            <Timer />
          </section>
        </section>
      </body>
    );
  }
}

export default App;