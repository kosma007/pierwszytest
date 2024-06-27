import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      errors: {}
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  validate = () => {
    let errors = {};
    if (!this.state.firstName) errors.firstName = "Imię jest wymagane";
    if (!this.state.lastName) errors.lastName = "Nazwisko jest wymagane";
    if (!this.state.email) errors.email = "Email jest wymagany";
    if (!/\S+@\S+\.\S+/.test(this.state.email)) errors.email = "Email jest nieprawidłowy";
    if (!this.state.message) errors.message = "Treść wiadomości jest wymagana";
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    if (Object.keys(errors).length === 0) {
      console.log('Form data:', this.state);
      // Tutaj możesz dodać logikę do wysłania danych formularza
    } else {
      this.setState({ errors });
    }
  };

  render() {
    const { firstName, lastName, email, message, errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Imię:</label>
          <input 
            type="text" 
            name="firstName" 
            value={firstName} 
            onChange={this.handleChange} 
          />
          {errors.firstName && <span>{errors.firstName}</span>}
        </div>
        <div>
          <label>Nazwisko:</label>
          <input 
            type="text" 
            name="lastName" 
            value={lastName} 
            onChange={this.handleChange} 
          />
          {errors.lastName && <span>{errors.lastName}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={email} 
            onChange={this.handleChange} 
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <label>Treść wiadomości:</label>
          <textarea 
            name="message" 
            value={message} 
            onChange={this.handleChange} 
          />
          {errors.message && <span>{errors.message}</span>}
        </div>
        <button type="submit">Wyślij</button>
      </form>
    );
  }
}


export default class Home extends Component {
  static async getInitialProps({ req }) {
    const isServer = !!req;
    

    return { isServer };
  }

  
  render() {

    return (
      <div>
        {this.props.isServer ? (
          <p>Strona została wyrenderowana przez serwer</p>
        ) : (
          <p>Strona została wyrenderowana od razu w przeglądarce</p>
        )}




<div>
    <p>
      <Link
        href="/"
      >
        
          Link

      </Link>{' '}
      do strony glownej
    </p>
  </div>
  <div>
    <p>
      <Link
        href="/Error"
      >
        
          Error

      </Link>{' '}
      do następnej strony
    </p>
  </div>

  <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Kolumna 1 */}
        <div className="sm:col-span-2 md:col-span-1 bg-blue-500 p-4 text-white">
          Column 1
          <div className="mt-4 grid grid-cols-1 gap-4">
            <div className="bg-sky-300 p-2">
            <Link href="https://frusto.pl" style={{ color: 'green' }}>
           Frusto
          </Link>{' '}
            </div>
            <div className="bg-sky-300 p-2">
            <Link href="https://agrolok.pl" style={{ color: 'red' }}>
            agrolok
          </Link>{' '}
            </div>
            <div className="bg-sky-300 p-2">
            <Link href="https://fertivend.pl" style={{ color: 'blue' }}>
            fertivend
          </Link>{' '}
            </div>
          </div>
        </div>

        {/* Kolumna 2 */}
        <div className="bg-blue-500 p-4 text-white">
          Column 2
          <div className="mt-4 grid grid-cols-1 gap-4">
            <div className="bg-orange-300 p-2">Inner Column 1</div>
            <div className="bg-orange-300 p-2">Inner Column 2</div>
            <div className="bg-orange-300 p-2">Inner Column 3</div>
          </div>
        </div>

        {/* Kolumna 3 */}
        <div className="bg-blue-500 p-4 text-white">
          Column 3
          <div className="mt-4 grid grid-cols-1 gap-4">
            <div className="bg-yellow-300 p-2">Inner Column 1</div>
            <div className="bg-yellow-300 p-2">Inner Column 2</div>
            <div className="bg-yellow-300 p-2">Inner Column 3</div>
          </div>
        </div>
      </div>
    </div>

    <div style={{ display: 'flex', justifyContent: 'center', marginTop:'50px' }}>
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/sRC68qzVO9Q" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        
      ></iframe>
    </div>

    <div style={{ marginTop: '50px', textAlign: 'center' }}>
          <h2>Formularz kontaktowy</h2>
          <ContactForm />
        </div>

      </div>
      
    );
  }
}