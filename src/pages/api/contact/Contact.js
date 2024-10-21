export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email, message } = req.body;
  
      // Handle the form submission (e.g., send an email, save to a database, etc.)
      try {
        // Simulate success for this example
        console.log('Form data:', { name, email, message });
        
        res.status(200).json({ message: 'Message sent successfully!' });
      } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({ message: 'Failed to send message.' });
      }
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
    // res.status(200).json({ message: 'Message sent successfully!' });
  }