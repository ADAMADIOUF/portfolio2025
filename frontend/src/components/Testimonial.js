import React from 'react'

const Testimonial = () => {
  const testimonials = [
    {
      name: 'Mariam S.',
      role: 'Blogger',
      review:
        'Working with Adama was an absolute pleasure! He transformed my vision into a sleek, professional blog website that exceeded my expectations. The site is fast, responsive, and beautifully designed, making it easy for me to engage with my readers. Adama’s attention to detail and ability to deliver on time were remarkable. I couldn’t be happier with the results!',
    },
    {
      name: 'James T.',
      role: 'Real Estate Agent',
      review:
        'Adama created a stunning and highly functional real estate website for my business. The design is clean, modern, and user-friendly, allowing my clients to browse properties seamlessly. His understanding of our goals and dedication to perfection made the process stress-free. Thanks to Adama, my online presence has grown significantly, and I’m seeing more leads every day!',
    },
    {
      name: 'Fatou D.',
      role: 'Online Store Owner',
      review:
        'Adama developed an outstanding e-commerce website for my store, and I am thrilled with the outcome! The platform is visually appealing, easy to navigate, and fully optimized for mobile devices. Adama’s expertise in integrating payment systems and ensuring everything runs smoothly has taken my business to the next level. I highly recommend his services to anyone looking for a reliable and skilled developer.',
    },
  ]

  return (
    <section className='section-center'>
      <h2>What My Clients Say</h2>
      <div className='testimonial-container'>
        {testimonials.map((testimonial, index) => (
          <article key={index} className='testimonial'>
            <p className='review'>"{testimonial.review}"</p>
            <h4 className='client-name'>{testimonial.name}</h4>
            <p className='client-role'>{testimonial.role}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Testimonial
