import { useState } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // You'll need to replace these with your actual EmailJS credentials
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'fishrifle@yahoo.com'
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Ready to work together? Let's discuss your next project!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-semibold text-yellow-400 mb-8">Let's Connect</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                  📧
                </div>
                <div>
                  <div className="text-gray-300 font-semibold">Email</div>
                  <div className="text-gray-400">fishrifle@yahoo.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                  📱
                </div>
                <div>
                  <div className="text-gray-300 font-semibold">Phone</div>
                  <div className="text-gray-400">(931) 210-8791</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                  📍
                </div>
                <div>
                  <div className="text-gray-300 font-semibold">Location</div>
                  <div className="text-gray-400">Available Remotely</div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-xl font-semibold text-yellow-400 mb-6">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/fishrifle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-black/60 to-gray-900/60 border border-yellow-400/30 rounded-lg flex items-center justify-center hover:border-yellow-400 hover:scale-110 transition-all duration-300"
                  title="GitHub"
                >
                  💻
                </a>
                <a
                  href="https://www.linkedin.com/in/jesse-davis-web-development"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-black/60 to-gray-900/60 border border-yellow-400/30 rounded-lg flex items-center justify-center hover:border-yellow-400 hover:scale-110 transition-all duration-300"
                  title="LinkedIn"
                >
                  💼
                </a>
                <a
                  href="mailto:fishrifle@yahoo.com"
                  className="w-12 h-12 bg-gradient-to-br from-black/60 to-gray-900/60 border border-yellow-400/30 rounded-lg flex items-center justify-center hover:border-yellow-400 hover:scale-110 transition-all duration-300"
                  title="Email"
                >
                  📧
                </a>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/60 border border-gray-600 rounded-lg focus:border-yellow-400 focus:outline-none text-gray-300 transition-colors duration-300"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-300 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/60 border border-gray-600 rounded-lg focus:border-yellow-400 focus:outline-none text-gray-300 transition-colors duration-300"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-300 font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 bg-black/60 border border-gray-600 rounded-lg focus:border-yellow-400 focus:outline-none text-gray-300 transition-colors duration-300 resize-none"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 font-semibold rounded-lg transition-all duration-300 hover:scale-105 ${
                  isSubmitting 
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-300 hover:to-orange-400'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-300 text-center">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-300 text-center">
                  Failed to send message. Please try emailing me directly at fishrifle@yahoo.com
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};