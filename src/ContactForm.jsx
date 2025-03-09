import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    messaggio: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.nome,
      user_email: formData.email,
      message: formData.messaggio
    };

    emailjs.send(
      'service_e26ferf',      // Il tuo Service ID
      'template_fawka9q',     // Il tuo Template ID
      templateParams,
      '2qJNu1XL3C9ub_nNa'     // La tua Public Key
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Messaggio inviato con successo!');
      setFormData({ nome: '', email: '', messaggio: '' });
    })
    .catch((err) => {
      console.error('FAILED...', err);
      alert('Si è verificato un errore. Riprova più tardi.');
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl card-shadow">
      <div className="space-y-6">
        <div className="group">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nome e cognome
          </label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-600 focus:border-transparent transition-all group-hover:border-rose-300"
            required
          />
        </div>
        <div className="group">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-600 focus:border-transparent transition-all group-hover:border-rose-300"
            required
          />
        </div>
        <div className="group">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Messaggio
          </label>
          <textarea
            name="messaggio"
            rows={4}
            value={formData.messaggio}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-600 focus:border-transparent transition-all group-hover:border-rose-300"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-rose-500 to-rose-600 text-white py-4 rounded-lg hover:from-rose-600 hover:to-rose-700 transition-all hover:scale-[1.02] relative overflow-hidden button-glow"
        >
          Invia Messaggio
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
