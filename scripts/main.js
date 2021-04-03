'use strict';

class Workout {
  clicks = 0;
  date = new Date();
  id = (Date.now() + '').slice(-10);

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }

  _setDescription() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      moths[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}

class Running extends Workout {
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calculatePace();
    this._setDescription();
  }

  calculatePace() {
    // min / km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calculateSpeed();
    this._setDescription();
  }

  calculateSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

//////////////////
// APPLICATION ARCHITECTURE
const $form = document.querySelector('.form');
const $containerWorkouts = document.querySelector('.workouts');
const $inputType = document.querySelector('.form__input--type');
const $inputDistance = document.querySelector('.form__input--distance');
const $inputDuration = document.querySelector('.form__input--duration');
const $inputCadence = document.querySelector('.form__input--cadence');
const $inputElevation = document.querySelector('.form__input--elevation');

class App {
  map = null;
  mapZoomLevel = 13;
  mapEvent = null;
  workouts = [];
}
