import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useToast } from '@/hooks/use-toast';

const BookingSection = () => {
  const header = useScrollReveal();
  const form = useScrollReveal(0.1);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '', phone: '', date: '', time: '', guests: '', table: '', requests: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Reservation submitted!",
      description: "We'll contact you soon.",
    });
    setFormData({ name: '', phone: '', date: '', time: '', guests: '', table: '', requests: '' });
  };

  const inputClass = "w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-lg px-4 py-3 font-body text-sm text-[#f1f1f1] font-light focus:border-red-glow focus:outline-none transition-colors";
  const labelClass = "font-heading text-[0.75rem] tracking-[2px] text-muted-foreground mb-1 block";

  return (
    <section id="booking" className="py-[100px] px-6 bg-background">
      <div ref={header.ref} className={`text-center mb-10 transition-all duration-700 ${header.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="font-heading text-[2rem] tracking-[5px] text-[#f1f1f1]">BOOK YOUR TABLE</h2>
        <p className="font-body text-[0.82rem] text-muted-foreground font-light max-w-[540px] mx-auto mt-3">
          Reserve your spot at Auxiliary. Fill in the details below and our team will confirm your booking via Messenger or call.
        </p>
      </div>

      <div ref={form.ref} className={`max-w-[700px] mx-auto glass rounded-2xl p-8 md:p-10 transition-all duration-700 ${form.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>FULL NAME</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Juan Dela Cruz" className={inputClass} required />
            </div>
            <div>
              <label className={labelClass}>PHONE NUMBER</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="09XX XXX XXXX" className={inputClass} required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>DATE</label>
              <input type="date" name="date" value={formData.date} onChange={handleChange} className={inputClass} required />
            </div>
            <div>
              <label className={labelClass}>TIME</label>
              <select name="time" value={formData.time} onChange={handleChange} className={inputClass} required>
                <option value="">Select time</option>
                <option>7:00 PM</option>
                <option>8:00 PM</option>
                <option>9:00 PM</option>
                <option>10:00 PM</option>
                <option>11:00 PM</option>
                <option>12:00 AM</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>NUMBER OF GUESTS</label>
              <select name="guests" value={formData.guests} onChange={handleChange} className={inputClass} required>
                <option value="">Select guests</option>
                <option>1-4 Guests</option>
                <option>5-8 Guests</option>
                <option>9-12 Guests</option>
                <option>13-20 Guests</option>
                <option>20+ Guests (Event)</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>TABLE PREFERENCE</label>
              <select name="table" value={formData.table} onChange={handleChange} className={inputClass} required>
                <option value="">Select table</option>
                <option>Regular Table</option>
                <option>VIP Table</option>
                <option>Super VIP Table</option>
                <option>Bar Counter Seats</option>
              </select>
            </div>
          </div>

          <div>
            <label className={labelClass}>SPECIAL REQUESTS</label>
            <textarea name="requests" value={formData.requests} onChange={handleChange} placeholder="Birthday celebration, special setup, preferred DJ, etc." className={`${inputClass} min-h-[100px]`} />
          </div>

          <button
            type="submit"
            className="w-full font-heading text-[0.9rem] tracking-[4px] py-4 rounded-lg text-[#f1f1f1] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(193,18,31,0.4)]"
            style={{ background: 'linear-gradient(135deg, #c1121f, #8b0000)' }}
          >
            SUBMIT RESERVATION
          </button>
        </form>

        <p className="font-body text-[0.72rem] text-muted-foreground text-center mt-6 font-light">
          Our team will reach out to confirm your reservation within 24 hours. For urgent bookings, message us directly on Messenger.
        </p>
      </div>
    </section>
  );
};

export default BookingSection;
