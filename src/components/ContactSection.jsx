import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  // Initialize Email.js (replace with your actual public key)
  useEffect(() => {
    // Load EmailJS script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.onload = () => {
      window.emailjs.init("1BDeOzcoFZjomAbF-");
    };
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
      return;
    }

    setIsLoading(true);
    setStatus('');

    try {
      // Create a template params object that matches your EmailJS template
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Arkhan', // Your name
      };

      const result = await window.emailjs.send(
        'service_uarklfp',
        'template_4qsl8bk',
        templateParams,
        '1BDeOzcoFZjomAbF-'
      );

      console.log('Email sent successfully:', result.text);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Clear status after 5 seconds
      setTimeout(() => setStatus(''), 5000);
      
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
      
      // Clear status after 5 seconds
      setTimeout(() => setStatus(''), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section ref={ref} id="contact" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8">
              <div>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-gray-400 text-sm uppercase tracking-wider mb-4"
                >
                  Get In Touch
                </motion.p>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-5xl font-bold leading-tight"
                >
                  Let's Create<br />
                  <span className="text-gray-600">Something Great</span>
                </motion.h2>
              </div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-300 leading-relaxed"
              >
                Ready to bring your next project to life? I'm always excited to discuss 
                new opportunities and innovative challenges.
              </motion.p>

              <div className="space-y-6">
                {[
                  { icon: Mail, title: "arkhan060320045@gmail.com", subtitle: "Drop me a line", delay: 0.5 },
                  { icon: MapPin, title: "Lahore, Pakistan", subtitle: "Available for remote work", delay: 0.7 }
                ].map((contact, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.8, delay: contact.delay }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <contact.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    <div>
                      <div className="font-medium group-hover:text-gray-200 transition-colors duration-300">{contact.title}</div>
                      <div className="text-gray-400 text-sm">{contact.subtitle}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Setup Instructions */}
             
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-900 p-8 space-y-6 rounded-lg"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                whileFocus={{ scale: 1.02, borderColor: "#ffffff" }}
                className="w-full p-4 bg-black border border-gray-800 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-all duration-300"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                whileFocus={{ scale: 1.02, borderColor: "#ffffff" }}
                className="w-full p-4 bg-black border border-gray-800 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-all duration-300"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                whileFocus={{ scale: 1.02, borderColor: "#ffffff" }}
                className="w-full p-4 bg-black border border-gray-800 text-white placeholder-gray-500 focus:border-white focus:outline-none transition-all duration-300 resize-none"
              />
            </motion.div>
            
            {status && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-center p-3 rounded ${
                  status === 'success' 
                    ? 'bg-green-900 text-green-300 border border-green-700' 
                    : 'bg-red-900 text-red-300 border border-red-700'
                }`}
              >
                {status === 'success' 
                  ? 'Message sent successfully! I\'ll get back to you soon.' 
                  : 'Please fill in all fields or check your EmailJS configuration.'}
              </motion.div>
            )}
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: isLoading ? 1 : 1.05, y: isLoading ? 0 : -2 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
              onClick={handleSubmit}
              disabled={isLoading}
              className={`w-full py-4 font-medium transition-all duration-300 ${
                isLoading 
                  ? 'bg-gray-400 text-gray-700 cursor-not-allowed' 
                  : 'bg-white text-black hover:bg-gray-200'
              }`}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;